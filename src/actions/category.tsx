import { Dispatch } from "redux";
import CategoryService from "@/services/category";

const getAllCategory = () => async (dispatch: Dispatch) => {
    try {
        const category = new CategoryService();
        const response = await category.getAll();
        dispatch({ type: "GET_ALL_CATEGORY", payload: response.data });
    } catch (err) {
        //cnsole
        console.log(err);
    }
};

export { getAllCategory };
