import React from 'react'
import SignupForm from './SignupForm'; // Make sure these imports are correct
import LoginForm from './LoginForm';

function Template({ title, desc1, desc2, img, formtype, setislogin }) {
   return (
      <div className='flex'>
         <div className=' m-5 border rounded-md border-gray-500 bg-gray-900  max-w-md '>
            <h1 className='font-bold m-2 text-2xl text-purple-900'>{title}</h1>
            <p className="text-center">
               <span className="block mb-2 text-lg font-bold text-green-600">{desc1}</span>
               <span className="block py-2 px-4 text-lg font-bold text-blue-500 border border-blue-500 rounded">{desc2}</span>
            </p>






            <div className='p-3'>
               {formtype === "Signup" ? <SignupForm setislogin={setislogin} /> : <LoginForm setislogin={setislogin} />}
            </div>

            <div className="flex items-center justify-center my-4">
               <div className="flex-grow border-t border-gray-300"></div>
               <span className="mx-2 text-gray-500 font-bold">or</span>
               <div className="flex-grow border-t border-gray-300"></div>
            </div>


            <div className="flex justify-center">
               <button className="bg-red-500 mb-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                  Sign With Google
               </button>
            </div>





         </div>
         <div className='m-10 ml-96'>
            <img src={img} alt='sorry' height={400} width={400}></img>
         </div>
      </div>
   )
}

export default Template;