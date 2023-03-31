import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const LineChart = () => {

  const params =useParams()
  const currId=params.id

  const [stockGraph, setStockGraph] = useState([]);
  const fetchHistoricData = async () => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${currId}/market_chart?vs_currency=INR&days=15`);
    setStockGraph(data.prices);
};
useEffect(() => {
  fetchHistoricData();
}, []);

  // useEffect(() => {
  //   const fetchCoins = async () => {
  //     await fetch(`${proxyUrl}${baseUrl}`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'x-access-token': `${apiKey}`,
  //         'Access-Control-Allow-Origin': "*"
  //       }
  //     })
  //       .then((response) => {
  //         if (response.ok) {
  //           response.json().then((json) => {
  //             console.log(json.data);
  //             setChart(json.data)
  //           });
  //         }
  //       }).catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   fetchCoins()
  // }, [baseUrl, proxyUrl, apiKey])

  // console.log("chart", chart);
  // var data = {
  //   labels: chart?.coins?.map(x => x.name),
  //   datasets: [{
  //     label: `${chart?.coins?.length} Coins Available`,
  //     data: chart?.coins?.map(x => x.price),
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(255, 206, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(255, 159, 64, 0.2)'
  //     ],
  //     borderColor: [
  //       'rgba(255, 99, 132, 1)',
  //       'rgba(54, 162, 235, 1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(153, 102, 255, 1)',
  //       'rgba(255, 159, 64, 1)'
  //     ],
  //     borderWidth: 1
  //   }]
  // };

  const totalDuration = 8000;
const delayBetweenPoints = totalDuration / stockGraph.length;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

  const animation = {
    x: {
      type: 'number',
      easing: 'linear',
      duration: delayBetweenPoints,
      from: NaN, // the point is initially skipped
      delay(ctx) {
        if (ctx.type !== 'data' || ctx.xStarted) {
          return 0;
        }
        ctx.xStarted = true;
        return ctx.index * delayBetweenPoints;
      }
    },
    y: {
      type: 'number',
      easing: 'linear',
      duration: delayBetweenPoints,
      from: previousY,
      delay(ctx) {
        if (ctx.type !== 'data' || ctx.yStarted) {
          return 0;
        }
        ctx.yStarted = true;
        return ctx.index * delayBetweenPoints;
      }
    }
  };

  var options = {
    animation,
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
    elements: {
      point: {
        radius: 1,
      },
    },
  }

  return (
    <div className='sm:w-[24rem] lg:w-[36rem] '>
      <Line
         data={{
          labels: stockGraph.map((coin) => {
            let date = new Date(coin[0]);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;
            return '';
          }),
          datasets: [
            {
              data: stockGraph.map((coin) => coin[1]),
              label: `Price ( Past 15 Days ) in INR`,
              borderColor: "black",
            },
          ],
        }}
        height={400}
        options={options}

      />
    </div>
  )
}

export default LineChart