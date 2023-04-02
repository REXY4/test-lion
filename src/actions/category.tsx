import { Dispatch } from "redux";
import CategoryService from "@/services/category";

const getAllCategory = () => async (dispatch: Dispatch) => {
    try {
        const category = new CategoryService();
        const response = await category.getAll();
        dispatch({ type: "GET_ALL_CATEGORY", payload: response.data });
    } catch (err) {
        //cnsole
        // console.log(err);
    }
};

const getDetailCategory = (id:string, route:any) => async (dispatch: Dispatch) => {
    try {
        const category = new CategoryService();
        const response = await category.getDetail(id);
        if(response.status === 200){
            dispatch({ type:"GET_DETAIL_CATEGORY", payload: response.data });
            route.push("/admin/update/category")
        }
    } catch (err) {
        //cnsole
        // console.log(err);
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
                // router.push("/admin/update/category")
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


const updateCategory = (data:any,id:string, router:any) => async (dispatch: Dispatch) => {
    try {
        const category = new CategoryService();
        const response = await category.updateCategory(data, id);
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
                // router.push("/admin")
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
const DeteleCategory = (id:string, reload:any) => async (dispatch:Dispatch) =>{
    try {
     const category = new CategoryService();
     const response = await category.deleteBy(id) 
      if(response.status === 200){
              dispatch({
                type : "OPEN_ALERT",
                payload : {
                    status : true,
                    var : "success",
                    message : "Delete Category Success"
                }
             })
            reload()

             setTimeout(()=>{
                dispatch({
                 type : "OPEN_ALERT",
                  payload : {
                    status : false,
                    var : "success",
                    message : "Delete data success"
                }
             })
             },1000)  
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

export { getAllCategory, createCategory, DeteleCategory, getDetailCategory, updateCategory };
