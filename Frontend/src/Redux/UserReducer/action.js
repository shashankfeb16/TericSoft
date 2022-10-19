import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./action.types"
import axios from "axios"
export const loginApi = (email,password)=>(dispatch)=>{
  dispatch({type:LOGIN_LOADING});
  axios.post("https://boiling-coast-59139.herokuapp.com/user/login",{
    email: email,
    password: password
  }).then((res)=>{
    console.log(res);
    dispatch({type:LOGIN_SUCCESS,payload:res.data});
  }).catch(()=>{
    dispatch({type:LOGIN_ERROR});
  })
}
export const logoutApi = ()=> ({type: LOGOUT})

