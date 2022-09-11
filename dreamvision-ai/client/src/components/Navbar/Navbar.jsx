import React from 'react';
import { Link } from 'react-router-dom';
import * as PATHS from '../../utils/paths';
// import * as CONSTS from "../../utils/consts"

const Navbar = (props) => {
  return (
    <nav className='flex items-center justify-between h-20'>
    <div className='flex flex-row'>
    <img src='/App-logo.png' alt='applogo' className='w-10 h-6'/>
      <Link to={PATHS.HOMEPAGE} className='font-extrabold text-xl text-pink '>
        <p className='pl-2'>DreamVision.ai</p>
      </Link>
</div>
      <div className='flex gap-6 text-lg font-semibold text-tertiary'>
        {props.user ? (
          <div>
            <Link
              to={PATHS.DASHBOARD}
              className='px-4 py-2 rounded-full cursor-pointer hover:bg-tertiary hover:text-primary'
            >
              Create
            </Link>
            <Link
              to={PATHS.HOMEPAGE}
              className='px-4 py-2 rounded-full cursor-pointer hover:bg-tertiary hover:text-primary'
            >
              Feed
            </Link>
          </div>
        ) : (
          <div>
            <Link
              to={PATHS.SIGNUPPAGE}
              className='px-4 py-2 rounded-full cursor-pointer hover:bg-tertiary hover:text-primary'
            >
              Create
            </Link>
            <Link
              to={PATHS.HOMEPAGE}
              className='px-4 py-2 rounded-full cursor-pointer hover:bg-tertiary hover:text-primary'
            >
              Feed
            </Link>
          </div>
        )}
      </div>

      <div>
        {props.user ? (
          <div>
            <Link
              to={PATHS.PROFILEPAGE}
              className='px-4 py-2 font-semibold text-white rounded-full hover:bg-secondary'
            >
              Profile
            </Link>
            <button
              onClick={props.handleLogout}
              className='px-4 py-2 font-semibold text-white rounded-full hover:bg-secondary'
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link
              to={PATHS.SIGNUPPAGE}
              className='px-4 py-2 font-semibold text-white rounded-full hover:bg-secondary'
            >
              Signup
            </Link>
            <Link
              to={PATHS.LOGINPAGE}
              className='px-4 py-2 font-semibold text-white rounded-full hover:bg-secondary'
            >
              Log In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
