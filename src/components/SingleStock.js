import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

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
            <Tilt>
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
                </Link>
            </Tilt>
        </div>
    );
}

export default SingleStock;
