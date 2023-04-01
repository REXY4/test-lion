enum Case {
    login = "LOGIN",
    logout = "LOGOUT",
}

type State = {
    user: any;
    isLogin: boolean;
};

type Action = {
    type: string;
    payload?: any;
};

const initialState: State = {
    user: null,
    isLogin: false,
};

const authReducer = (state: State = initialState, action: Action) => {
    const { type, payload } = action;
    switch (type) {
        case Case.login:
            return {
                ...state,
                isLogin: true,
                user: payload,
            };
        case Case.logout:
            return {
                ...state,
                isLogin: false,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;
