import React, { useState } from "react";
import MyNav from "../components/Navbar";
import Footer from "../components/Footer";
import ClientReviews from "../components/ClientReviews";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Feature from "../components/Feature";
import Contact from "../components/Contact";
import Steps from "../components/Steps";
import AboutUs from "../components/AboutUs";
import { FaSpinner } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from "../components/Spinner/Spinner";
import 'react-toastify/dist/ReactToastify.css';
// import {Ripple} from 'react-preloaders';


export default function Home() {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        // spinner.style.display = "none";
        setLoading(false);
    }, 2000);
    return (
        <>
            <>
                <ToastContainer />
                <MyNav />
                <Hero />
                <AboutUs />
                <Feature />
                <Steps />
                <ClientReviews />
                <Team />
                <Contact />
                <Footer />
            </>


        </>
    )
}