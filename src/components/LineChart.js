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

  const params = useParams()
  const currId = params.id

  const [stockGraph, setStockGraph] = useState([]);
  const fetchHistoricData = async () => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${currId}/market_chart?vs_currency=INR&days=15`);
    setStockGraph(data.prices);
  };
  useEffect(() => {
    fetchHistoricData();
  }, []);
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