// eslint-disable-next-line @conarti/feature-sliced/public-api
import { Providers } from './providers';
import { AppRouter } from './router';
import './styles/globals.css';

export const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};
