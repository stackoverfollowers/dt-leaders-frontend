import { withLayout } from '@hocs/with-layout';
import { Footer } from '@widgets/footer';
import { Header } from '@widgets/header';
import { Hero } from '@widgets/hero';
import { PostList } from '@widgets/posts-list';

export const Posts = () => {
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
