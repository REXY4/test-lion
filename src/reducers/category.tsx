enum Case {
    getAllCategory = "GET_ALL_CATEGORY",
    addCategory =  "ADD_CATEGORY",
    detail = "GET_DETAIL_CATEGORY"
}

type State = {
    category: any;
    detail : any
};

type Action = {
    type: string;
    payload?: any;
};

const initialState: State = {
    category: [],
    detail : []
};

const categoryReducer = (state: State = initialState, action: Action) => {
    const { type, payload } = action;
    switch (type) {
        case Case.getAllCategory:
            return {
                ...state,
                category: payload,
            };
          case Case.detail:
            return {
                ...state,
                detail : payload
            };    
        default:
            return state;
    }
};

export default categoryReducer;
