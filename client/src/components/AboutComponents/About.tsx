import { useGeneralAppContext } from "../../functions/useGeneralAppContext";
import Footer from "../Footer";
import Testimonials from "../HomeComponents/Testimonials";
import Navbar from "../NavbarComponents/Navbar";
import AboutBody from "./AboutBody";
import AboutHeader from "./AboutHeader";

export default function About() {

    const { showCart, showMenu } = useGeneralAppContext()

    return (
        <div className={`${showCart || showMenu ? 'darkBackground h-screen overflow-y-hidden' : ''} transition-all duration-300`}>
            <Navbar />
            <AboutHeader />
            <AboutBody />
            <Testimonials />
            <Footer />
        </div>
    )
}
