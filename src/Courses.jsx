import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Courses() {
  return (
    <div>
        <Navbar/>
        <div class="full h-80 bg-linear-to-r from-sky-200 to-sky-50">
        <h1 className="w-full pt-30 pl-20 text-6xl font-medium  flex justify-start">
          Courses
        </h1>
        <div class=" pt-5 pl-20 elementor-background-overlay">
          <h2 className="flex justify-start "> Home-Courses</h2>
        </div>
      </div>








        <section className="text-gray-600 body-font">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="Courses1.jpg"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      List of Courses at SD HUB
        <br className="hidden lg:inline-block" />
        
      </h1>

      <h2> • Digital Marketing + Graphic Designing</h2>
<h2>• Data Analytics</h2>
<h2>• Tally ERP</h2>
<h2>• Office Administration</h2>
<h2>• Web Designing</h2>
</div>


</div>
</section>
       
        <Footer/>
        </div>
  )
}

export default Courses