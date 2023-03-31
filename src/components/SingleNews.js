import React from 'react';

const SingleNews = (props) => {
    return (
        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4'>
            {/* <a href="#" class="group relative block bg-black">
  <img
    alt="Developer"
    src={props.banner_img}
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-4 sm:p-6 lg:p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
    {props.authors}
    </p>

    <p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

    <div class="mt-32 sm:mt-48 lg:mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
           {props.title}
        </p>
        <a href={props.url} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  </div>
</a> */}
<div className="card w-96 bg-base-100 shadow-xl">
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
{/* <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={props.banner_img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{props.authors}</h2>
    <p>{props.title}</p>
    <div className="card-actions">
        <a href={props.url}>
      <button className="btn btn-primary">Read More</button>
        </a>
    </div>
  </div>
</div> */}

            {/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src={props.banner_img} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.authors}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.title}</p>
                    <a href={props.url} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div> */}
        </div>
    );
}

export default SingleNews;
