import Navbar from "../NavbarComponents/Navbar";
import { useGeneralAppContext } from "../../functions/useGeneralAppContext";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import ProductBody from "./ProductBody";

export default function Products() {

    const { showCart, showMenu, showLogin, showSignup, showAccount } = useGeneralAppContext()

    const { id } = useParams()

    return (
        <div className={`${showCart || showMenu || showLogin || showSignup || showAccount ? 'darkBackground' : ''} transition-all duration-300`}>
            <Navbar />
            {id && <ProductBody id={id} />}
            <Footer />
        </div>
    )
}
