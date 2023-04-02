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

const createCategory = (data:any, router:any) => async (dispatch: Dispatch) => {
    try {
        const category = new CategoryService();
        const response = await category.create(data);
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
                router.push("/admin/category")
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
    } catch (err) {
        //cnsole
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
                    message : "Create Product fail"
                }
             })
             },500)  
    }
};

const DeteleCategory = (id:string) => async (dispatch:Dispatch) =>{
    try {
     const category = new CategoryService();
     const response = await category.deleteBy(id) 
     console.log(response)
      if(response.status === 201){
        console.log("delete data success category")
              dispatch({
                type : "OPEN_ALERT",
                payload : {
                    status : true,
                    var : "success",
                    message : "Delete Category Success"
                }
             })
             setTimeout(()=>{
                dispatch({
                 type : "OPEN_ALERT",
                  payload : {
                    status : false,
                    var : "success",
                    message : "Delete data success"
                }
             })
             },500)  
        }  
    } catch (error) {
        dispatch({
                type : "OPEN_ALERT",
                payload : {
                    status : true,
                    var : "danger",
                    message : "create data fail"
                }
             })

              setTimeout(()=>{
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

export { getAllCategory, createCategory, DeteleCategory };
