import Navbar from "../NavbarComponents/Navbar";
import { useGeneralAppContext } from "../../functions/useGeneralAppContext";
import Footer from "../Footer";
import ContactHeader from "./ContactHeader";
import { useEffect } from "react";
import ContactBody from "./ContactBody";

export default function Contact() {

    const { showCart, showMenu, showLogin, showSignup, showAccount } = useGeneralAppContext()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={`${showCart || showMenu || showLogin || showSignup || showAccount ? 'darkBackground h-screen overflow-y-hidden' : ''} transition-all duration-300`}>
            <Navbar />
            <ContactHeader />
            <ContactBody />
            <Footer />
        </div>
    )
}
