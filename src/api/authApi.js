import { myAxios } from "./config"

export const AuthLogin=async({email,password})=>{
   try{
const{data,status}=await myAxios.post('users/login',{email:email,password});
if(status){
    return data;  //returns the token and user details to be stored in local storage for future use of app
}
   } catch(error){

    throw new Error(error.message)
   }
}

export const AuthRegister=async(body)=>{
    try{
        const{data,status}=await myAxios.post('users/signup',body);

    }
    catch (error){
        throw new Error(error.message)
    }
}