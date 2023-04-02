import React from "react";
import Spline from '@splinetool/react-spline';
export default function AboutUs() {
    return (
        <>
            <div className="h-[32rem] flex justify-content" id="about">
                <Spline scene="https://prod.spline.design/AdSdHH1nBIA53z65/scene.splinecode" />
                {/* </Spline> */}
            </div>
            <section className="bg-[#6ede8a] text-black">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-8 lg:flex-row lg:justify-between">
                    <p class="mt-6 mb-4 text-2xl font-semibold  leading-relaxed">
                        At HawkFolio, we're passionate about helping investors build better portfolios. We believe that
                        investing should be simple and accessible to everyone. That's why we've created a platform that
                        offers powerful tools, real-time data, and expert insights to help you invest smarter. Whether you're a
                        novice or a seasoned investor, HawkFolio is the platform for you.
                    </p>
                </div>
            </section>
        </>
    )
}