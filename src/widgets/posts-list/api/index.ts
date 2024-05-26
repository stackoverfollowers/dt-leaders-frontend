import { createQuery } from '@farfetched/core';
import type { PaginatedPosts } from '@entities/post';
import { createDummyJSONRequestFx } from '@shared/api';

export const postsQuery = createQuery({
  effect: createDummyJSONRequestFx<PostsParams, PaginatedPosts>(({ skip = 0, limit = 12 }) => ({
    url: '/posts',
    params: {
      skip,
      limit
    },
  })),
});

type PostsParams = {
  skip?: number;
  limit?: number;
};