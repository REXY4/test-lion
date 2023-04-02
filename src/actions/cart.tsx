import { Dispatch } from "redux";
import { store } from "@/stores";

const AddCart = (data: any) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: "ADD_CART", payload: data });
    } catch (err) {
        //cnsole
        
    }
};

const DeleteCart = (id: number) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: "DELETE_CART", payload: id });
    } catch (err) {
        // console.log(err);
    }
};

export { AddCart, DeleteCart };
