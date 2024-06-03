import { Timeline } from '@components/timeline';
import { withLayout } from '@hocs/with-layout';
import { Footer } from '@widgets/footer';
import { Header } from '@widgets/header';
import styles from './styles.module.css';

const Schedule = () => {
  return (
    <div className={styles.root}>
      <Timeline />
    </div>
  );
};

export const SchedulePage = withLayout(Schedule, {
  header: <Header />,
  footer: <Footer />,
});
