import { withLayout } from '@hocs/with-layout';
import { Footer } from '@widgets/footer';
import { Header } from '@widgets/header';
import { Hero } from '@widgets/hero';

const Root = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export const RootPage = withLayout(Root, {
  header: <Header />,
  footer: <Footer />,
});
