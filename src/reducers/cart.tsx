enum Case {
    addCart = "ADD_CART",
}

type State = {
    cart: any;
};

type Action = {
    type: string;
    payload?: any;
};

const initialState: State = {
    cart: [],
};

const cartReducer = (state: State = initialState, action: Action) => {
    const { type, payload } = action;
    switch (type) {
        case Case.addCart:
            const id = state.cart.length + 1;
            return {
                ...state,
                cart: [...state.cart, { ...payload, id }],
            };
        default:
            return state;
    }
};

export default cartReducer;
