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
      navigate(PATHS.PROTECTEDPAGE);
    });
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex-col border-4 h-80 w-80 rounded-3xl align-center'>
        <h1 className='p-4 font-extrabold xt-2xl text-pink'>Dreamvision</h1>
        <form onSubmit={handleFormSubmission} className='p-8 signup__form'>
          <div className='p-4'>
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
          <div>
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
          </div>
          {error && (
            <div className='error-block'>
              <p>There was an error submiting the form:</p>
              <p>{error.message}</p>
            </div>
          )}
          <div className='p-4'>
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
  );
}
