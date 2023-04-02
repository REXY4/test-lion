import { Dispatch } from "redux";
import ProductService from "@/services/product";

const getAllProduct = () => async (dispatch: Dispatch) => {
    try {
        const product = new ProductService();
        const response = await product.getAll();
        dispatch({ type: "GET_ALL_PRODUCT", payload: response.data });
    } catch (err) {
        //cnsole
        // console.log(err);
    }
};

const getDetail = (data:any, router:any) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: "GET_DETAIL_PRODUCT", payload: data });
        router.push("/admin/update/product")
    } catch (err) {
        //cnsole
        // console.log(err);
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

const updateProduct = (data:any, id:string,router:any) =>async (dispatch:Dispatch) =>{
    try{
        const product = new ProductService();
        const response = await product.update(data, id);
        if(response.status === 200){
            dispatch({
                type : "OPEN_ALERT",
                payload : {
                    status : true,
                    var : "success",
                    message : "Update Product Success"
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

const deleteProduct = (id:string,reload:any) =>async (dispatch:Dispatch) =>{
    try{
        const product = new ProductService();
        const response = await product.delete(id);
        if(response.status === 200){
            dispatch({
                type : "OPEN_ALERT",
                payload : {
                    status : true,
                    var : "success",
                    message : "Update Product Success"
                }
             })

             setTimeout(()=>{
                reload();
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
         dispatch({
                type : "OPEN_ALERT",
                payload : {
                    status : true,
                    var : "danger",
                    message : "create data fail"
                }
             })

              setTimeout(()=>{
                reload()
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



export { getAllProduct, createProduct, updateProduct, deleteProduct, getDetail };
