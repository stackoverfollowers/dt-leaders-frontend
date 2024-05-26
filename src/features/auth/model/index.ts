import { createEvent, createStore, sample } from '@lib/effector';
import { persist } from 'effector-storage/local'
import { loginQuery, registerQuery } from '../api';
import type { LoginParams, RegisterParams } from '../types';

export const login = createEvent<LoginParams>();
export const logout = createEvent();
export const register = createEvent<RegisterParams>();

export const $token = createStore<string | null>(null)
  .reset(logout);
persist({ store: $token, key: 'token' })

sample({
  clock: login,
  target: loginQuery.start,
})

sample({
  clock: loginQuery.finished.success,
  fn: ({ result }) => result.token,
  target: $token,
})

sample({
  clock: register,
  target: registerQuery.start,
})

sample({
  clock: registerQuery.finished.success,
  fn: ({ result }) => result.token,
  target: $token,
})