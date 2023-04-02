enum Case {
    addCart = "ADD_CART",
    deleteCart = "DELETE_CART",
    
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
            const uniqId = Date.now();
            return {
                ...state,
                cart: [...state.cart, { ...payload, id }],
            };
        case Case.deleteCart:
            const updatedCart = state.cart.filter(
                (cartItem: any) => cartItem.id !== payload
            );
            return {
                ...state,
                cart: updatedCart,
            };
        default:
            return state;
    }
};

export default cartReducer;
