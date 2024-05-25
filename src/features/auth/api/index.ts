import { createMutation } from '@farfetched/core';
import { sample } from 'effector';
import type { User } from '@entities/user';
import { createDummyJSONRequestFx } from '@shared/api';
import type { LoginParams } from '../types';

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

sample({
  clock: loginQuery.finished.success,
  fn: ({ result }) => {
    console.log(result);
  },
})