
import React from "react";
import axios from "axios";

import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {

const [users,setUsers]=useState([])
  
useEffect(() => {
  loadUsers();
  
},[]);

const loadUsers=async()=>{
  const result=await axios.get("http://localhost:8080/users")
  console.log(result.data);
};

  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
           
       
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;