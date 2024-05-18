// import { useUnit } from "@lib/effector";
import { navConfig } from '@config/nav';
import { Outlet, useLocation } from 'react-router-dom';
import { AuthPage } from '@pages/auth';

export const Layout = () => {
  const location = useLocation();
  // const token = useUnit();
  const token = 'asd';

  return (
    <>
      <title>{navConfig.titles[location.pathname]}</title>
      {token ? <Outlet /> : <AuthPage />}
    </>
  );
};
