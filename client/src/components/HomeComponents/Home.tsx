import { useGeneralAppContext } from "../../functions/useGeneralAppContext";
import Navbar from "../NavbarComponents/Navbar";
import BestSellers from "./BestSellers";
import HomeHeader from "./HomeHeader";
import Testimonials from "./Testimonials";

export default function Home() {

    const {showCart, showMenu} = useGeneralAppContext()

    return (
        <div className={`${showCart || showMenu ? 'darkBackground' : ''} transition-all duration-300`}>
            <Navbar />
            <HomeHeader/>
            <BestSellers />
            <Testimonials />
        </div>
    )
}
