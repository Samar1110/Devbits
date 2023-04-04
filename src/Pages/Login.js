import React from "react";
import Spline from '@splinetool/react-spline';
import { useState, useEffect } from "react";
import axios from "axios";
import Img1 from "../image/Logo (2).png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

export default function Login() {

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
                            email: res.data.email,
                            password: res.data.id,
                        }
                        console.log("YO")

                        axios.post(
                            'https://itachi7.pythonanywhere.com/auth/loginuser/',
                            dataForApiRequest,
                        )
                            .then(function ({ data, status }) {
                                console.log(data);
                                if (data === 'PAwry') {
                                    toast.success('Logged In Succesfully', {
                                        theme: 'dark',
                                        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                                        autoClose: 1200
                                    });
                                    window.sessionStorage.setItem('registered_email', res.data.email);
                                    var user_email2 = window.sessionStorage.getItem('registered_email');
                                    console.log("Hello2")
                                    console.log(user_email2)
                                    navigate('/')
                                }
                                else {
                                    toast.error('Try a different Username or Password', {
                                        theme: 'dark',
                                        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                                        autoClose: 1200
                                    });
                                    navigate('/login')
                                }
                                console.log("Hello2");
                                console.log("OP");

                                console.log(status)
                                //   console.log()
                                //   var user_email=window.sessionStorage.getItem('registered_email');
                                //   console.log("Hello1")
                                //   console.log(user_email)





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
    console.log(profile)
    console.log(user.access_token)
    console.log(user)


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginDone = (e) => {
        e.preventDefault();
        const dataForApiRequest = {
            email: email,
            password: password,
        }

        axios.post(
            'https://itachi7.pythonanywhere.com/auth/loginuser/',
            dataForApiRequest,
        )
            .then(function ({ data, status }) {
                console.log(data);
                if (data === 'PAwry') {
                    toast.success('Logged In Succesfully', {
                        theme: 'dark',
                        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                        autoClose: 1200
                    });
                    window.sessionStorage.setItem('registered_email', email);
                    var user_email2 = window.sessionStorage.getItem('registered_email');
                    console.log("Hello2")
                    console.log(user_email2)
                    navigate('/')
                }
                else {
                    toast.error('Try Again', {
                        theme: 'dark',
                        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
                        autoClose: 1200
                    });
                    navigate('/login')
                }
                console.log("Hello2");
                console.log("OP");

                console.log(status)
                //   console.log()
                //   var user_email=window.sessionStorage.getItem('registered_email');
                //   console.log("Hello1")
                //   console.log(user_email)





                //   setToken(data.token)
                //   toast.success("Registered Successfully...",{position: "bottom-right",autoClose: 2000})
                //   setTimeout(()=>router.push('/'),2000)
            })
            .catch(function (error) {
                console.log("Hello1");
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
                <div class="lg:grid lg:min-h-screen lg:grid-cols-12 ">
                    <aside
                        class="relative block   h-16 lg:order-last lg:col-span-5  lg:h-full xl:col-span-6 "
                    >
                        {/* <div className="sm:pt-4"> */}

                        <Spline scene="https://prod.spline.design/icSMIsUvslU8capY/scene.splinecode" />
                        {/* </div> */}
                    </aside>

                    <main
                        aria-label="Main"
                        class="flex bg-black text-white items-center justify-center sm:px-20 sm:pb-20px lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
                    >
                        <div class="max-w-xl lg:max-w-3xl">
                            <a class="block text-white" href="/">
                                <div className="avatar">
                                    <div className="w-10 ">
                                        <img src={Img1} />
                                    </div>

                                </div>
                            </a>

                            <h1
                                class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl"
                            >
                                Welcome to HawkFolio
                            </h1>

                            <p class="mt-4 leading-relaxed text-gray-500">
                                At HawkFolio, we're passionate about helping investors build better portfolios. We believe that
                                investing should be simple and accessible to everyone.
                            </p>

                            <form class="mt-8 grid grid-cols-6 gap-6">
                                <div class="col-span-6">
                                    <label for="Email" class="block text-sm font-medium text-white">
                                        Email
                                    </label>

                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        id="email"
                                        name="email"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-6">
                                    <label
                                        for="Password"
                                        class="block text-sm font-medium text-white"
                                    >
                                        Password
                                    </label>

                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        id="password"
                                        name="password"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button class="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded" onClick={loginDone}>
                                        Login
                                    </button>
                                    <Link to="/register">
                                        <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                                            Don't have an account
                                            <a href="#" class="text-white underline">Register</a>.
                                        </p>
                                    </Link>

                                </div>
                                <div class="col-span-6">
                                    <div id="signInDiv">
                                        <div class="px-6 sm:px-0 max-w-sm">
                                            <button type="button" onClick={login}  class="text-black w-full  bg-white hover:bg-white/90 focus:ring-4 focus:outline-none focus:ring-white/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-white/55 mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Login in with Google<div></div></button>
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
