enum Case {
    getAllTransaction = "GET_ALL_TRANSACTION",
}

type State = {
    transaction : any
};

type Action = {
    type: string;
    payload?: any;
};

const initialState: State = {
    transaction: [],
};

const transactionReducer = (state: State = initialState, action: Action) => {
    const { type, payload } = action;
    switch (type) {
        case Case.getAllTransaction:
            return {
                ...state,
                transaction : payload,
            };
        default:
            return state;
    }
};

export default transactionReducer;
