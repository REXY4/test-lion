import TransactionService from "@/services/transaction"
import { Dispatch } from "redux";

const getAllTransaction = () => async (dispatch:Dispatch)=>{
    try {
        const transaction = new TransactionService();
        const response = await transaction.getAll();
        dispatch({
            type : "GET_ALL_TRANSACTION",
            payload : response.data
        })
    } catch (error) {
        // console.log(error)
    }
}

export {getAllTransaction}