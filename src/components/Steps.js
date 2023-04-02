import React from "react"
import img from "../image/image-removebg-preview (1).png"
import { Shake } from 'reshake'



export default function Steps() {
    return (
        <>
            <section className="bg-black text-[#6ede8a]">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-[#6ede8a]">New to Trading !</h2>
                        <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-white-500">Don't worry we are here for you</p>
                    </div>
                    <div>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div className="lg:col-start-2">
                                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-white">Start Trading </h3>
                                <p className="mt-3 text-lg text-white-500">In 4 Easy Steps</p>
                                <div className="mt-12 space-y-12">

                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-emerald-600 text-[#6ede8a]">
                                                <h1 class="mt-0 mb-2 text-5xl font-medium leading-tight text-[#6ede8a]">
                                                    1.
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 text-white">Sign up for an account</h4>
                                            <p className="mt-2 text-white-500">Create an account with us by filling out a simple registration form
                                                Verify your email address and complete your profile.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-emerald-600 text-[#6ede8a]">
                                                <h1 class="mt-0 mb-2 text-5xl font-medium leading-tight text-[#6ede8a]">
                                                    2.
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 text-white">Fund your account</h4>
                                            <p className="mt-2 text-white-500">Choose a payment method that works for you
                                                Deposit funds into your account to start trading.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-emerald-600 text-[#6ede8a]">
                                                <h1 class="mt-0 mb-2 text-5xl font-medium leading-tight text-[#6ede8a]">
                                                    3.
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 text-white">Fund your account</h4>
                                            <p className="mt-2 text-white-500">Browse our extensive range of stocks and cryptocurrencies
                                                Get insights and real-time data to help you make informed trading decisions.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-emerald-600 text-[#6ede8a]">
                                                <h1 class="mt-0 mb-2 text-5xl font-medium leading-tight text-[#6ede8a]">
                                                    4
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 text-white">Start trading</h4>
                                            <p className="mt-2 text-white-500">Buy and sell stocks and cryptocurrencies with ease
                                                Track your portfolio and watch your investments grow.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                <Shake
                                    h={0}
                                    v={50}
                                    r={0}
                                    dur={750}
                                    int={66.5}
                                    max={100}
                                    fixed={true}
                                    fixedStop={false}
                                    freez={false}>
                                    <img src={img} alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                                </Shake>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}