import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Loginpage = () => {
  return (
    <div className="flex justify-center items-center  bg-gray-300 px-4 py-12 min-h-[85vh]">
      <div className="flex w-full max-w-4xl rounded-lg overflow-hidden shadow-xl/30 shadow-cyan-500/50 bg-white mt-5">

        <div className="relative w-1/3 hidden md:block">
          <img
            src="/1.jpg"
            alt=" "/>
          <div className="absolute top-6 left-6 flex items-center space-x-2 text-white">
            <span className="text-lg font-semibold">Sikhar</span>
          </div>
          <div className="absolute inset-0 flex items-end  p-3">
            <div className="text-white">
              <p className=" md:text-1xl font-bold ">
              “Dedication, passion, and relentless improvement—tools every champion needs.”

              </p>
              <p className="text-sm">Cristiano Ronaldo</p>
              <p className="text-sm text-gray-300">
              World Football Legend
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-2">Welcome back to Online World</h2>
            <p className="text-sm text-gray-500 mb-6">
              Build your design system effortlessly with our powerful component library.
            </p>
            <input type="email" placeholder="Email" className="w-full mb-4 p-3 border rounded" />
            <input type="password" placeholder="Password" className="w-full mb-4 p-3 border rounded" />
            <div className="flex items-center justify-between mb-4">
              <a href="#" className="text-sm text-blue-500">Forgot password?</a>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
            </div>
            <button className="w-full bg-indigo-600 text-white p-3 rounded mb-4">Log in  </button>
            <button className="w-full border p-3 rounded flex items-center justify-center gap-3 mb-4">
              <FcGoogle /> Continue with Google
            </button>
            <p className="text-sm text-center">
              Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Loginpage
