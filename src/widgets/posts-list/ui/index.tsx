import { useUnit } from '@lib/effector';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@ui/pagination';
import { Skeleton } from '@ui/skeleton';
import { PostCard } from '@entities/post';
import { postsQuery } from '../api';

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

  if (!data) {
    return <SkeletonList />;
  }

  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {data.posts.map((post, idx) => (
          <PostCard key={idx} post={post} />
        ))}
      </div>
      <Pagination className="sm:justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious to="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink to="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink to="#">2</PaginationLink>
          </PaginationItem>
          {/* <PaginationItem>
            <PaginationLink to="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink to="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink to="#">5</PaginationLink>
          </PaginationItem> */}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink to="#">10</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext to="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
