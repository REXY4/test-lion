enum Case {
    modalAuth = "MODAL_AUTH",
    openAlert = "OPEN_ALERT"
}

type State = {
    modalAuth: boolean;
    alert : any;
};

type Action = {
    type: string;
    payload?: any;
};

const initialState: State = {
    modalAuth: false,
    alert : {
        status : false,
        var : "",
        message : ""
    }
};

const modalReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case Case.modalAuth:
            if (!state.modalAuth) {
                return {
                    ...state,
                    modalAuth: true,
                };
            } else {
                return {
                    ...state,
                    modalAuth: false,
                };
            }
        case Case.openAlert : 
            if(state.alert){
                return {
                    ...state,
                    alert : action.payload
                }
            }else {
                return {
                    ...state,
                    alert : {
                        status : false,
                        var : "",
                        message : ""
                    }
                }
            }
        default:
            return state;
    }
};

export default modalReducer;
