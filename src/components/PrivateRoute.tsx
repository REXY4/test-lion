import { useRouter } from "next/router";
import { useEffect } from "react";
import { store } from "@/stores";

interface PrivateRouteProps {
  allowedRoles: string[];
}

const PrivateRoute = (WrappedComponent: React.FC, { allowedRoles }: PrivateRouteProps) => {
  const Router = useRouter();
  const state:any = store.getState().user;
  
  useEffect(() => {
    const role = state.user.user.role;
    const isLogin = state.user.islogin;
    if ( !isLogin || !allowedRoles.includes(role)) {
      Router.replace("/");
    }
  }, []);
  
  return <WrappedComponent />;
};

export default PrivateRoute;