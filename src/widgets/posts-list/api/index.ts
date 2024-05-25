import { createQuery } from '@farfetched/core';
import type { PaginatedPosts } from '@entities/post';
import { createDummyJSONRequestFx } from '@shared/api';

export const postsQuery = createQuery({
  effect: createDummyJSONRequestFx<void, PaginatedPosts>(() => ({
    url: '/posts',
    params: {
      _start: 0,
      _limit: 12,
    },
  })),
});
