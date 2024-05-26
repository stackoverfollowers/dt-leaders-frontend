import { createMutation } from '@farfetched/core';
import type { User } from '@entities/user';
import { createDummyJSONRequestFx } from '@shared/api';
import type { LoginParams, RegisterParams } from '../types';

// login: emilys, password: emilyspass
export const loginQuery = createMutation({
  effect: createDummyJSONRequestFx<LoginParams, User & { token: string }>(
    ({ username, password, expiresInMins = 60 }) => ({
      url: '/auth/login',
      method: 'POST',
      data: {
        username,
        password,
        expiresInMins,
      },
    })
  ),
});

export const registerQuery = createMutation({
  effect: createDummyJSONRequestFx<RegisterParams, User & { token: string }>(
    ({ username, password }) => ({
      url: '/auth/register',
      method: 'POST',
      data: {
        username,
        password,
      },
    })
  ),
});

export const refreshQuery = createMutation({
  effect: createDummyJSONRequestFx<void, User & { token: string }>(
    () => ({
      url: '/auth/refresh',
      method: 'POST',
    })
  ),
});
