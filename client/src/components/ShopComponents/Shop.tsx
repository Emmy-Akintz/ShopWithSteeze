import { useGeneralAppContext } from "../../functions/useGeneralAppContext";
import Navbar from "../NavbarComponents/Navbar";

export default function Shop() {

    const {showCart, showMenu} = useGeneralAppContext()

    return (
        <div className={`${showCart || showMenu ? 'darkBackground' : ''} transition-all duration-300`}>
            <Navbar />
            <div>Shop</div>
        </div>
    )
}
