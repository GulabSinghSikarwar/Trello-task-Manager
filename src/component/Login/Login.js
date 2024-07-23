import React, { useState, useEffect, } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from React Router
import './FormStyle.css'; // Importing the CSS for styling
import { login } from '../../service/auth.service';
import { storageHelper } from '../utils/storage';
import { ToastContainer, toast } from 'react-toastify';
import { validateToken } from '../../service/auth.service';
import { API_URL } from '../utils/constant';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const authContext =useContext(AuthContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the onLogin function with email and password
    handleLogin();
  };


  // Function to handle login request
  const handleLogin = async () => {
    try {
      const response = await login({ username: email, password });

      if (response.ok) {
        const data = await response.json();
        const { token, user } = data;

        // Storing data in the local storage 
        storageHelper.user = data?.user;

        const { isFirstTimeLogin, is2FAEnabled, isTotpEnabled } = user
        storageHelper.token = token;


        toast.success("Successfully Logged In");

        handleLoginUtil(isFirstTimeLogin, is2FAEnabled, isTotpEnabled);
      } else {
        console.error('Login failed');
        toast.error('Login Failed');
      }
    } catch (error) {
      toast.error("Something Went Wrong !!");
    }
  };

  const handleLoginUtil = (isFirstTimeLogin, is2FAEnabled, isTotpEnabled) => {
    if (isFirstTimeLogin) {
      navigate('/enable-totp');
    } else {
      if (is2FAEnabled) {

        // navigate('/two-fa');
        navigate('/');
      } else {
        navigate('/');
      }
    }
  };

  const googleAuth = () => {
    window.open(
      `${API_URL}/auth/google/callback`,
      "_self"
    );
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(" token : ", token);

    if (token) {
      validateToken({ token })
        .then((response) => {
          toast.success("Already Logged In , Moving To Dashboard !!")

          // navigate('/');
        })
        .catch(() => { });
    } else {

    }
  }, []);
  return (
    <section className="bg-gray-50 dark:bg-gray-900 font-sans">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <span href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
        </span>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>
              <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                Sign in
              </button>
            </form>

            {/* GOOGLE AUTH  */}
            <div class="px-6 sm:px-0 max-w-sm">
              <button type="button" onClick={googleAuth} class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
            </div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer containerId={"Login"}
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
}

export default LoginForm;
