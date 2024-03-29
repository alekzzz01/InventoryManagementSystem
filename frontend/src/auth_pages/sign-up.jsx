import React, { useState } from 'react';
import Axios from 'axios';

import { useNavigate} from 'react-router-dom'; 

function Signup() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, seterrorMessage] = useState('');


  const navigate = useNavigate()


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = e.target.elements;

    Axios.post('http://localhost:5000/auth/signup', { username: username.value, email: email.value, password: password.value })
      .then(response => {
        if (response.data.status) {
          localStorage.setItem('registrationMessage', 'User registered successfully. Please sign in.');
          navigate('/signin');
          console.log(response);
        } else {
          seterrorMessage('User already exists. Please try again with a different email.');
        }
      })
      .catch(err => {
        console.log('Error:', err);
        seterrorMessage('An error occurred. Please try again later.');
      });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>

          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
            <div className="mt-2">
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              value={username}
              onChange={handleUsernameChange}
              className="block w-full rounded-md border-0 px-3 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />

            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={handleEmailChange}
              className="block w-full rounded-md border-0 px-3 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />

            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="text-sm">
                <a href="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="newPassword"
              required
              value={password}
              onChange={handlePasswordChange}
              className="block w-full rounded-md border-0  px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>

          {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already Have Account?
          <a href="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2">Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
