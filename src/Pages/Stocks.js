import React, { useState, useEffect } from "react";
// import '../../App.css';
import axios from "axios";
import SingleStock from "../components/SingleStock";
import MyNav from "../components/Navbar";
import Graph from "../components/Graph";
import { Input, Button } from "@material-tailwind/react";
// import Stockitem from '../Stockitem';

// const axios = require("axios");
const options = {
  method: "GET",
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false",
  //   headers: {
  //     'X-RapidAPI-Key': '236551598cmsh041c79dc13535cep1cb297jsn0344bd0922e5',
  //     'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
  //   }
};

export default function Stock() {
  useEffect(() => {
    fetchApi();
  }, []);
  const [Price, setPrice] = React.useState("ashish");
  const [Stocks, setStocks] = React.useState([]);
  const [filterData, setFilterData] = useState(Stocks);

  var data;

  const fetchApi = async () => {
    axios
      .request(options)
      .then(function (response) {
        // Price === "ashish" ? setPrice((response.data.form_4_filings)) : console.log("ddd");
        console.log(response.data);
        // console.log(response.data.form_4_filings);
        // console.log("kjgjhsdghghjdb")
        // console.log(Price);
        // data = response.data.form_4_filings;
        setStocks(() => {
          return response.data;
        });
        setPrice(response.data);
        console.log(Stocks);
        setFilterData(response.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const [searchInput,setSearchInput]=useState(" ")
  const handleFilter = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value)
    const newFilter=Stocks.filter((stock)=>{
      return stock.name.includes(e.target.value);
    })
    console.log(newFilter)
    if(newFilter.length>0)
    setFilterData(newFilter)
    else
    setFilterData(Stocks)
    // setSearchInput(e.target.value);
  };
  
  var count=0;

  // if (searchInput.length > 0) {
  //   if(count===0){
  //     setStocks(Stocks.filter((stock) => {
  //       return stock.name.match(searchInput);
  //   }))
  //   count++;
  //   }
  //   else
  //   count=0
      
  // }
  // const [email, setEmail] = React.useState("");
  // const onChange = ({ target }: any) => setEmail(target.value);

  console.log(Stocks);
  // console.log(Stocks[0].img)
  var key;

  return (
    <>
      <MyNav />
      <Graph />
      <div className="flex justify-center bg-[#6ede8a] py-10">
        <div>
          <div class="flex items-center justify-center ">
            <form method="GET">
              <div class="relative text-gray-600 focus-within:text-gray-400">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    class="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      class="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="q"
                  class="py-2 text-sm pl-10 outline-none bg-white text-gray-900"
                  placeholder="Search..."
                  autocomplete="off"
                  onChange={handleFilter}
                  value={searchInput}
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        <div class="flex items-center min-h-screen bg-black text-white">
          <div class="p-4 w-full">
            <div class="grid grid-cols-12 gap-3">
              {filterData.map((stock) => (
                <SingleStock
                  key={stock.id}
                  id={stock.id}
                  name={stock.name}
                  symbol={stock.symbol}
                  src={stock.image}
                  ath={stock.ath}
                  ath_change_percentage={stock.ath_change_percentage}
                  atl={stock.atl}
                  atl_change_percentage={stock.atl_change_percentage}
                  current_price={stock.current_price}
                  circulating_supply={stock.circulating_supply}
                  high_24h={stock.high_24h}
                  price_change_24h={stock.price_change_24h}
                  price_change_percentage_24h={
                    stock.price_change_percentage_24h
                  }
                  low_24h={stock.low_24h}
                  market_cap={stock.market_cap}
                  market_cap_change_24h={stock.market_cap_change_24h}
                  market_cap_change_percentage_24h={
                    stock.market_cap_change_percentage_24h
                  }
                  market_cap_rank={stock.market_cap_rank}
                  max_supply={stock.max_supply}
                  total_supply={stock.total_supply}
                  total_volume={stock.total_volume}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React from 'react';
// import Plot from 'react-plotly.js';

// class Services extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       stockChartXValues: [],
//       stockChartYValues: []
//     }
//   }

//   componentDidMount() {
//     this.fetchStock();
//   }

//   fetchStock() {
//     const pointerToThis = this;
//     console.log(pointerToThis);
//     const API_KEY = '1QNWA30TWRMAJXHZ';
//     let StockSymbol = 'IBM';
//     let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=5min&apikey=${API_KEY}`
//     // let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=5min&outputsize=full&apikey=${API_KEY}`;
//     // let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
//     let stockChartXValuesFunction = [];
//     let stockChartYValuesFunction = [];

//     fetch(API_Call)
//       .then(
//         function(response) {
//           return response.json();
//         }
//       )
//       .then(
//         function(data) {
//           console.log(data);

//           for (var key in data['Time Series (5min)']) {
//             stockChartXValuesFunction.push(key);
//             stockChartYValuesFunction.push(data['Time Series (5min)'][key]['1. open']);
//           }

//           // console.log(stockChartXValuesFunction);
//           pointerToThis.setState({
//             stockChartXValues: stockChartXValuesFunction,
//             stockChartYValues: stockChartYValuesFunction
//           });
//         }
//       )
//   }

//   render() {
//     return (
//       <div>
//         <h1>Stock Market</h1>
//         <Plot
//           data={[
//             {
//               x: this.state.stockChartXValues,
//               y: this.state.stockChartYValues,
//               type: 'scatter',
//               mode: 'lines+markers',
//               marker: {color: 'red'},
//             }
//           ]}
//           layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
//         />
//       </div>
//     )
//   }
// }

// export default Services;
