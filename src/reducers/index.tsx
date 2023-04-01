import { combineReducers } from "redux";
import authReducer from "./auth";
import cartReducer from "./cart";
import categoryReducer from "./category";
import modalReducer from "./modal";
import productReducer from "./product";

const rootReducers = combineReducers({
    modal: modalReducer,
    product: productReducer,
    user: authReducer,
    category: categoryReducer,
    cart: cartReducer,
});

export default rootReducers;
