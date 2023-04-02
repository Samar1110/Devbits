import React from "react"
import Spline from '@splinetool/react-spline';

export default function Hero() {
    return (
        <>
            <section className="bg-white text-gray-800">
                <div className="container grid lg:grid-cols-2 gap-3 sm:grid-cols-1 justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold text-black leading-none sm:text-6xl">
                            Building a better portfolio with Hawkfolio
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 text-black">Invest smarter with Hawkfolio
                            {/* <br className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem */}
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            {/* <a rel="noopener noreferrer" href="#" className="px-8 py-3 border-black text-lg font-semibold rounded text-black">Suspendisse</a> */}
                            <a href="#about">
                                <button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
                                    About Us
                                </button>
                            </a>

                            {/* <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded text-black border-gray-800">Malesuada</a> */}
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-8 lg:mt-0 h-96 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <Spline scene="https://prod.spline.design/aj-hTvEK81rVZrpk/scene.splinecode" />
                        {/* <img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
                    </div>
                </div>
            </section>
        </>
    )
}