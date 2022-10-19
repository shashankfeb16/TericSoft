import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./action.types";
import { getLocalData,  logout, saveLocalData } from "../../utils/LocalStorage";


const initialState = {
    loading: false,
    error:false,
    isAuth: false,
    token: getLocalData("token") || ""
  }

export const reducer = (state = initialState,{type,payload})=>{
    switch(type){
        case LOGIN_LOADING:{
          return {...state,loading:true,error:false};
        }
        case LOGIN_SUCCESS:{
          saveLocalData("token", payload.token);
         return{...state,loading:false,error:false,isAuth:true,token:payload.token}
        }
        case LOGIN_ERROR:{
         return{...state,loading:false,error:true,isAuth:false}
        }
        case LOGOUT:{
         return{...state,isAuth:false,token:""}
        }
        default:{
          return state;
        }
      }
}