import React from "react";
import Template from "../Components/Template";
import std from '../Assets/std.jpg';


function Sign({setislogin}){
    return(
      <div>
          <Template 
           title='Welcome Back!'
           desc1='Build Skill For Today,Tomorrow And Beyond.'
           desc2='Education is your future-Proof your Career'
           img={std}
           formtype='Login'
           setislogin={setislogin}

                         ></Template>
      </div>
    )
  }
  
  export default Sign;