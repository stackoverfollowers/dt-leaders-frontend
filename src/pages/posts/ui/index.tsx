import { withLayout } from '@hocs/with-layout';
import { useGate } from '@lib/effector';
import { Footer } from '@widgets/footer';
import { Header } from '@widgets/header';
import { Hero } from '@widgets/hero';
import { PostList } from '@widgets/posts-list';
import { postsModel } from '@widgets/posts-list';

export const Posts = () => {
  useGate(postsModel.Gate);

  return (
    <>
      <Hero />
      <PostList />
    </>
  );
};

export const PostsPage = withLayout(Posts, {
  header: <Header />,
  footer: <Footer />,
});
