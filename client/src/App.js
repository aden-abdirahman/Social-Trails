<<<<<<< HEAD
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SingleTrail from './pages/SingleTrail';
import SingleTrip from './pages/SingleTrip';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import TrailList from './components/TrailList';
import Trails from './pages/Trails';
import Trips from './pages/Trips';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/"
                element={<Home />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
              {/* <Route 
                path="/me" 
                element={<Profile />}
              />
              <Route 
                path="/profiles/:username" 
                element={<Profile />}
              /> */}
              <Route 
                path="/trails/:trailId" 
                element={<SingleTrail />}
              />
              <Route 
                path="/trails" 
                element={<Trails />}
              />
              <Route 
                path="/trips/:tripId" 
                element={<SingleTrip />}
              />
              <Route 
                path="/trips" 
                element={<Trips />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}
=======
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
>>>>>>> 210c280df76c7a092c7a47fcb88a222e2835220f

export default App;
