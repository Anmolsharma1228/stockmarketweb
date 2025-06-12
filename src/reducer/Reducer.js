import { PRODUCTS, AMOZONPRODUCT } from "../ActionType/Actiontype";

const initistate = {
  data: {},
  product: {}
}

const reducer = (state = initistate, action) =>{
console.log(action);

switch(action.type){
  case PRODUCTS:
    return {...state,  data: action.payload.httpsresponse}
    case AMOZONPRODUCT:
    return {...state, product: action.payload.httpsresponse}  
    default: 
    return state;
}

}

export default reducer;