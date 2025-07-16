import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Aboutus() {
  return (
    <div className="">
      <Navbar />
      
<      div class="full h-80 bg-linear-to-r from-sky-200 to-sky-50">
        <h1 className="w-full pt-30 pl-20 text-3xl font-bold  flex justify-start">
          About us{" "}
        </h1>
        <div class="pl-20 elementor-background-overlay">
          <h2 className="flex justify-start "> Home-About us</h2>
        </div>
      </div>

      <section className="text-gray-600 body-font">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="aboutus1.jpg"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Dedicated to Your Success
       
      </h1>
      <p className="mb-8 leading-relaxed">
      Welcome to Skills Development Hub, your premier destination for free job-oriented technology training programs. At Skills Development Hub, we are dedicated to empowering individuals with the skills and knowledge they need to succeed in today’s fast-paced and technology-driven world.
      
      
      
      
      </p>

      <p  className="mb-8 leading-relaxed">
      Managed by Professionals Solidarity Forum (PSF) and supported by Helping Hand Foundation (HHF), we strive to make quality education accessible to all. Our skills development centre is committed to provide high-quality, hands-on training in various technology-related fields + softskills and language skills, helping learners acquire the skills necessary to secure employment and thrive in their careers.
      </p>


<p  className="mb-8 leading-relaxed">

With a team of experienced instructors and a curriculum designed to meet industry standards, Skills Development Hub offers a dynamic learning environment where students can develop their talents and unleash their full potential. Whether you’re a beginner looking to kickstart your career in tech or a seasoned professional seeking to upgrade your skills, we have programs tailored to suit your needs.

</p>
    
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="aboutus2.png"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      MANAGED BY
        <br className="hidden lg:inline-block" />
        PSF – Professionals Solidarity Foundation  
      </h1>
      <p className="mb-8 leading-relaxed">
      
      PSF’s vision is to empower professionals to use their skills, time, and creativity to bring a positive change in self and society. Committed to addressing the needs of seasoned professionals and fresh graduates alike, PSF offers top-tier, industry-specific training and comprehensive job and career guidance. Our mission is to support professionals in achieving excellence not only in their careers but also in their personal well-being, fostering a community where growth and positive impact are paramount.
      
      
      </p>

</div>


</div>
</section>


    <Footer/>
    </div>
  );
}

export default Aboutus;
