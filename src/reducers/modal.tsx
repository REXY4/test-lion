enum Case {
    modalAuth = "MODAL_AUTH"
  }
  
  type State = {
    modalAuth: boolean
  }
  
  type Action = {
    type: string,
    payload?: any
  }

  const initialState:State = {
    modalAuth : false
  }

  const modalReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
      case Case.modalAuth:
        if(!state.modalAuth){
          return {
            ...state,
            modalAuth: true
          }
        }else{
          return {
            ...state,
            modalAuth : false
          }
        }
      default:
        return state
    }
  }
  
  export default modalReducer;