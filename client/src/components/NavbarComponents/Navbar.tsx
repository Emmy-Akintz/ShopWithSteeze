import axios from "axios"
import useWindowDimensions from "../../windowDimensions"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import { cartType } from "../../types/generalAppType"
import { useQuery } from "react-query"
import { useGeneralAppContext } from '../../functions/useGeneralAppContext'

export default function Navbar() {

    const { width } = useWindowDimensions()
    const { currentUser } = useGeneralAppContext()

    const cartItemsUrl = `${import.meta.env.VITE_SERVER_URL}cart/getCartItems/${currentUser?.uid}`
    async function fetchcartItems() {
        const response = await axios.get(cartItemsUrl)
        return response.data as cartType[]
    }

    const { data } = useQuery('cart', fetchcartItems)

    return (
        <div className="sticky top-0 z-[9999]">
            {width >= 768 ? <DesktopNav cartItems={data} /> : <MobileNav cartItems={data} />}
        </div>
    )
}
