import React from "react";
// import MyNav from "./MyNav";
import MyNav from "./Navbar";
import CircleChat from "./CircleChat";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UserTransaction from "./UserTransaction";
import axios from "axios";
import Sellstock from "./Sellstock";
import { useNavigate } from "react-router-dom";

export default function User() {

    const navigate = useNavigate()
    var user_email = window.sessionStorage.getItem('registered_email');
    // var profit=0;

    const [userAmount, setUserAmount] = useState("")
    const [userTransaction, setUserTransaction] = useState([])
    const [userInfo, setUserInfo] = useState([
        {
            email: "",
            fname: "",
            lname: "",
            username: "",
            usermoney: "",
        }
    ])
    const [userStock, setUserStock] = useState([])
    const [userProfit, setUserProfit] = useState(0)
    // const [userStock,setUserStock]=useState("")
    const [stockUserData, setUserStockData] = useState([
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

    var nac = new Map()
    const [userGraphData, setUserGraphData] = useState(nac)

    const options1 = {
        method: 'GET',
        url: "https://itachi7.pythonanywhere.com/auth/addStock/",
    };
    useEffect(() => {
        axios.request(options1).then(function (response) {
            // console.log(request.data)
            // console.log("Please Bhai Hoja")
            // console.log(response.data);
            // console.log("Please Bhai")
            setUserStockData(response.data);
            var data = new Map()
            response.data.map((e) => {
                if (e.stock_user_email === user_email) {
                    if (data.has(e.stock_name)) {
                        data.set(e.stock_name, data.get(e.stock_name) + 1)
                    }
                    else
                        data.set(e.stock_name, 1)
                }
            })
            let sum = 0;

            stockUserData.forEach((stock) => {
                if (stock.stock_status === "Buy") {
                    sum -= stock.stock_originalprice;
                } else if (stock.stock_status === "Sold") {
                    sum += stock.stock_originalprice;
                }
            });
            setUserProfit(sum)
            // var uSt=data
            // console.log(data)
            setUserGraphData(data);
            // console.log(value);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])
    
    const options2 = {
        method: 'GET',
        url: "https://itachi7.pythonanywhere.com/auth/userInfo/",
    };
    useEffect(() => {
        axios.request(options2).then(function (response) {
            response.data.map((e) => {
                if (e.email === user_email) {
                    setUserInfo(e)
                }
            })
            
        }).catch(function (error) {
            console.error(error);
        });
    }, [])
    console.log(stockUserData)
    console.log(userInfo.usermoney)
    // const options3={
    //     method
    // } https://api.coingecko.com/api/v3/coins/${id}





    return (
        <>{
            user_email === null ? navigate("/login") : <div>
                <MyNav />
                <div class="flex overflow-hidden bg-white pt-16">
                    <aside id="sidebar" class="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar">
                        <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                                <div class="flex-1 px-3 bg-white divide-y space-y-1">
                                    <ul class="space-y-2 pb-2">

                                        <li>
                                            <Link to="/dashboard">
                                                <a href="#" class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group">
                                                    <svg class="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                    </svg>
                                                    <span class="ml-3">Dashboard</span>
                                                </a>
                                            </Link>

                                        </li>
                                        <li>
                                            <Link to="/stock">
                                                <a href="#" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                                                    <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <span class="ml-3 flex-1 whitespace-nowrap">Stocks</span>
                                                </a>
                                            </Link>

                                        </li>
                                        <li>
                                            <Link to="/login">
                                                <a href="#" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                                                    <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <span class="ml-3 flex-1 whitespace-nowrap">Sign In</span>
                                                </a>
                                            </Link>

                                        </li>
                                        <li>
                                            <Link to="/watchlist">
                                                <a href="#" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                                                    <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <span class="ml-3 flex-1 whitespace-nowrap">Watchlist</span>
                                                </a>
                                            </Link>

                                        </li>
                                        <li>
                                            <Link to="/register">
                                                <a href="#" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                                                    <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <span class="ml-3 flex-1 whitespace-nowrap">Sign Up</span>
                                                </a>
                                            </Link>

                                        </li>
                                    </ul>
                                    <div class="space-y-2 pt-2">
                                        <a href="#" target="_blank" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                                            <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="ml-3">Help</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                    <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                        <main>
                            <div class="pt-6 px-4">
                                <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                                    <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2">
                                        <div class="mb-4 flex items-center justify-between">
                                            <div>
                                                <h3 class="text-xl font-bold text-gray-900 mb-2">Latest Transactions</h3>
                                                <span class="text-base font-normal text-gray-500">This is a list of latest transactions</span>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <a href="#" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>
                                            </div>
                                        </div>
                                        <div class="flex flex-col mt-8">

                                            <div class="overflow-x-auto rounded-lg">
                                                <div class="align-middle inline-block min-w-full">
                                                    <div class="shadow overflow-hidden sm:rounded-lg">
                                                        <table class="min-w-full divide-y divide-gray-200">
                                                            <thead class="bg-gray-50">
                                                                <tr>
                                                                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                        Transaction
                                                                    </th>
                                                                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                        Date
                                                                    </th>
                                                                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                        Time
                                                                    </th>
                                                                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                        Amount
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <UserTransaction />

                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                                        <div class="flex-shrink-0">
                                            <span class="text-lg leading-none font-bold text-gray-900">Current Balance in Account :</span>
                                            <h3 class="text-lg font-normal text-gray-500 mb-5">{userInfo.usermoney}</h3>
                                        </div>
                                        <div class="flex items-center justify-between mb-4">

                                            <div class="flex-shrink-0">
                                                <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">$ {userProfit}</span>
                                                <h3 class="text-base font-normal text-gray-500">Sales this week</h3>
                                            </div>
                                            {/* <div class="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                                %{((userInfo.usermoney / 1000000) - 1) * 100 ? <div class="text-lg text-[#38b000]"> 📈 {((userInfo.usermoney / 1000000) - 1).toFixed(2)}</div> : <div class="text-lg text-[#e5383b]">📉 {((userInfo.usermoney / 1000000) - 1).toFixed(2)}</div>}

                                            </div> */}
                                        </div>
                                        <div class="flex-shrink-0">
                                            <span class="text-sm leading-none font-bold text-gray-900">User Percentage Change in money :</span>
                                            <h3 class="text-lg font-normal text-gray-500 mb-5">{((userInfo.usermoney / 1000000) - 1) * 100 ? <div class="text-lg text-[#38b000]"> 📈 {((userInfo.usermoney / 1000000) - 1).toFixed(2)}%</div> : <div class="text-lg text-[#e5383b]">📉 {((userInfo.usermoney / 1000000) - 1).toFixed(2)}%</div>}</h3>
                                        </div>
                                        <div id="main-chart">
                                            <CircleChat userGraphData={userGraphData} />
                                        </div>
                                    </div>

                                </div>
                                <div class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-20 ">
                                    <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">2,340</span>
                                                <h3 class="text-base font-normal text-gray-500">New products this week</h3>
                                            </div>
                                            <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                                14.6%
                                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">5,355</span>
                                                <h3 class="text-base font-normal text-gray-500">Visitors this week</h3>
                                            </div>
                                            <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                                32.9%
                                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">385</span>
                                                <h3 class="text-base font-normal text-gray-500">User signups this week</h3>
                                            </div>
                                            <div class="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                                                -2.7%
                                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="flex justify-center text-black text-5xl mb-5"> Sell Stocks </h1>
                                    <Sellstock />

                                </div>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
                <script async defer src="https://buttons.github.io/buttons.js"></script>
                <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
            </div>
        }


        </>
    )
}