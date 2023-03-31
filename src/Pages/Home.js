import React from "react";
import MyNav from "../components/Navbar";
import Footer from "../components/Footer";
import ClientReviews from "../components/ClientReviews";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Feature from "../components/Feature";
import Contact from "../components/Contact";
import Steps from "../components/Steps";
import AboutUs from "../components/AboutUs";
import Animation from "../components/Animation";


export default function Home(){
    return(
        <>
        <MyNav />
        {/* <Animation /> */}
        <Hero />
        <AboutUs />
        <Feature />
        <Steps />
        <ClientReviews />
        <Team />
        <Contact />
        <Footer />
        </>
    )
}