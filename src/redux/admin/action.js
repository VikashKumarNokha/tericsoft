import * as types from "./actionType"
import axios from "axios"

export const getAdminData = () => (dispatch) =>{
        dispatch({type : types.GET_ADMIN_DATA_REQUEST});
       return axios.get(" http://localhost:8080/employee").then((res)=>{
           console.log( "getdata",res.data)
           dispatch({type : types.GET_ADMIN_DATA_SUCCESS, payload : res.data});
       }).catch((err)=>{
           console.log(err);
           dispatch({type :  types.GET_ADMIN_DATA_FAILURE});
       });  
}

export const deleteAdminData = (Id) => (dispatch) =>{
    dispatch({type : types.DELETE_ADMIN_DATA_REQUEST});
   return axios.delete(` http://localhost:8080/employee/${Id}`).then((res)=>{
       console.log( "getdata",res.data)
       dispatch({type : types.DELETE_ADMIN_DATA_SUCCESS, });
   }).catch((err)=>{
       console.log(err);
       dispatch({type :  types.DELETE_ADMIN_DATA_FAILURE});
   });  
}

export const postAdminData = (payload) => (dispatch) =>{
    dispatch({type : types.POST_ADMIN_DATA_REQUEST});
   return axios.post(` http://localhost:8080/employee`, payload).then((res)=>{
       console.log( "getdata",res.data)
       dispatch({type : types.POST_ADMIN_DATA_SUCCESS, });
   }).catch((err)=>{
       console.log(err);
       dispatch({type :  types.POST_ADMIN_DATA_FAILURE});
   });  
}

export const editAdminData = (Id, payload) => (dispatch) =>{
    dispatch({type : types.EDIT_ADMIN_DATA_REQUEST});
   return axios.patch(` http://localhost:8080/employee/${Id}`, payload).then((res)=>{
       console.log( "getdata",res.data)
       dispatch({type : types.EDIT_ADMIN_DATA_SUCCESS, });
   }).catch((err)=>{
       console.log(err);
       dispatch({type :  types.EDIT_ADMIN_DATA_FAILURE});
   });  
}