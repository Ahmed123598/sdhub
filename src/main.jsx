import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Aboutus from './Aboutus.jsx';
import Courses from './Courses.jsx';
import RegistrationForm from './RegistrationForm.jsx'; // ✅ Fix: uppercase F
import Home from './Home.jsx';
import Contactus from './Contactus.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/registrationform" element={<RegistrationForm />} /> {/* ✅ Fix */}
        <Route path='/contactus' element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
