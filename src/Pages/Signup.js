import React from "react";
import Template from "../Components/Template";
import stu from '../Assets/stu.jpg'


function Signup({setislogin}){
    return(
      <div>
          <Template
           title='Joins The Millions Learning To Code With StudyNotaion For Free'
           desc1='Build Skill For Today,Tomorrow And Beyond.'
           desc2='Education is your future-Proof your Career'
           formtype='Signup'
           img={stu}
           setislogin={setislogin}
/>
      </div>
    )
  }
  
  export default Signup;