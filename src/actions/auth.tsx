import { Dispatch } from "redux";
import AuthService from "@/services/auth";

const login = (data: any, router: any) => async (dispatch: Dispatch) => {
    try {
        const auth = new AuthService();
        const response: any = await auth.get(data);
        dispatch({
            type: "LOGIN",
            payload: response,
        });
        console.log(response[0].role);
        if (response[0].role === "admin") {
            console.log("test admin");
            router.push("admin");
        }
    } catch (error) {
        if (String(error) === "Error: User not found") {
            console.log("user not found");
        }
    }
};

export { login };
