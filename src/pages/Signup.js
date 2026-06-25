import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError } from "../utils";

function Signup() {

    const [signupInfo, setSignupInfo] = useState({
        name: "",
        email: "",
        password: ""
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);

        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);

    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return handleError("All Fields are Required ")
        }
        try {

            const url = "http://localhost:8080/auth/signup";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(signupInfo)

            });
            console.log("Status:", response.status);

            const result = await response.json();
            console.log("Result:", result);
        } catch (err) {
            handleError(err);

        }
    }


    return (
        <div className="bg-red-300  h-screen  justify-center  ">
            <div className="b-10  flex justify-center pt-10 ">
                <h1 className="text-2xl font-bold ">SIGNUP PAGE</h1>
            </div>
            <div className="flex justify-center items-center  mt-10   ">
                <div className=" w-[350px] h-[500px] bg-white b rounded-md  shadow-xl/20 t-20px flex justify-center ">
                    <form onSubmit={handleSignup}>
                        <div>
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 pt-5 "> Name</label>
                            <input className=" w-[270px] border border-gray-600 rounded-sm  p-2  "
                                onChange={handleChange}
                                type="text"
                                name="name"
                                autoFocus
                                placeholder="Enter your name..."
                                value={signupInfo.name}

                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 mt-4 ">Email</label>
                            <input
                                onChange={handleChange}
                                type="email"
                                name="email"
                                className=" w-[270px] border border-gray-600 rounded-sm  p-2  "
                                placeholder="Enter your email..."
                                value={signupInfo.email}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 mt-4 ">Password</label>
                            <input
                                onChange={handleChange}
                                type="password"
                                name="password"
                                className=" w-[270px] border border-gray-600 rounded-sm  p-2  "
                                placeholder="Enter your password..."
                                value={signupInfo.password}
                            />
                        </div>
                        <div className=" flex justify-center mt-10 ">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Signup
                            </button>
                        </div>
                        <div className=" flex justify-center ">
                            <span> Already have an account ?
                                <Link to="/login" className="text-blue-500 hover:text-blue-700">
                                    Login
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

export default Signup