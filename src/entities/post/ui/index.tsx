import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import type { Post } from '../types';

export const PostCard = ({ post }: Props) => {
  return (
    <Card className="h-40">
      <CardHeader className="flex flex-row justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{post.title}</CardTitle>
        <span className="text-muted-foreground">{post.id}</span>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground line-clamp-5">{post.body}</p>
      </CardContent>
    </Card>
  );
};

type Props = {
  post: Post;
};
