import React from "react";
// import axios from "axios";
import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { useState } from "react";
import Img1 from "../image/Logo (2).png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

export default function Register() {
    const navigate = useNavigate();
    const [profile, setProfile] = useState([]);
    const [user, setUser] = useState([]);



    const onSuccess = (codeResponse) => {
        setUser(codeResponse);
        console.log(user);
        console.log("Hello");
    };

    const onError = (error) => {
        console.log('Login Failed:', error);
        console.log("Hello");
    };

    const signIn = useGoogleLogin({
        onSuccess,
        onFailure: onError,
    });

    const login = (e) => {
        e.preventDefault();
        signIn();
    };

    useEffect(
        () => {
            if (user && user.access_token) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        const dataForApiRequest = {
                            fname: res.data.given_name,
                            lname: res.data.family_name,
                            email: res.data.email,
                            username: res.data.name,
                            pass1: res.data.id,
                            pass2: res.data.id,
                            // password: password,
                        }
                        console.log("YO")

                        axios.post(
                            'https://itachi7.pythonanywhere.com/auth/createuser/',
                            dataForApiRequest,
                        )
                            .then(function ({ data, status }) {
                                console.log(data);
                                if (data === "Your user name must be under 10 characters") {
                                    toast.error('Your user name must be under 10 characters', {
                                        theme: 'dark',
                                        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                                        autoClose: 1200
                                    });
                                    navigate('/register')
                                }
                                if (data === "User name should only contain letters and numbers") {
                                    toast.error('User name should only contain letters and numbers', {
                                        theme: 'dark',
                                        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                                        autoClose: 1200
                                    });
                                    navigate('/register')
                                }
                                if (data === "Passwords do not match") {
                                    toast.error('Passwords do not match', {
                                        theme: 'dark',
                                        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                                        autoClose: 1200
                                    });
                                    navigate('/register')
                                }
                                if (data === "Username already taken") {
                                    toast.error('Username already taken', {
                                        theme: 'dark',
                                        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                                        autoClose: 1200
                                    });
                                    navigate('/register')
                                }
                                if (data === "This email has already been taken") {
                                    toast.error('This email has already been taken', {
                                        theme: 'dark',
                                        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                                        autoClose: 1200
                                    });
                                    navigate('/register')
                                }
                                if (data === "User Created") {
                                    console.log("Finally Done")
                                    toast.success('User Created', {
                                        theme: 'dark',
                                        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                                        autoClose: 1200
                                    });
                                    navigate('/login')
                                }
                                if (data === "Try again") {
                                    toast.error('Try again', {
                                        theme: 'dark',
                                        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                                        autoClose: 1200
                                    });
                                    navigate('/register')
                                }
                                toast.success('User Created', {
                                    theme: 'dark',
                                    position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                                    autoClose: 1200
                                });
                                navigate('/login')
                                //   setToken(data.token)
                                //   toast.success("Registered Successfully...",{position: "bottom-right",autoClose: 2000})
                                //   setTimeout(()=>router.push('/'),2000)
                            })
                            .catch(function (error) {
                                console.log("Hello1");
                                // console.log(profdata)
                                // console.log(err)
                                // console.log(err.request)
                                if (error.response) {
                                    // The request was made and the server responded with a status code
                                    // that falls out of the range of 2xx
                                    console.log(error.response.data);
                                    console.log(error.response.status);
                                    console.log(error.response.headers);
                                } else if (error.request) {
                                    // The request was made but no response was received
                                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                                    // http.ClientRequest in node.js
                                    console.log(error.request);
                                } else {
                                    // Something happened in setting up the request that triggered an Error
                                    console.log('Error', error.message);
                                }
                                console.log(error.config);
                                //   toast.error(
                                // 'An account using same email or username is already created'
                                //   ,{position: "bottom-right"})
                            });

                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };
    console.log(profile)
    console.log(user.access_token)
    console.log(user)


    const {
        register,
        handleSubmit
        // watch,
        // formState: { errors }
    } = useForm();
    register("fname")
    register("lname")
    register("username")
    register("pass1")
    register("pass2")
    register("email")
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [pass1, setPass1] = useState('')
    const [pass2, setPass2] = useState('')
    const [username, setUsername] = useState('')



    const registerDone = (e) => {
        e.preventDefault()

        // if (
        //   registerFieldsAreValid(firstName, lastName, email, username, password)
        // ) {
        //   console.log('Please wait...')

        const dataForApiRequest = {
            fname: fname,
            lname: lname,
            email: email,
            username: username,
            pass1: pass1,
            pass2: pass2,
            // password: password,
        }

        axios.post(
            'https://itachi7.pythonanywhere.com/auth/createuser/',
            dataForApiRequest,
        )
            .then(function ({ data, status }) {
                console.log(data);
                if (data === "Your user name must be under 10 characters") {
                    toast.error('Your user name must be under 10 characters', {
                        theme: 'dark',
                        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                        autoClose: 1200
                    });
                    navigate('/register')
                }
                if (data === "User name should only contain letters and numbers") {
                    toast.error('User name should only contain letters and numbers', {
                        theme: 'dark',
                        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                        autoClose: 1200
                    });
                    navigate('/register')
                }
                if (data === "Passwords do not match") {
                    toast.error('Passwords do not match', {
                        theme: 'dark',
                        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                        autoClose: 1200
                    });
                    navigate('/register')
                }
                if (data === "Username already taken") {
                    toast.error('Username already taken', {
                        theme: 'dark',
                        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                        autoClose: 1200
                    });
                    navigate('/register')
                }
                if (data === "This email has already been taken") {
                    toast.error('This email has already been taken', {
                        theme: 'dark',
                        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                        autoClose: 1200
                    });
                    navigate('/register')
                }
                if (data === "User Created") {
                    toast.success('User Created', {
                        theme: 'dark',
                        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                        autoClose: 1200
                    });
                    navigate('/login')
                }
                if (data === "Try again") {
                    toast.error('Try again', {
                        theme: 'dark',
                        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                        autoClose: 1200
                    });
                    navigate('/register')
                }
                toast.success('User Created', {
                    theme: 'dark',
                    position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                    autoClose: 1200
                });
                navigate('/login')
                //   setToken(data.token)
                //   toast.success("Registered Successfully...",{position: "bottom-right",autoClose: 2000})
                //   setTimeout(()=>router.push('/'),2000)
            })
            .catch(function (error) {
                console.log("Hello1");
                // console.log(profdata)
                // console.log(err)
                // console.log(err.request)
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
                //   toast.error(
                // 'An account using same email or username is already created'
                //   ,{position: "bottom-right"})
            });
    }



    return (
        <>
            <ToastContainer />
            <section class="bg-white">
                <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <aside
                        class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
                    >
                        <Spline scene="https://prod.spline.design/icSMIsUvslU8capY/scene.splinecode" />
                    </aside>

                    <main
                        aria-label="Main"
                        class="flex bg-black items-center justify-center  sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
                    >
                        <div class="max-w-xl lg:max-w-3xl">
                            <a class="block text-white" href="/">
                                <div className="avatar">
                                    <div className="w-10 ">
                                        <img src={Img1} />
                                    </div>

                                </div>
                                {/* </a> */}
                            </a>

                            <h1
                                class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl"
                            >
                                Welcome to HawkFolio
                            </h1>

                            <p class="mt-4 leading-relaxed text-white">
                                At HawkFolio, we're passionate about helping investors build better portfolios. We believe that
                                investing should be simple and accessible to everyone.
                            </p>

                            <form action=" " class="mt-8 grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="FirstName"
                                        class="block text-sm font-medium text-white"
                                    >
                                        First Name
                                    </label>

                                    <input
                                        {...register('fname')}
                                        value={fname}
                                        onChange={(e) => setFname(e.target.value)}
                                        id="fname"
                                        name="fname"
                                        class="mt-1 w-full px-4 py-2 rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="LastName"
                                        class="block text-sm font-medium text-white"
                                    >
                                        Last Name
                                    </label>

                                    <input
                                        {...register('lname')}
                                        type="text"
                                        value={lname}
                                        onChange={(e) => setLname(e.target.value)}
                                        id="lname"
                                        name="lname"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
                                    />
                                </div>
                                <div class="col-span-6 ">
                                    <label for="Username" class="block text-sm font-medium text-white">
                                        Username
                                    </label>

                                    <input
                                        {...register('username')}
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        type="name"
                                        id="username"
                                        name="username"
                                        class="mt-1 w-full px-4 py-2 rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
                                    />
                                </div>
                                <div class="col-span-6">
                                    <label for="Email" class="block text-sm font-medium text-white">
                                        Email
                                    </label>

                                    <input
                                        {...register('email')}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        id="email"
                                        name="email"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="Password"
                                        class="block text-sm font-medium text-white"
                                    >
                                        Password
                                    </label>

                                    <input
                                        {...register('pass1')}
                                        value={pass1}
                                        onChange={(e) => setPass1(e.target.value)}
                                        type="password"
                                        id="pass1"
                                        name="pass1"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="PasswordConfirmation"
                                        class="block text-sm font-medium text-white"
                                    >
                                        Password Confirmation
                                    </label>

                                    <input
                                        {...register('pass2')}
                                        value={pass2}
                                        onChange={(e) => setPass2(e.target.value)}
                                        type="password"
                                        id="pass2"
                                        name="pass2"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6">
                                    <p class="text-sm text-white">
                                        By creating an account, you agree to our
                                        <a href="#" class="text-white underline">
                                            terms and conditions
                                        </a>
                                        and
                                        <a href="#" class="text-white underline">privacy policy</a>.
                                    </p>
                                </div>


                                <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button class="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded" type="submit" onClick={registerDone}>
                                        Create Account
                                    </button>

                                    <p class="mt-4 text-sm text-white sm:mt-0">
                                        Already have an account?
                                        <Link to="/login">
                                            <a href="#" class="text-white underline">Log in</a>.
                                        </Link>
                                    </p>
                                </div>

                                <div class="col-span-6">
                                    <div id="signInDiv">
                                        <div class="px-6 sm:px-0 max-w-sm">
                                            <button type="button" onClick={login}  class="text-black w-full  bg-white hover:bg-white/90 focus:ring-4 focus:outline-none focus:ring-white/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-white/55 mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
                                        </div>
                                    </div>
                                </div>

                                
                            </form>
                        </div>
                    </main>
                </div>
            </section>

        </>
    )
}
