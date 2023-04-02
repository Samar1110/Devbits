import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
const CircleChat = (props) => {

  var label = [];
  var data = [];
  var count = 0;
  var backgroundColor = [];

  for (const stock of props.userGraphData.keys()) {
    label.push(stock)
    data.push(props.userGraphData.get(stock))
    // console.log(rgb(216,243,220+count))
    var color1 = Math.floor(Math.random() * 256)
    var color2 = Math.floor(Math.random() * 256)
    var color3 = Math.floor(Math.random() * 256)
    backgroundColor.push(`rgb(${color1},${color2},${color3})`)
    // count+=1;
  }
  const dataCircle = {
    labels: label,
    datasets: [{
      label: label,
      data: data,
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  };
  const config = {
    type: 'doughnut',
    data: dataCircle,
  };
  return (
    <div>
      <Doughnut
        data={dataCircle}
      />
    </div>
  );
}

export default CircleChat;
