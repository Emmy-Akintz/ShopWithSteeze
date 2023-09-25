import { HiOutlineShoppingCart, HiOutlineUser, HiOutlineHeart } from 'react-icons/hi2'

export default function DesktopNav() {
    return (
        <div className="py-4 px-10 grid grid-cols-3 place-content-center">
            <div className='flex items-center justify-start'>
                <nav className="flex items-center gap-4 lg:gap-10">
                    <button>Home</button>
                    <button>Shop</button>
                    <button>About</button>
                    <button>Contact</button>
                </nav>
            </div>
            <div className='flex items-center justify-center'>
                <img 
                    src='BlackLogo.svg'
                    className='w-[50%] flex items-center'
                />
            </div>
            <div className='flex items-center justify-end gap-6 text-[1.5rem]'>
                <i><HiOutlineHeart /></i>
                <i><HiOutlineUser /></i>
                <div className='flex items-center'>
                    <i><HiOutlineShoppingCart /></i>
                    <span className='text-base'>(0)</span>
                </div>
            </div>
        </div>
    )
}
