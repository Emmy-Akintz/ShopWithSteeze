import { HiOutlineShoppingCart, HiOutlineUser, HiOutlineHeart } from 'react-icons/hi2'

export default function DesktopNav() {
    return (
        <div className="py-4 px-6 grid grid-cols-3 place-content-center">
            <div className='flex items-center justify-start'>
                <div className="flex items-center gap-10">
                    <p>Home</p>
                    <p>Shop</p>
                    <p>About us</p>
                    <p>Contact us</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img 
                    src='BlackLogo.svg'
                    className='w-[50%] flex items-center'
                />
            </div>
            <div className='flex items-center justify-end gap-3 text-[1.5rem]'>
                <i><HiOutlineHeart /></i>
                <i><HiOutlineUser /></i>
                <i><HiOutlineShoppingCart /></i>
            </div>
        </div>
    )
}
