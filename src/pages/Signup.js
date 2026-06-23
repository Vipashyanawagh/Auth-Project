import React from 'react'
import { Link }  from "react-router-dom";
import { ToastContainer} from "react-toastify";

function Signup() {
    return (
        <div className="bg-red-300  h-screen  justify-center  ">
           <div className="b-10  flex justify-center pt-10 "> 
            <h1 className="text-2xl font-bold ">SIGNUP PAGE</h1>
           </div>
        <div className="flex justify-center items-center  mt-10   ">
         <div className=" w-[350px] h-[500px] bg-white b rounded-md  shadow-xl/20 t-20px flex justify-center ">
            <form>
                <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 pt-5 "> Name</label>
                    <input className=" w-[270px] border border-gray-600 rounded-sm  p-2  "
                        type="text"
                        name="Name"
                        autoFocus
                        placeholder="Enter your name..."

                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 mt-4 ">Email</label>
                    <input 
                    type="email"
                    name="email"
                    className=" w-[270px] border border-gray-600 rounded-sm  p-2  "
                    placeholder ="Enter your email..."
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 mt-4 ">Password</label>
                    <input 
                    type="password"
                    name="password"
                    className=" w-[270px] border border-gray-600 rounded-sm  p-2  "
                    placeholder="Enter your password..."               
                    />
                 </div>
          <div className=" flex justify-center mt-10 ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Signup
            </button>
            </div>
            <div className=" flex justify-center ">
            <span> Already have an account ?  
                <Link to ="/login" className="text-blue-500 hover:text-blue-700">
                 Login
                </Link>
            </span>
           </div>
            </form>
            <ToastContainer/>
         </div>
       </div>
        </div>
    )
}

export default Signup