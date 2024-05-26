import { Pagination } from '@components/pagination';
import { useUnit } from '@lib/effector';
import { Skeleton } from '@ui/skeleton';
import { PostCard } from '@entities/post';
import { postsQuery } from '../api';
import { postsModel } from '../model';

const SkeletonList = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {Array.from({ length: 12 }).map((_, idx) => (
        <Skeleton key={idx} className="h-40 w-full rounded-xl" />
      ))}
    </div>
  );
};

export const PostList = () => {
  const { data } = useUnit(postsQuery);
  const { 
    page,
    limit,
    isLoading,
    setPage
  } = useUnit({
    page: postsModel.$page,
    limit: postsModel.$limit,
    isLoading: postsModel.$isLoading,
    setPage: postsModel.setPage
  })

  if (!data || isLoading) {
    return <SkeletonList />;
  }

  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {data.posts.map((post, idx) => (
          <PostCard key={idx} post={post} />
        ))}
      </div>
      <Pagination 
        className="sm:justify-end"
        value={page}
        onChange={setPage}
        total={data.total} 
        limit={limit} 
      />
    </div>
  );
};