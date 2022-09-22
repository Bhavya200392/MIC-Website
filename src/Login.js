import React from 'react'
import { Link } from 'react-router-dom'
import svg from './icons/Landing.svg'
export default function Login() {
  return (
    <>
    {/* Login Page */}
    <div style={{backgroundImage : `url(${svg})`}} className="opacity-100 h-screen">
    <div className='flex items-center justify-center mt-5 text-3xl font-serif'>
        Login Page - NextEdd
    </div>
    <div className='flex justify-center'>
      <div className="m-20 sm:w-80 w-auto"> 
        <form >
          <div class="mb-6 ">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
              <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nexedd@vit.ac.in" required=""/>
          </div> 
          <div class="mb-6">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
              <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required=""/>
          </div> 
          <Link to="/" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</Link>
        </form>
      </div>
    </div>
</div>
    </>
  )
}
