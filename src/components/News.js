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
            {/* <div className='flex justify-center'> */}
                {/* <form class="w-full max-w-sm flex justify-center">
                <div class="flex items-center border-b border-teal-500 py-2">
                    <input value={newsData} onChange={(e) => setNewsData(e.target.value)} class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search News for the crypto" aria-label="Full name" />
                    <button onClick={search} class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                        Search
                    </button>
                </div>
            </form> */}
            {/* </div> */}

            <div class="p-4 w-full bg-black">
                <div class="grid grid-cols-12 gap-3">
                    {/* <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4"> */}
                    
                        {newsData.map((news) => (
                            <SingleNews url={news.url} authors={news.authors} title={news.title} banner_img={news.banner_image} />
                            // <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            //     <a href="#">
                            //         <img class="rounded-t-lg" src={news.url} alt="" />
                            //     </a>
                            //     <div class="p-5">
                            //         <a href="#">
                            //             <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{news.title}</h5>
                            //         </a>
                            //         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            //         <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            //             Read more
                            //             <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            //         </a>
                            //     </div>
                            // </div>
                        ))}
                    {/* </div> */}

                </div>
            </div>
        </div>
    );
}

export default News;
