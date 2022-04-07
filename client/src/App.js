import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AuthForm from "./pages/AuthForm"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import TrailData from "./pages/TrailData"
import TrailPosts from "./pages/TrailPosts"
import Travel from "./pages/Travel"
import Header from "./Components/Header"
const App = () => <Router>
    <div>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/traildata" element={<TrailData />} />
        <Route path="/trailposts" element={<TrailPosts />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/authform" element={<AuthForm />} />
    </Routes>
    </div>
</Router>;

export default App;
