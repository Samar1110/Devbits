import React from 'react';
import axios from 'axios';
import Tilt from 'react-parallax-tilt';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LineChart from './LineChart';
import MyNav from './Navbar';




const StockInfo = (props) => {
    const params = useParams()
    console.log(params.id)
    // const options = {
    //     method: "GET",
    //     url: "https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=${INR}&days=${30}",
    //     //   headers: {
    //     //     'X-RapidAPI-Key': '236551598cmsh041c79dc13535cep1cb297jsn0344bd0922e5',
    //     //     'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
    //     //   }
    // };
    useEffect(() => {
        fetchHistoricData();
        stockInfoData();
        setStockDescription();
        PriceSetting();
    }, []);
    const [Price, setPrice] = React.useState("2291738");
    const [stockGraph, setStockGraph] = React.useState([]);
    const [stockName, setStockName] = useState([]);
    const [stockDescription, setStockDescription] = useState("")
    const [stockPrice, setStockPrice] = useState({})
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
        setStockPrice(data.filter((e)=>{
            return e.id===params.id
        }))
        setPrice(stockPrice[0].current_price)
    };

    var data;

    //   const fetchApi = async () => {
    //     axios
    //       .request(options)
    //       .then(function (response) {
    //         // Price === "ashish" ? setPrice((response.data.form_4_filings)) : console.log("ddd");
    //         console.log(response.data);
    //         // console.log(response.data.form_4_filings);
    //         // console.log("kjgjhsdghghjdb")
    //         // console.log(Price);
    //         // data = response.data.form_4_filings;
    //         setStock(() => {
    //           return response.data;
    //         });
    //         setPrice(response.data);
    //         console.log(Stock);
    //         // setFilterData(response.data)
    //       })
    //       .catch(function (error) {
    //         console.error(error);
    //       });
    //   };
    console.log(stockGraph)
    console.log(stockName)
    console.log(stockPrice)
    //   console.log(stockName.image.length)
    //   console.log(stockDescription)
    //   console.log(len(stockName))

    // const location = useLocation()
    // const { id } = location.state
    // console.log(id)

    // const { id } = useParams();

    return (
        <div>
            <MyNav />
            <din className="flex justify-center bg-black py-5">
                <h1 className="text-5xl font-bold text-white leading-none sm:text-6xl">
                    {params.id}
                </h1>
            </din>
            <div className=" bg-black relative  flex justify-around items-center py-20 mx-4">

                <Tilt>
                    <div className="container  bg-[#6ede8a] bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm ">
                        <div className="card lg:card-side bg-[#6ede8a] shadow-xl">

                            <figure><LineChart /></figure>
                            <div className="card-body">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-6/12 sm:w-4/12 px-1">

                                        <img src={stockImage} alt="..." className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
                                    </div>
                                </div>
                                <div className='container lg:w-[24rem] sm:w-[14rem] pt-6 flex justify-center'>
                                    <p class="tracking-tighter break-all  text-black md:text-lg dark:text-gray-400">{stockDescription}...</p>
                                </div>
                                <div className='container pt-6 flex justify-center'>
                                    <span class="  text-black text-2xl dark:text-gray-400">Coingecko Score : <span className="underline decoration-sky-500">  {stockCoinScore}</span></span>
                                </div>
                                <div className='container pt-6 flex justify-center'>
                                    <span class="  text-black text-2xl dark:text-gray-400">Current Price : <span className="underline decoration-sky-500">{Price} </span></span>
                                </div>

                                <form action='http://127.0.0.1:8000/auth/addStock/' method='post'>
                                    <button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
                                        Add to Cart
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    );
}

export default StockInfo;
