import useWindowDimensions from "../../windowDimensions"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

export default function Navbar() {

    const {width} = useWindowDimensions()

    return (
        <div className="sticky top-0 bg-white z-[999999]">
            {width >=768 ? <DesktopNav /> : <MobileNav />}
        </div>
    )
}
