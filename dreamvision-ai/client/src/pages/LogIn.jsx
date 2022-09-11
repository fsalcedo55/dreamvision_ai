import React, { useState } from 'react';
import { login } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import './Signup';
import * as PATHS from '../utils/paths';
import * as USER_HELPERS from '../utils/userToken';

export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const { username, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: 'Invalid credentials' });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.DASHBOARDPAGE);
    });
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8'>
      <div className='flex flex-col justify-center  border-4 h-80 w-80 rounded-3xl bg-gradient-to-t from-primary to-secondary border-[#294b4e]'>
        <div className='w-full'>
          <h1 className='font-extrabold text-center text-xl text-pink'>
            Dreamvision.ai
          </h1>
        </div>
        <div className='flex justify-center'>
          <form
            onSubmit={handleFormSubmission}
            className='mt-8 space-y-6 px-auto'
          >
            <div>
              <input
                id='input-username'
                type='text'
                name='username'
                placeholder='username'
                value={username}
                onChange={handleInputChange}
                required
                className='rounded-lg'
              />
            </div>
            <input
              id='input-password'
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={handleInputChange}
              required
              minLength='8'
              className='rounded-lg'
            />

            {error && (
              <div className='error-block'>
                <p>There was an error submiting the form:</p>
                <p>{error.message}</p>
              </div>
            )}
            <div className=''>
              <button
                className='h-12 text-white bg-pink w-52 rounded-2xl'
                type='submit'
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
