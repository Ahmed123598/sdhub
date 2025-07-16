import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function RegistrationForm() {
  return (
    <div>

<Navbar/>
<div class="full h-80 bg-linear-to-r from-sky-200 to-sky-50">
        <h1 className="w-full ml-140 pt-30 pl-20 text-3xl font-italic  flex justify-start">
                Registration form
        </h1>
       
      </div>

<div class="m-50 flex justify-center text-center">
  <a target='blank' class="border full h-full bg-linear-to-r from-sky-200 to bg-zinc-200 rounded-md p-5 font-bold text-black w-1/2" href="https://docs.google.com/forms/d/e/1FAIpQLSd0z9wffmY77WoLgFZXn5HflaBRK2g-ewm8OEzP6Hmepx9XQw/viewform">Registration Form  </a>


</div>


<Footer/>

    </div>
  )
}

export default RegistrationForm