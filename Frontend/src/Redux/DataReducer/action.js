import {
 
  ERROR_DATA,

  LOADING_DATA,
  SUCCESS_DATA,
  SUCCESS_USER_DATA,
} from "./action.types";

import axios from "axios";

export const getData = ()=>(dispatch)=>{
  dispatch({type:LOADING_DATA});
  return axios.get(`https://boiling-coast-59139.herokuapp.com/getallbmi`,{
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res)=>{
    // console.log(res)
    dispatch({type:SUCCESS_DATA,payload:res.data})
  }).catch(()=>{
    dispatch ({type: ERROR_DATA})
  })
}

export const postData = (name,age,height,weight)=>(dispatch)=>{
  dispatch({type:LOADING_DATA});
  return axios.post(`https://boiling-coast-59139.herokuapp.com/bmi/create`,{
    name: name,
    age: age,
    height: height,
    weight: weight
  },{
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res)=>{
    // console.log(res)
    dispatch({type:SUCCESS_DATA,payload:res.data})
  }).catch(()=>{
    dispatch ({type: ERROR_DATA})
  })
}



