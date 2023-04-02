import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyNav from './Navbar';
import SingleNews from './SingleNews';


const News = () => {
    const [newsData, setNewsData] = useState([]);
    const [searchNews, setSearchNewsData] = useState("AAPL")
    const options = {
        method: 'GET',
        url: "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=earnings&time_from=20220410T0130&limit=10&apikey=4NMQKSEO4AMOFYK0",
    };

    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data);
            setNewsData((response.data.feed));
            // console.log(value);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);


    return (
        <div>
            <MyNav />

            <div class="p-4 w-full bg-black">
                <div class="grid grid-cols-12 gap-3">

                    {newsData.map((news) => (
                        <SingleNews url={news.url} authors={news.authors} title={news.title} banner_img={news.banner_image} />
                    ))}

                </div>
            </div>
        </div>
    );
}

export default News;
