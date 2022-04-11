import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AuthForm from "./pages/AuthForm"
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
        <Route path="/profile" element={<Profile />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/authform" element={<AuthForm />} /> 
    </Routes>
    <Header />
    </div>
    <Footer />
</Router>;

export default App;
