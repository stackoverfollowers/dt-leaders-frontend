import { navConfig } from '@config/nav';
import { Outlet, useLocation } from 'react-router-dom';

export const Layout = () => {
  const location = useLocation();
  return (
    <>
      <title>{navConfig.titles[location.pathname]}</title>
      <Outlet />
    </>
  );
};
