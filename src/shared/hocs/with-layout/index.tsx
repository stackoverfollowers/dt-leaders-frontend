import type { ReactNode } from 'react';

export function withLayout<P extends object>(
  PageComponent: React.ComponentType<P>,
  { footer, header }: Props,
) {
  return (props: P & { children?: React.ReactNode }) => {
    return (
      <div className="relative flex min-h-screen flex-col bg-background">
        {header}
        <main className="flex-1">
          <div className="container relative">
            <PageComponent {...props} />
          </div>
        </main>
        {footer}
      </div>
    );
  };
}

type Props = Partial<{
  header: ReactNode;
  footer: ReactNode;
}>;
