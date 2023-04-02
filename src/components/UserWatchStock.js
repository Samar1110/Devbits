import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const UserWatchStock = (props) => {

  const navigate = useNavigate()
  // console.log("Done")
  console.log(props)

  var user_email = window.sessionStorage.getItem('registered_email');
  const [stock, userStock] = useState({
    name: props.stock.name,
    price: props.stock.market_data.current_price.inr,
    image: props.stock.image.small,
    price_change: props.stock.market_data.price_change_24h_in_currency.inr,

  })
  var posath
  if (stock.price_change >= 0) {
    posath = true
  }
  else {
    posath = false
  }
  console.log(stock)


  const handleClick = (e) => {
    // e.preventDefault()

    // if (
    //   registerFieldsAreValid(firstName, lastName, email, username, password)
    // ) {
    //   console.log('Please wait...')

    const dataForApiRequest = {
      stock_user_email: user_email,
      stock_name: e.toLowerCase(),
    }

    axios.delete(
      'https://itachi7.pythonanywhere.com/auth/watchlist/', { data: { params: dataForApiRequest } }
    )
      .then(function ({ data, status }) {
        console.log(data);
        toast.success('Deleted Succesfully', {
          theme: 'dark',
          position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
          autoClose: 1200
        });
        navigate('/watchlist')
      })
      .catch(function (error) {
        console.log("Hello1");
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });

    window.location.reload(false);
  }


  return (
    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4'>
      {/* <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
            > */}
      <ToastContainer />
      <div className="card w-96 h-72 bg-white shadow-xl">
        <div className="card-body">
          <div className="flex justify-start">
            <div className="avatar">
              <div className="w-14 rounded-xl mr-2">
                <img src={stock.image} />
              </div>
            </div>
            <h2 className="card-title text-black text-xl">{stock.name}</h2>
          </div>

          <p className="text-black text-lg">Current Price : ₹ {stock.price}</p>
          <p className="text-black text-lg">Price Change : {posath ? <div class="text-lg text-[#38b000]">Price change % in 24h : 📈 {stock.price_change}</div> : <div class="text-lg text-[#e5383b]">Price change % in 24h : 📉 {stock.price_change}</div>}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-sm" onClick={() => { handleClick(stock.name) }}>Remove from Watchlist</button>
          </div>
        </div>
      </div>
      {/* </div> */}


    </div>
  );
}

export default UserWatchStock;
