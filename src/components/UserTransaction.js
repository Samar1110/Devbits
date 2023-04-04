import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


export default function UserTransaction(props) {

    var user_email = window.sessionStorage.getItem('registered_email');
    const [userTransaction, setUserTransaction] = useState([])

    const options3 = {
        method: 'GET',
        url: "https://itachi7.pythonanywhere.com/auth/addStock/",
    };
    useEffect(() => {
        axios.request(options3).then(function (response) {
            // console.log(response.data); 
            // console.log(request.data)
            var ans = []
            response.data.map((e) => {
                if (e.stock_user_email === user_email) {
                    console.log(e)
                    ans.push(e)
                }
            });
            console.log(ans)
            setUserTransaction(ans)
            console.log(userTransaction)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])
    // console.log(props.userTransaction)
    const stockData = userTransaction
    console.log(typeof (userTransaction))
    return (
        <>
            {stockData.map((stock) => {
                return (
                    <>
                        <tbody class="bg-white">
                            <tr>
                                <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                    {stock.stock_status} {stock.stock_name}
                                </td>
                                <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    {stock.stock_date}
                                </td>
                                <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    {stock.stock_time}
                                </td>
                                <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    {stock.stock_originalprice}
                                </td>
                            </tr>
                        </tbody>
                    </>
                )

            })}

        </>
    )
}