import { cache, createQuery } from '@farfetched/core';
import type { Post } from '@entities/post';
import { createCommonRequestFx } from '@shared/api';

export const postsQuery = createQuery({
  effect: createCommonRequestFx<void, Post[]>(() => ({
    url: '/posts',
    params: {
      _start: 0,
      _limit: 12,
    },
  })),
});

cache(postsQuery);

postsQuery.start();
