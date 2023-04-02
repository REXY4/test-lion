import { Dispatch } from "redux";
import ProductService from "@/services/product";

const getAllProduct = () => async (dispatch: Dispatch) => {
    try {
        const product = new ProductService();
        const response = await product.getAll();
        console.log("ini data",response.data)
        dispatch({ type: "GET_ALL_PRODUCT", payload: response.data });
    } catch (err) {
        //cnsole
        console.log(err);
    }
};

const createProduct = (data:any, router:any) =>async (dispatch:Dispatch) =>{
    try{
        const product = new ProductService();
        const response = await product.create(data);
        if(response.status === 201){
            dispatch({
                type : "OPEN_ALERT",
                payload : {
                    status : true,
                    var : "success",
                    message : "Create Product Success"
                }
             })

             setTimeout(()=>{
                router.push("/admin")
                dispatch({
                 type : "OPEN_ALERT",
                  payload : {
                    status : false,
                    var : "success",
                    message : "Create Product Success"
                }
             })
             },500)  
        }
    }catch(err){
        //
         dispatch({
                type : "OPEN_ALERT",
                payload : {
                    status : true,
                    var : "danger",
                    message : "create data fail"
                }
             })

              setTimeout(()=>{
                router.push("/admin")
                dispatch({
                 type : "OPEN_ALERT",
                  payload : {
                    status : false,
                    var : "success",
                    message : "Create Product Success"
                }
             })
             },500)  
    }
}



export { getAllProduct, createProduct };
