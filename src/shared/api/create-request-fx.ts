import { AxiosError, AxiosRequestConfig } from 'axios';
import { createEffect } from 'effector';
import { axios } from './axios';

type CreateRequestParams = AxiosRequestConfig & {
  url: string;
};

type Fn<P> = (params: P) => CreateRequestParams;

type Payload<P> = CreateRequestParams | Fn<P>;

type CreateRequestInstanceParams<P> = CreateRequestParams & {
  withTokenInHeaders?: boolean;
  payload: Payload<P>;
};

type CreateRequestFxParams = Omit<
  CreateRequestInstanceParams<CreateRequestParams>,
  'payload' | 'url'
>;

function getConfig<P>(payload: Payload<P>, params: P): CreateRequestParams {
  return typeof payload === 'function' ? payload(params) : payload;
}

const createRequestInstance = <P = CreateRequestParams, R = void>({
  baseURL,
  headers,
  payload,
  withTokenInHeaders,
}: CreateRequestInstanceParams<P>) => {
  const effectFx = createEffect<P, R>((params) => {
    const { url, ...fetchOptions } = getConfig(payload, params);

    const token = localStorage.getItem('token');

    return axios(url, {
      ...fetchOptions,
      headers: {
        ...headers,
        ...(withTokenInHeaders && token && { Authorization: `Bearer ${token.replace(/"/g, '')}` }),
      },
      baseURL,
    });
  });

  // clear token on 401
  effectFx.fail.watch(({ error }) => {
    const status = (error as AxiosError).response?.status;
    if (status === 401) {
      localStorage.removeItem('token');
    }
  });

  return effectFx;
}
  

export const createRequestFx = (params: CreateRequestFxParams) => {
  return <P = CreateRequestParams, R = void>(payload: Payload<P>) => {
    return createRequestInstance<P, R>({
      ...(params as CreateRequestParams),
      payload,
    })
  }
}

