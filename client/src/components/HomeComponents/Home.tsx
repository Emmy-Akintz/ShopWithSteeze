import { useGeneralAppContext } from "../../functions/useGeneralAppContext";
import Footer from "../Footer";
import Navbar from "../NavbarComponents/Navbar";
import BestSellers from "./BestSellers";
import HomeHeader from "./HomeHeader";
import Testimonials from "./Testimonials";
import { useEffect } from 'react'

export default function Home() {

    const {showCart, showMenu, showLogin, showSignup} = useGeneralAppContext()

    useEffect(() => {
       window.scrollTo(0,0) 
    }, [])
    
    return (
        <div className={`${showCart || showMenu || showLogin || showSignup ? 'darkBackground' : ''} transition-all duration-300`}>
            <Navbar />
            <HomeHeader/>
            <BestSellers />
            <Testimonials />
            <Footer />
        </div>
    )
}
