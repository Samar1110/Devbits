import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
export default function SingleSellStock(props) {
    console.log(props)

    const [stock, userStock] = useState({
        id: props.stock.id,
        name: props.stock.name,
        price: props.stock.market_data.current_price.inr,
        image: props.stock.image.small,
        price_change: props.stock.market_data.price_change_24h_in_currency.inr,

    })
    return (
        <>
            <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4'>
                <div className="card w-96 shadow-xl">
                    <div className="card-body">
                        <div className="flex justify-start">
                            <div className="avatar">
                                <div className="w-14 rounded-xl mr-2">
                                    <img src={stock.image} alt="name" />
                                </div>
                            </div>
                            <h2 className="card-title text-black text-xl">{stock.name}</h2>
                        </div>

                        <p className="text-black text-lg">Current Price : ₹ {stock.price}</p>
                        <p className="text-black text-lg">Price Change : {stock.price_change > 0 ? <div class="text-lg text-[#38b000]">Price change % in 24h : 📈 {stock.price_change}</div> : <div class="text-lg text-[#e5383b]">Price change % in 24h : 📉 {stock.price_change}</div>}</p>
                        {/* <div className="card-actions justify-end">
                        
                    </div> */}
                    </div>
                </div>
            </div>


        </>
    )
}