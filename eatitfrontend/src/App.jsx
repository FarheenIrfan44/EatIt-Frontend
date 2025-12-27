// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import NavigationBar from "./components/Navigation/NavigationBar";
import HeroSection from './components/HeroSection/HeroSection';
import JoinNetwork from './components/JoinNetwork/JoinNetwork';
import ExploreCategories from './components/ExploreCategories/ExploreCategories';
import Location from './components/Location/Location';
import Testimonials from './components/Testimonials/Testimonials';
import Stories from './components/Stories/Stories';


function App() {
  return (
    <>
    <NavigationBar />
    <HeroSection />
    <JoinNetwork/>
    <ExploreCategories />
    <Location />
    <Testimonials />
    <Stories/>
    </>

  );
}


 export default App
