import { Dispatch } from "redux";
import { store } from "@/stores";

const AddCart = (data:any) => async (dispatch: Dispatch) => {
  try { 
    dispatch({ type: "ADD_CART", payload: data});
  } catch (err) {
   //cnsole
   console.log(err)
  }
};



export { AddCart };