import { useEffect } from "react";
import Header from "./components/header"
import Footer from "./components/footer"
import Profile from "./components/profile";
import Portfolio from "./components/portfolio";
import Banner from "./components/banner"
import Navigation from "./components/navigation"

import AOS from "aos"
import "aos/dist/aos.css"


function App() {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
    <div>
        <Header />
        <Banner/>
        <Profile />
        <Portfolio />
        <Navigation />
        <Footer />
    </div>
    );
}

export default App
