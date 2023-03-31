import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const SingleStock = (props) => {
    // const params = useParams()
    // const currId = params.id
    console.log(props)
    var posath
    if (props.price_change_percentage_24h >= 0) {
        posath = true
    }
    else {
        posath = false
    }
    var posatl
    if (props.atl_change_percentage >= 0) {
        posatl = true
    }
    else {
        posatl = false
    }
    console.log(props.id)
    console.log(`/stockinfo/${props.id}`)
    return (
        // <div>
        <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4">
            <Link to={`/stockinfo/${props.id}`}>
                <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                    <div class="flex justify-center md:justify-end -mt-16">
                        <img class="w-20 h-20 object-cover rounded-full border-2 bg-white" src={props.src} />
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">{props.name}</h2>
                        <p class="mt-2 text-gray-600">Rs {props.current_price}</p>
                    </div>
                    {posath ? <div class="text-lg text-[#38b000]">Price change % in 24h : 📈 {props.price_change_percentage_24h}</div> : <div class="text-lg text-[#e5383b]">Price change % in 24h : 📉 {props.price_change_percentage_24h}</div>}
                </div>

                {/* <div class="flex flex-row justify-around bg-white shadow-sm rounded p-4">
                    <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl text-green-500">
                        <img alt="stock_img" className="self-center flex-shrink-0 w-12 h-12  bg-center bg-cover rounded-full " src={props.src} />
                    </div>
                    <div class="flex flex-col ml-4">
                        <div class="text-lg text-[#011627]">{props.name}</div>
                        <div class="font-bold text-lg text-[#2ec4b6]">Rs {props.current_price}</div>
                    </div>
                    <div class="flex flex-col ml-4">
                        {posath ? <div class="text-lg text-[#38b000]">Price change % in 24h :<FaArrowUp /> {props.price_change_percentage_24h}</div> : <div class="text-lg text-[#e5383b]">Price change % in 24h :<FaArrowDown /> {props.price_change_percentage_24h}</div>}
                    </div>
                </div> */}
            </Link>
        </div>

        // </div>
    );
}

export default SingleStock;
