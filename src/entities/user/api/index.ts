import {  createQuery } from '@farfetched/core';
import { createDummyJSONRequestFx } from '@shared/api';
import type { User } from '../types';

export const userQuery = createQuery({
  effect: createDummyJSONRequestFx<void, User>(
    () => ({
      url: '/auth/me',
    })
  ),
});

