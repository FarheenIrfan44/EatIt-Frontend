// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import NavigationBar from "./components/Navigation/NavigationBar";
import HeroSection from './components/HeroSection/HeroSection';
import JoinNetwork from './components/JoinNetwork/JoinNetwork';

// App.js (Option 2: Standard Function Declaration)
function App() {
  return (
    <>
    <NavigationBar />
    <HeroSection />
    <JoinNetwork/>

    </>

  );
}


 export default App
