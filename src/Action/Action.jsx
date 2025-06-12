import { PRODUCTS, AMOZONPRODUCT, ELECTRONIC } from '../ActionType/Actiontype';
import axios from 'axios';

export const fetchdata = () => {

return(dispatch)=>{
  try{
    axios.get('https://fakestoreapi.com/products').then((response)=>{
     console.log(response);
     dispatch(((data)=>{
      return{
        type: PRODUCTS,
        payload:{
          httpsresponse: data,
        }
      }
     })(response.data))
    })
    }catch( error ){
    console.log('error found', error);
   <p>no found</p>
    }   
}
}


export const amozonproduct = () =>{
  // https://fakestoreapiserver.reactbd.com/walmart
  // https://dummyjson.com/products
  return(dispatch) =>{
    try{
     axios.get('https://fakestoreapiserver.reactbd.com/walmart').then((res)=>{
      console.log(res);
      dispatch(((data)=>{
        return{
          type: AMOZONPRODUCT,
          payload:{
            httpsresponse: data,
          }
        }
      })(res.data))
     })
    }catch(error){
    console.log('error found', error);
    }
  }
}


// for electronics data

export const electronic = () =>{
  return(dispatch) =>{
    try{
     axios.get('https://real-time-amazon-data.p.rapidapi.com/product-details',{
      params: {
        asin: 'B07ZPKBL9V',
        country: 'US'
      },
      headers: {
        'x-rapidapi-key': '53856e8622mshf4f81d1d7f29d55p14114fjsn82cac1895aed',
        'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
      }
     }).then((res)=>{
      console.log(res);
      dispatch(((data)=>{
        return{
          type: ELECTRONIC,
          payload:{
            httpsresponse: data,
          }
        }
      })(res.data))
     })
    }catch(error){
  console.log('error found', error);
    }
  }
}


