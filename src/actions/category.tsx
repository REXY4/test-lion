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
        console.log("ini category", response)
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
        console.log(err)
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
};

export { getAllCategory, createCategory };
