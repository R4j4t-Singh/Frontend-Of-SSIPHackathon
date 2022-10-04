import React, { useEffect,useState } from "react";

import { Outlet, Navigate } from 'react-router-dom'
import axios from "axios";


const PrivateRoutes = (props) => {
      const [home, setHome ] = useState("")
      let auth = {'token':true}


	// useEffect(() => {
    
	// 	axios.get("http://localhost:4000/home").then(function(response) {
	// 		setHome(response.data)
    //   console.log(home)
	// 	})

    //     if(home == "welcome"){
    //         auth = {'token':true}
    
    //     }
    
	// }, [home])


    return(
        auth.token ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes