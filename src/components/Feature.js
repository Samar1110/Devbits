import React from "react";
import Img1 from "../image/App ui.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Feature() {
    return (
        <>
            <section className="m-4 md:m-8 bg-white text-[#6ede8a]">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                    <h2 className="text-5xl font-bold text-black">HawkFolio Presents </h2>
                    <p className="text-[#6ede8a] text-lg">You the following features</p>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                    >
                        <div className="flex flex-col items-center p-4">

                            <img class="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={Img1} alt="Bordered avatar" />
                            <h3 className="my-3 text-3xl font-semibold">User-friendly interface</h3>
                            <div className="space-y-1 leading-tight text-black flex justify-center w-60">
                                <p>
                                    The website should be designed with the user in mind, making it easy to navigate and use.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                    >
                        <div className="flex flex-col items-center p-4">

                            <img class="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://www.investopedia.com/thmb/6yT9a8ymacj5LQMsBC5ty5OZseY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TradingPlatforms_Chervov-dfe01706a3c5463aaa96883cc36e8722.jpg" alt="Bordered avatar" />
                            <h3 className="my-3 text-3xl font-semibold">Advanced trading tools</h3>
                            <div className="space-y-1 leading-tight text-black flex justify-center w-60">
                                The platform should offer a range of advanced
                                trading tools such as real-time market data,
                                technical analysis tools, and personalized alerts.
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                    >
                        <div className="flex flex-col items-center p-4">

                            <img class="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://cdn.dribbble.com/users/76454/screenshots/17624889/ui_3k_1_.png?compress=1&resize=400x300" alt="Bordered avatar" />
                            <h3 className="my-3 text-3xl font-semibold">Educational resources</h3>
                            <div className="space-y-1 leading-tight text-black flex justify-center w-60">
                                The website should provide users with educational
                                resources such as tutorials, webinars, and expert insights
                                to help them make informed investment decisions.
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                    >
                        <div className="flex flex-col items-center p-4">

                            <img class="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6HrxUjeVYCYZm87Q-YTSMStkI3V1BzbKqJanbA_bhg&s" alt="Bordered avatar" />
                            <h3 className="my-3 text-3xl font-semibold">Investment options</h3>
                            <div className="space-y-1 leading-tight text-black flex justify-center w-60">
                                The website should offer a wide range
                                range of investment options such as stocks, ETFs,
                                options, futures, and cryptocurrencies.
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                    >
                        <div className="flex flex-col items-center p-4">

                            <img class="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://cdn.dribbble.com/users/1011558/screenshots/16322912/r-mor_dribbble-1.png?compress=1&resize=800x600&vertical=top" alt="Bordered avatar" />
                            <h3 className="my-3 text-3xl font-semibold">Security measures</h3>
                            <div className="space-y-1 leading-tight text-black flex justify-center w-60">
                                The website should have strong security measures
                                n place such as SSL encryption, two-factor authentication, and
                                fraud protection to ensure that users' data and funds are safe.
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                    >
                        <div className="flex flex-col items-center p-4">

                            <img class="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://i.pinimg.com/736x/e7/c9/94/e7c994e91d718197bb6659deca28e8cd.jpg" alt="Bordered avatar" />
                            <h3 className="my-3 text-3xl font-semibold">Customer support</h3>
                            <div className="space-y-1 leading-tight text-black flex justify-center w-60">
                                The website should provide customers with excellent
                                customer support, with a team available to answer
                                any questions and resolve issues promptly.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}