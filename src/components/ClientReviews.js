import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function ClientReviews() {
    return (
        <>
            <section className="bg-[#6ede8a] text-gray-800">
                <div className="container px-6 py-12 mx-auto">
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
                        <div className="grid items-center gap-4 xl:grid-cols-5">
                            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                                <h2 className="text-4xl font-bold">Reviews By Our Clients</h2>
                                <p className="text-black">Reviews left by our clients after using our website</p>
                            </div>
                            <div className="p-6 xl:col-span-3">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="grid content-center gap-4">
                                        <div className="p-6 rounded shadow-md bg-black">
                                            <p className="text-white">I've been using HawkFolio for a few months now and it's been a game-changer for me. The platform is so user-friendly and the customer support is top-notch. I've made some great trades with the help of their expert insights and tools. Highly recommend!</p>
                                            <div className="flex items-center mt-4 space-x-4">
                                                <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-black0" />
                                                <div>
                                                    <p className="text-lg font-semibold text-white">Leroy Jenkins</p>
                                                    <p className="text-sm text-white">CTO of Company Co.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 rounded shadow-md bg-black">
                                            <p className="text-white">HawkFolio is my go-to platform for tracking my investments. The real-time data and analytics are incredibly helpful, and the interface is super easy to use. I also love the personalized alerts that keep me up-to-date on my portfolio.</p>
                                            <div className="flex items-center mt-4 space-x-4">
                                                <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-black0" />
                                                <div>
                                                    <p className="text-lg font-semibold text-white">Random1</p>
                                                    <p className="text-sm text-white">Company x.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid content-center gap-4">
                                        <div className="p-6 rounded shadow-md bg-black">
                                            <p className="text-white">I love how easy it is to get started on ShareDash. The platform is intuitive and user-friendly, and I was able to start trading right away. The real-time data is incredibly helpful, and I appreciate the personalized alerts that keep me on top of my investments.</p>
                                            <div className="flex items-center mt-4 space-x-4">
                                                <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-black0" />
                                                <div>
                                                    <p className="text-lg font-semibold text-white">Leroy Jenkins</p>
                                                    <p className="text-sm text-white">CTO of Company Co.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 rounded shadow-md bg-black">
                                            <p className="text-white">HawkFolio has helped me transform my investment strategy. The community is so supportive and the personalized advice has been invaluable. I feel more confident than ever about my financial future thanks to HawkFolio.</p>
                                            <div className="flex items-center mt-4 space-x-4">
                                                <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-black0" />
                                                <div>
                                                    <p className="text-lg font-semibold text-white">Leroy Jenkins</p>
                                                    <p className="text-sm text-white">CTO of Company Co.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}