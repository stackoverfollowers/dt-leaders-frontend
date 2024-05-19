export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};

export type PaginatedPosts = {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
};