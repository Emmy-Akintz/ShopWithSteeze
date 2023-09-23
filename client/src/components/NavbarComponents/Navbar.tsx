import useWindowDimensions from "../../windowDimensions"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

export default function Navbar() {

    const {width} = useWindowDimensions()

    return (
        <>
            {width >=768 ? <DesktopNav /> : <MobileNav />}
        </>
    )
}
