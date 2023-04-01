import { Dispatch } from "redux";
import ProductService from "@/services/product";

const getAllProduct = () => async (dispatch: Dispatch) => {
    try {
        const product = new ProductService();
        const response = await product.getAll();

        dispatch({ type: "GET_ALL_PRODUCT", payload: response.data });
    } catch (err) {
        //cnsole
        console.log(err);
    }
};

const getDetailProduct = () => async (dispatch: Dispatch) => {
    try {
        const response = new ProductService();
    } catch (err) {
        // console.log err
    }
};

export { getAllProduct, getDetailProduct };
