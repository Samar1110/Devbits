import React from "react"
import { useState, useEffect } from "react"
import axios from "axios";
import AOS from 'aos';
import { useNavigate } from "react-router-dom";
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleSellStock from "./SingleSellStock";
AOS.init();

export default function Sellstock() {
    const navigate = useNavigate()
    var user_email = window.sessionStorage.getItem('registered_email');
    const [userStock, setUserStock] = useState([
        {
            stock_name: "",
            stock_originalprice: "",
            stock_time: "",
            stock_date: "",
            stock_user_email: "",
            cnt: "",
            stock_status: "",
        }
    ])
    const [currentStock, setCurrentStock] = useState([
        {
            id: "1",
            name: "2",
            image: {
                small: "3",
            },
            market_data: {
                current_price: {
                    inr: "123456"
                },
                price_change_24h_in_currency: {
                    inr: "-8194.262548722792"
                }
            },


        }
    ])

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(0.01)
    const [status, setStatus] = useState("Buy")
    const [updatePrice, setUpdatePrice] = useState("1")




    const options1 = {
        method: 'GET',
        url: "https://itachi7.pythonanywhere.com/auth/addStock/",
    };


    useEffect(() => {
        axios.request(options1).then(function (response) {
            var ans = [];
            var promises = response.data.map((e) => {
                if (e.stock_user_email === user_email && e.stock_status === "Buy") {
                    return axios
                        .get(`https://api.coingecko.com/api/v3/coins/${e.stock_name}`)
                        .then(function (response1) {
                            console.log("Hello78zxzx9");
                            console.log(response1.data);
                            return response1.data;
                        })
                        .catch(function (error) {
                            console.error(error);
                        });
                    ans.push(e);
                }
            });
            Promise.all(promises).then((ans2) => {
                console.log("Hello46");
                console.log(ans2);
                // console.log(ans);
                console.log("Hello789");

                setCurrentStock(ans2);
                setUserStock(ans);
                toast.success("Welcome back to Dashboard", {
                    theme: "dark",
                    position:
                        window.innerWidth < 600
                            ? toast.POSITION.BOTTOM_CENTER
                            : toast.POSITION.TOP_RIGHT,
                    autoClose: 1200,
                });
                console.log(userStock);
                console.log(currentStock);
            });
            return;
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        setEmail(user_email)
        setDate(() => {
            var date1 = new Date().getDate(); //To get the Current Date
            var month1 = new Date().getMonth() + 1; //To get the Current Month
            var year1 = new Date().getFullYear(); //To get the Current Year
            return (date1 + "/" + month1 + "/" + year1)
        })
        setTime(() => {
            var hours1 = new Date().getHours(); //To get the Current Hours
            var min1 = new Date().getMinutes(); //To get the Current Minutes
            var sec1 = new Date().getSeconds(); //To get the Current Seconds
            return (hours1 + ":" + min1 + ":" + sec1)
        })
        setStatus("Sold")
        setCount(1)

    }, [])

    console.log("Hello2")

    console.log(userStock)
    console.log(currentStock)
    console.log("Hello1")

    const handleClick = (e, p) => {
        console.log(e)
        console.log(p)
        const stock = userStock.find((stock) => stock.stock_name === e);
        const sumMoney = stock ? stock.stock_originalprice : 265987;
        console.log(sumMoney)
        // console.log(ansd)

        const dataForApiRequest = {
            stock_name: e,
            stock_originalprice: sumMoney,
            stock_time: time,
            stock_date: date,
            stock_user_email: email,
            cnt: count,
            stock_status: "Sold",
            updated_price: p,
            // password: password,
        }

        // console.log(e.target.value)
        // console.log(name)
        console.log(time)
        console.log(date)
        console.log(count)
        console.log(status)
        console.log(p)
        console.log(email)


        axios.patch(
            'https://itachi7.pythonanywhere.com/auth/addStock/',
            dataForApiRequest,
        )
            .then(function ({ data, status }) {
                console.log(data);
                console.log("Hello2");
                console.log("Jai Mata Di");
                navigate('/dashboard')
            })
            .catch(function (error) {
                console.log("Hello1");
                // console.log(profdata)
                // console.log(err)
                // console.log(err.request)
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
                //   toast.error(
                // 'An account using same email or username is already created'
                //   ,{position: "bottom-right"})
            });

        window.location.reload(false);

    }

    return (
        <>
            <ToastContainer />
            <div class="p-4 w-full">
                <div class="grid grid-cols-12 gap-3">
                    {/* <div
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-center"
                        > */}
                    {currentStock.map((stock) => {
                        return (
                            <>{
                                stock !== undefined && stock.name !== "2" && <><SingleSellStock stock={stock} /> <button className="btn btn-primary" onClick={() => {
                                    handleClick(stock.id, stock.market_data.current_price.inr)
                                }}>Sell Now</button></>
                            }

                                {/* <div className="card w-96 bg-white shadow-xl">
                                        <div className="card-body">
                                            <div className="flex justify-start">
                                                <h2 className="card-title text-black text-xl"></h2>
                                            </div>

                                            <p className="text-black text-lg">Current Price : ₹ </p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary" onClick={()=>{
                                                    handleClick(stock.id,stock.market_data.current_price.inr)
                                                }}>Sell Now</button>
                                            </div>
                                        </div>
                                    </div> */}
                            </>
                        )

                    })}
                    {/* </div> */}
                </div>
            </div>

        </>
    )
}