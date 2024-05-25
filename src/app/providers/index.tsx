import { FC } from 'react';
import { AuthProvider } from './auth';
import { ThemeProvider } from './theme';

interface IProviders {
  /** Content that will be wrapped by providers. */
  readonly children: JSX.Element;
}

export const Providers: FC<IProviders> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
};
