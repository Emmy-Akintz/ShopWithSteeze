import { HiOutlineShoppingCart, HiOutlineUser, HiOutlineHeart } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { useGeneralAppContext } from '../../functions/useGeneralAppContext'

export default function DesktopNav() {

    const { showFilters } = useGeneralAppContext()

    return (
        <div className={`z-[999] ${showFilters ? 'bg-black/0' : 'bg-white'} py-4 px-10 lg:px-20 grid grid-cols-3 place-content-center shadow-md`}>
            <div className='flex items-center justify-start'>
                <nav className="flex items-center gap-4 lg:gap-10">
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
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
