import React from 'react';
import axios from 'axios';
import Tilt from 'react-parallax-tilt';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import LineChart from './LineChart';
import MyNav from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
AOS.init();



const StockInfo = (props) => {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [count, setCount] = useState(1)
  const [price, setPrice] = useState(0.01)
  const [status, setStatus] = useState("Cart")

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    setPrice(stockPrice[0].current_price)
  }

  const params = useParams()
  const navigate = useNavigate()
  console.log(params.id)
  var user_email = window.sessionStorage.getItem('registered_email');


  const handleClick = (e) => {
    e.preventDefault()


    setStatus("Buy")
    // setCount(parseInt(count,10))

    console.log(email)
    console.log(name)
    console.log(date)
    console.log(time)
    console.log(price)
    console.log(count)
    console.log(status)



    // else{
    const dataForApiRequest = {
      stock_name: name,
      stock_originalprice: price,
      stock_time: time,
      stock_date: date,
      stock_user_email: email,
      cnt: count,
      stock_status: status,
      // password: password,
    }
    axios.post(
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
    // }

  }
  const handleClickWatchlist = (e) => {
    e.preventDefault()

    const dataForApiRequest = {
      stock_name: params.id,
      stock_user_email: email,
      // password: password,
    }
    axios.post(
      'https://itachi7.pythonanywhere.com/auth/watchlist/',
      dataForApiRequest,
    ).then(function ({ data, status }) {
      console.log(data);
      console.log("HelloWatch");
      console.log("Watchlisti");
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

  }


  useEffect(() => {
    fetchHistoricData();
    stockInfoData();
    setStockDescription();
    PriceSetting();
    setEmail(user_email)
    setName(params.id)
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
    setStatus("Buy")
    // setPrice()
  }, []);
  const [stockGraph, setStockGraph] = useState([]);
  const [stockName, setStockName] = useState([]);
  const [stockDescription, setStockDescription] = useState("")
  const [stockPrice, setStockPrice] = useState([{
    current_price: 2291738,
  }])
  const [stockImage, setStockImage] = useState("https://i.pinimg.com/236x/d4/81/56/d48156046729d3dc1b27e41ff5dc9ceb.jpg")
  const [stockCoinScore, setStockCoinScore] = useState('')



  //   const [filterData, setFilterData] = useState(Stocks);
  const fetchHistoricData = async () => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=INR&days=30`);
    setStockGraph(data);
  };
  const stockInfoData = async () => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`);
    setStockName(data);
    setStockDescription(data.description.en.substring(0, 187))
    setStockImage(data.image.large)
    setStockCoinScore(data.coingecko_score)
  };
  const PriceSetting = async () => {
    const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    setStockPrice(data.filter((e) => {
      return e.id === params.id
    }))
  };
  console.log("Hello1")
  console.log(stockGraph)
  console.log("Hello2")
  console.log(stockName)
  console.log(stockPrice)

  return (
    <div>
      <ToastContainer />
      <MyNav />
      <din className="flex justify-center bg-black py-5">
        <h1 className="text-5xl font-bold text-white leading-none sm:text-6xl">
          {params.id}
        </h1>
      </din>
      <div className=" bg-black relative  flex justify-around items-center py-20 mx-4">
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <div className="container  bg-[#6ede8a] bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm ">
            <div className="card lg:card-side bg-[#6ede8a] shadow-xl">

              <figure><LineChart /></figure>
              <div className="card-body">
                <div className="flex flex-wrap justify-center">
                  <div className="w-6/12 sm:w-4/12 px-1 ">
                    <img src={stockImage} alt="..." className="bg-white shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
                  </div>
                </div>
                <div className='container lg:w-[24rem] sm:w-[14rem] pt-6 flex justify-start'>
                  <p class="tracking-tighter break-all  text-black md:text-lg dark:text-gray-400">{stockDescription}...</p>
                </div>
                <div className='container pt-6 flex justify-start'>
                  <span class="  text-black text-2xl dark:text-gray-400">Coingecko Score : <span className="underline decoration-sky-500">  {stockCoinScore}</span></span>
                </div>
                <div className='container pt-6 flex justify-start'>
                  <span class="  text-black text-2xl dark:text-gray-400">Current Price : <span className="underline decoration-sky-500">₹ {stockPrice[0].current_price} </span></span>
                </div>

                <form>
                  <div className='flex justify-end mt-5'>
                    {user_email === null ?
                      <div>
                        <Link to="/login">
                          <button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
                            Login In First
                          </button>
                        </Link>

                      </div> :
                      <Fragment>
                        <Button variant="gradient" color="yellow" className='mr-2' onClick={handleClickWatchlist}>
                          <span>Add to Watchlist</span>
                        </Button>
                        <Button onClick={handleOpen} variant="gradient">
                          Buy
                        </Button>
                        <Dialog open={open} handler={handleOpen}>
                          <DialogHeader>Add Quantity</DialogHeader>
                          <DialogBody divider>
                            <input
                              value={count}
                              onChange={(e) => setCount(e.target.value)}
                              type="text"
                              id="count"
                              name="count"
                              class="mt-1 w-full px-4 py-2 rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
                            />
                          </DialogBody>
                          <DialogFooter>
                            <Button
                              variant="text"
                              color="red"
                              onClick={handleOpen}
                              className="mr-1"
                            >
                              <span>Cancel</span>
                            </Button>

                            <Button variant="gradient" color="green" onClick={handleClick}>
                              <span>Confirm</span>
                            </Button>
                          </DialogFooter>
                        </Dialog>
                      </Fragment>

                    }
                  </div>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockInfo;
