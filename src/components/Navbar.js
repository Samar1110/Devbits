import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';

export default function MyNav() {

  var user_email = window.sessionStorage.getItem('registered_email');

  return (
    <>
      <div className="navbar bg-black text-white sticky z-[2000] ">
        <div className="navbar-start sticky z-[2000]">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/stock'>
                  Stocks
                </Link>
              </li>
              <li>
                <Link to='/stock'>
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div className="btn btn-ghost normal-case text-2xl">
            <Link to='/'>
              HawkFolio
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/stock'>
                Stocks
              </Link>
              <Link to='/news'>
                News
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user_email == null ? <div>
              <div className="btn mr-1 text-sm text-white">
                <Link to='/login'>
                  <FaShoppingCart />
                </Link>
              </div>
            </div>
              :
              <div className=" mt-1 mr-4 text-white">
                <Link to="/cart">
                  <FaShoppingCart />
                </Link>

              </div>
          }
          {user_email == null ? <div>
            <div className="btn mr-1 text-sm text-white">
              <Link to='/login'>
                Login
              </Link>
            </div>
            <div className="btn mr-1 text-sm text-white">
              <Link to='/register'>
                Register
              </Link>
            </div>
          </div>
            :
            <div className="avatar">
              <div className="w-10 rounded-full">
                <Link to="/dashboard">
                  <img src="https://i.pinimg.com/564x/84/d9/2e/84d92ea864699e749a8c36c32af845cc.jpg" />
                </Link>
              </div>

            </div>
          }




          {/* <a className="btn"></a> */}
        </div>
      </div>
    </>
  );
}