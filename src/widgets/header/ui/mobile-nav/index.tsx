import { Icons } from '@components/icons';
import { navConfig } from '@config/nav';
import { siteConfig } from '@config/site';
import { cn } from '@lib/utils';
import { Button } from '@ui/button';
import { ScrollArea } from '@ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@ui/sheet';
import clsx from 'clsx';
import { useState } from 'react';
import { Link, LinkProps, useNavigate } from 'react-router-dom';

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink to="/" className="flex items-center" onOpenChange={setOpen}>
          <Icons.logo className="mr-2 h-4 w-4" />
          <span className="font-bold">{siteConfig.shortName}</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {navConfig.mainNav.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    to={item.disabled ? '#' : item.href}
                    onOpenChange={setOpen}
                    className={clsx({
                      'text-foreground': location.pathname === item.href,
                      'text-foreground/60': location.pathname !== item.href,
                      'cursor-not-allowed text-foreground/30': item.disabled,
                      'transition-colors hover:text-foreground/80': !item.disabled,
                    })}
                  >
                    {item.title}
                  </MobileLink>
                ),
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({ to, onOpenChange, className, children, ...props }: MobileLinkProps) {
  const navigate = useNavigate();
  return (
    <Link
      to={to}
      onClick={() => {
        navigate(to);
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
