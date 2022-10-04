import logincontext from "./logincontext";
import { useState,useEffect } from "react";

const LoginState = (props) => {

let s1={
    "res":"Log in"
}

  const [loginres,setloginres] = useState(s1)
  const [home,setHome] = useState("hi")


	useEffect(() => {
    
		axios.get("http://localhost:4000/home").then(function(response) {
			setHome(response.data)
		})
    
	}, [home])

  const update = ()=>{
      setloginres({
           "res":home
      })
  }


  return (
    <logincontext.Provider value={{loginres,update}}>
      {props.children}
    </logincontext.Provider>
  )

}
export default LoginState;