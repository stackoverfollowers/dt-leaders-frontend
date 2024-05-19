import { createQuery } from '@farfetched/core';
import type { PaginatedPosts } from '@entities/post';
import { createCommonRequestFx } from '@shared/api';

export const postsQuery = createQuery({
  effect: createCommonRequestFx<void, PaginatedPosts>(() => ({
    url: '/posts',
    params: {
      _start: 0,
      _limit: 12,
    },
  })),
});
