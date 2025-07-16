import React from 'react'

function Block() {
  return (
    <div>

<section className="text-gray-600 body-font">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Empowering Individuals
      </h1>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-600">
      To Build Careers
      </h1>
      
      <p className="mb-8 leading-relaxed">
      Our ultimate goal is to equip individuals not only in core domain skills but also softskills and language training to thrive in the competitive job market.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact Us
        </button>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="block2.jpg"
      />
    </div>
  </div>
</section>




    </div>
  )
}

export default Block