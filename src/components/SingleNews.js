import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const SingleNews = (props) => {
    return (
        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4'>
            <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
            >
                <div className="card w-96 h-[30rem] bg-base-100 shadow-xl">
                    <figure><img src={props.banner_img} alt="Shoes" /></figure>
                    <div className="card-body text-[#6ede8a]">
                        <h2 className="card-title text-[#6ede8a]">{props.authors}</h2>
                        <p className='text-[#6ede8a]'>{props.title}</p>
                        <div className="card-actions justify-end">
                            <a href={props.url}>

                                <button className="btn bg-black text-[#6ede8a]">Read More</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default SingleNews;
