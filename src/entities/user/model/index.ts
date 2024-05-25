import { createGate, createStore, sample } from '@lib/effector';
import { atom } from '@shared/factory/atom';
import { userQuery } from '../api';
import type { User } from '../types';

export const userModel = atom(() => {
  const Gate = createGate();

  const $user = createStore<User | null>(null);
  const $isLoading = userQuery.$pending;

  sample({
    clock: Gate.open,
    target: userQuery.refresh,
  });

  sample({
    clock: userQuery.finished.success,
    fn: ({ result }) => result,
    target: $user,
  })

  return {
    Gate,
    $user,
    $isLoading,
  };
});


