import { useUnit } from "@lib/effector";
import { AuthPage } from "@pages/auth";
import { authModel } from "@features/auth";

export const AuthProvider = ({ children }: Props) => {
  const {
    token
  } = useUnit({
    token: authModel.$token
  })

  return (
    <>
      {token ? children : <AuthPage />}
    </>
  )
}

type Props = {
  children: React.ReactNode;
};
