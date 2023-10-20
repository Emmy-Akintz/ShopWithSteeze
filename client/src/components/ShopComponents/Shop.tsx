import { useGeneralAppContext } from "../../functions/useGeneralAppContext";
import Navbar from "../NavbarComponents/Navbar";
import { useEffect } from "react";
import StoreItems from "./StoreItems";
import Footer from "../Footer";
import ShopHeader from "./ShopHeader";

export default function Shop() {

    const { showCart, showMenu, showFilters, showLogin, showSignup } = useGeneralAppContext()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={`${showCart || showMenu || showFilters || showLogin || showSignup ? 'darkBackground h-screen overflow-y-hidden' : ''} transition-all duration- flex flex-col justify-between min-h-screen`}>
            <Navbar />
            <ShopHeader />
            <StoreItems />
            <Footer />
        </div>
    )
}
