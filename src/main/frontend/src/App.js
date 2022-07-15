import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GoogleButton from './components/GoogleButton';
import Main from './pages/Main';
import Head from './components/Head';
import Banner from './components/Banner';


function App() {
  // const [hello, setHello] = useState('')

  // useEffect(() => {
  //   axios.get('http://localhost:8080/api/hello')
  //     .then(response => setHello(response.data))
  //     .catch(error => console.log(error))
  // }, []);


  return (
    <div className="App">
      <Head />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
