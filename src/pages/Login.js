import React, { useState } from 'react'
import { Link ,useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError , handleSuccess  } from "../utils";


function Login() {

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })
  

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);

        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);

    }

    const handleLogin= async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError("All Fields are Required ")
        }
        try {

            const url = "http://localhost:8080/auth/login";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginInfo)

            });
            console.log("Status:", response.status);

            const result = await response.json();
            const { success, message , error} = result;
            if(success){
                handleSuccess(message);
                setTimeout(() => {
                  navigate("/home")
                }, 1000)
            } else if(error){
                const details = error?.details[0].message;
                handleError(details);
            }else if(!success){
                handleError(message);
            }

            console.log("Result:", result);
        } catch (err) {
            handleError(err);

        }
    }


    return (
        <div className="bg-red-300  h-screen  justify-center  ">
            <div className="b-10  flex justify-center pt-10 ">
                <h1 className="text-2xl font-bold ">Login </h1>
            </div>
            <div className="flex justify-center items-center  mt-10   ">
                <div className=" w-[350px] h-[400px] bg-white b rounded-md  shadow-xl/20 t-20px flex justify-center ">
                    <form onSubmit={handleLogin}>
                        
                        <div>
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 mt-7 ">Email</label>
                            <input
                                onChange={handleChange}
                                type="email"
                                name="email"
                                className=" w-[270px] border border-gray-600 rounded-sm  p-2  "
                                placeholder="Enter your email..."
                                value={loginInfo.email}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 mt-7 ">Password</label>
                            <input
                                onChange={handleChange}
                                type="password"
                                name="password"
                                className=" w-[270px] border border-gray-600 rounded-sm  p-2  "
                                placeholder="Enter your password..."
                                value={loginInfo.password}
                            />
                        </div>
                        <div className=" flex justify-center mt-10 ">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                               Login
                            </button>
                        </div>
                        <div className=" flex justify-center ">
                            <span> Don't have an account ?
                                <Link to="/login" className="text-blue-500 hover:text-blue-700">
                                   home
                                </Link>
                            </span>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default Login