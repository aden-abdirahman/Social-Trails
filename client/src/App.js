import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AuthForm from "./pages/AuthForm"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Travel from "./pages/Travel"
import Header from "./Components/Header"
import Footer from "./Components/Footer"


const App = () => 

<Router>
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Travel" element={<Travel />} />
        <Route path="/AuthForm" element={<AuthForm />} />  
        <Route path="/Signup" element={<Signup />} />  
    </Routes>
    <Header />
    </div>
    <Footer />
</Router>

export default App;
