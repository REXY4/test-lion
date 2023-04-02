import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { store } from "@/stores";

interface PrivateRouteProps {
    allowedRoles: string[];
    children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
    allowedRoles,
    children,
}) => {
    const Router = useRouter();
    const { user, isLogin } = store.getState().user;

    useEffect(() => {
        if (!isLogin) {
            Router.push("/");
        } else if (!user || !allowedRoles.includes(user[0].role)) {
            Router.push("/");
        }
    }, [user, isLogin, allowedRoles]);

    if (!isLogin || !user || !allowedRoles.includes(user[0].role)) {
        return null;
    }

    return children;
};

export default PrivateRoute;
