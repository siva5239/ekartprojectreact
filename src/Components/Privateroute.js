import React from "react";
import { Navigate, Outlet} from "react-router-dom";



const PrivateRoute =() =>{

//Route Guard 

  
    const auth=Number(localStorage.getItem("key"));
   
   
    return auth ?  <Outlet/>: <Navigate to="/" />;
}

export default PrivateRoute;