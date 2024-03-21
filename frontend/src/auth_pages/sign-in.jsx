import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  useEffect(() => {
    const message = localStorage.getItem('registrationMessage');
    if (message) {
      setRegistrationMessage(message);
      localStorage.removeItem('registrationMessage'); // Remove the message after displaying
    }
  }, []);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };



  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:5000/auth/signin', { email, password })
      .then(response => {
        console.log('Response Data:', response.data); // Log the entire response data
        if (response.data.status) {
          localStorage.setItem('accessToken', response.data.accessToken);
          const username = response.data.username;
          const lastLogin = response.data.lastLogin; // Correct variable name
          console.log('Sign-in successful');
          console.log('Username:', username, 'Last Login:', lastLogin);
          navigate('/dashboard', { state: { username, lastLogin } }); // Correct variable name
        } else {
          setErrorMessage('Invalid email or password. Please try again.');
        }
      })
      .catch(err => {
        console.log('Error:', err);
        setErrorMessage('An error occurred. Please try again later.');
      });
  };
  
  
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign In to your account</h2>
      </div>



      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
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
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={handlePasswordChange}
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign In
            </button>
          </div>
          {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}

          
        </form>

        <p className="mt-3 text-center text-sm text-gray-500">
          Don't have an account?
          <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2">Sign Up</a>
        </p>

        {registrationMessage && <p className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center mt-10'>{registrationMessage}</p>}

      </div>
    </div>
  );
}

export default SignIn;
