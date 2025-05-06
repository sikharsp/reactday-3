import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 px-4 py-12 min-h-[85vh]">
      <div className="flex w-full max-w-4xl rounded-lg overflow-hidden mt-5 shadow-xl/30 shadow-cyan-500/50 bg-white">
        
        <div className="relative w-1/3 hidden md:block">
          <img
            src="/1.jpg"
            alt="Nucleus background"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex items-center space-x-2 text-white">
            <span className="text-lg font-semibold">Nucleus</span>
          </div>
          <div className="absolute inset-0 flex items-end ent p-8">
            <div className="text-white text-sm">
              <p className="font-semibold">
              " Your love makes me strong. Your hate makes me unstoppable."
              </p>
              <p className="text-xs"> Cristiano Ronaldo</p>
              <p className="text-xs text-gray-300">
              Global Football Icon


              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 p-8 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-2">Create your account</h2>
            <p className="text-sm text-gray-500 mb-5">
              Join Nucleus UI and start designing with ease.
            </p>
            <input type="text" placeholder="Name" className="w-full mb-3 p-3 border rounded" />
            <input type="email" placeholder="Email" className="w-full mb-3 p-3 border rounded" />
            <input type="password" placeholder="Password" className="w-full mb-3 p-3 border rounded" />
            <input type="password" placeholder="Confirm password" className="w-full mb-3 p-3 border rounded" />
            <button className="w-full bg-indigo-600 text-white p-3 rounded mb-3">Create account</button>
            <button className="w-full border p-3 rounded flex items-center justify-center gap-3 mb-3">
              <FcGoogle /> Sign up with Google
            </button>
            <p className="text-sm text-center">
              Already have an account? <Link to="/" className="text-blue-500">Log in</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;
