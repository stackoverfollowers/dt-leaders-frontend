import { Icons } from '@components/icons';
import { navConfig } from '@config/nav';
import { siteConfig } from '@config/site';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

export const MainNav = () => {
  const location = useLocation();

  return (
    <div className="mr-4 hidden md:flex">
      <Link to="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">{siteConfig.shortName}</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {navConfig.mainNav.map(
          (item, idx) =>
            item.href && (
              <Link
                key={idx}
                to={item.disabled ? '#' : item.href}
                className={clsx({
                  'text-foreground': location.pathname === item.href,
                  'text-foreground/60': location.pathname !== item.href,
                  'cursor-not-allowed text-foreground/30': item.disabled,
                  'transition-colors hover:text-foreground/80': !item.disabled,
                })}
              >
                {item.title}
              </Link>
            ),
        )}
      </nav>
    </div>
  );
};
