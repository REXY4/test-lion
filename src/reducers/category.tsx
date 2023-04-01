enum Case {
    getAllCategory = "GET_ALL_CATEGORY",
}

type State = {
    category: any;
};

type Action = {
    type: string;
    payload?: any;
};

const initialState: State = {
    category: [],
};

const categoryReducer = (state: State = initialState, action: Action) => {
    const { type, payload } = action;
    switch (type) {
        case Case.getAllCategory:
            return {
                ...state,
                category: payload,
            };
        default:
            return state;
    }
};

export default categoryReducer;
