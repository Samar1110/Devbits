import React from 'react';
import axios from 'axios';
import MyNav from './Navbar';
import { useState, useEffect } from 'react';
import UserWatchStock from './UserWatchStock';
import { useNavigate } from 'react-router-dom';


const Watchlist = () => {

    const navigate = useNavigate()
    var user_email = window.sessionStorage.getItem('registered_email');

    const [stockInfo, setStockInfo] = useState("")
    const [watchlist, setUserWatchlist] = useState([
        {
            name: "2",
            image: {
                small: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
            },
            market_data: {
                current_price: {
                    inr: "2336146"
                },
                price_change_24h_in_currency: {
                    inr: "-8194.262548722792"
                }
            },
        }
    ])
    const options = {
        method: 'GET',
        url: "https://itachi7.pythonanywhere.com/auth/watchlist/",
    };

    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data);
            var ans = []
            response.data.map((e) => {
                if (e.stock_user_email == user_email)
                    ans.push(e)
            })

            const promises = ans.map((e) => {
                return axios.get(`https://api.coingecko.com/api/v3/coins/${e.stock_name}`);
            });
            axios.all(promises).then((responses) => {
                const ans = responses.map((response1) => {
                    console.log(response1.data);
                    return response1.data;
                });
                console.log(ans);
                setUserWatchlist(ans);
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    // console.log(userStockInfo)
    console.log("HEllo")
    console.log(watchlist)


    console.log(watchlist)
    console.log(user_email)


    return (
        <>
            {user_email === null ? navigate("/login") : <div>
                <MyNav />
                <div className="flex justify-center bg-black py-5">
                    <h1 className="text-5xl font-bold text-white leading-none sm:text-6xl">
                        Watchlist
                    </h1>
                </div>
                <div className="p-4 w-full bg-black">
                    <div className="grid grid-cols-12 gap-3">
                        {watchlist.map(function (stock, i) {
                            return (
                                <>
                                    {stock.name !== "2" && <UserWatchStock key={i} stock={stock} />}
                                </>

                            );
                        })}
                    </div>
                </div>
            </div>}
        </>

    );
}

export default Watchlist;
