"use client";
// React ve kompanentleri içe aktarıyoruz
import React from 'react';
import Navbar from "../Components/Navbar.js"; 
import HomeFirstPart from "../Components/HomeFirstPart.js";
import HomeSecondPart from "../Components/HomeSecondPart.js"; 
import HomeThirdPart from "../Components/HomeThirdPart.js"; 


export default function Home() {
  return (
   
    <main id='main'>
      
      <Navbar /> 
      <HomeFirstPart /> 
      <HomeSecondPart /> 
      <HomeThirdPart /> 
    </main>
  );
}
