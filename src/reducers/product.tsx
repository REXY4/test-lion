enum Case {
    getAllproduct = "GET_ALL_PRODUCT",
    getDetail = "GET_DETAIL_PRODUCT"
}
  
type State = {
    product: any
    detail : any
}
  
type Action = {
    type: string,
    payload?: any
}

const initialState:State = {
    product : [],
    detail : []
}

  const productReducer = (state: State = initialState, action: Action) => {
    const {type, payload} =  action;
    switch (type) {
      case Case.getAllproduct:
        return {
            ...state,
            product : payload 
        }
      case Case.getDetail:
          return {
              ...state,
              detail : payload 
          }
      default:
        return state
    }
  }
  
  export default productReducer;