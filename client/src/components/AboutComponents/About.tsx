import { useEffect } from "react";
import { useGeneralAppContext } from "../../functions/useGeneralAppContext";
import Footer from "../Footer";
import Testimonials from "../HomeComponents/Testimonials";
import Navbar from "../NavbarComponents/Navbar";
import AboutBody from "./AboutBody";
import AboutHeader from "./AboutHeader";

export default function About() {

    const { showCart, showMenu, showLogin, showSignup, showAccount } = useGeneralAppContext()

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div className={`${showCart || showMenu || showLogin || showSignup || showAccount ? 'darkBackground h-screen overflow-y-hidden' : ''} transition-all duration-300`}>
            <Navbar />
            <AboutHeader />
            <AboutBody />
            <Testimonials />
            <Footer />
        </div>
    )
}
