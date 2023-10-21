import { HiOutlineShoppingCart, HiOutlineUser, HiOutlineHeart } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { useGeneralAppContext } from '../../functions/useGeneralAppContext'
import { useRef } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'

export default function DesktopNav() {

    const { showFilters, currentUser } = useGeneralAppContext()
    const cartref = useRef<HTMLDivElement | null>(null)
    const { generalAppDispatch, showCart, showLogin, showSignup, showAccount } = useGeneralAppContext()

    function closeCart() {
        generalAppDispatch({
            type: 'closeCart'
        })
    }

    function openCart() {
        generalAppDispatch({
            type: 'openCart'
        })
    }

    function openAuth() {
        if (currentUser) {
            generalAppDispatch({
                type: 'setShowAccount',
                payload: {
                    showAccountPayload: true
                }
            })
        } else {
            generalAppDispatch({
                type: 'setShowLogin',
                payload: {
                    showLoginPayload: true
                }
            })
        }
    }


    return (
        <div className={`z-[999] ${showFilters || showCart || showLogin || showSignup || showAccount ? 'bg-black/0' : 'bg-white'} py-4 px-10 lg:px-20 grid grid-cols-3 place-content-center shadow-md`}>
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
                    src='/BlackLogo.svg'
                    className='w-[50%] flex items-center'
                />
            </div>
            <div className='flex items-center justify-end gap-6 text-[1.5rem]'>
                <i className='cursor-pointer'><HiOutlineHeart /></i>
                <i onClick={openAuth} className='cursor-pointer'><HiOutlineUser /></i>
                <div className='flex items-center cursor-pointer' onClick={openCart}>
                    <i><HiOutlineShoppingCart /></i>
                    <span className='text-base'>(0)</span>
                </div>
            </div>
            <div
                className={`w-[350px] bg-white py-6 px-4  h-screen absolute top-0 transition-all duration-200 ease-in ${showCart ? 'right-0 opacity-100' : 'left-[-280px] opacity-0'}`}
                ref={cartref}
            >
                <div className='flex items-center justify-between border-b-[1px] border-[#808080] py-4'>
                    <p>{`Cart(0)`}</p>
                    <button
                        className='bg-white p-2 rounded-full shadow-lg text-[1.2rem]'
                        onClick={(e) => {
                            e.stopPropagation;
                            closeCart()
                        }}
                    >
                        <LiaTimesSolid />
                    </button>
                </div>
                <div className='mt-6'>
                    <p className='text-center'>No products in the cart</p>
                </div>
            </div>
        </div>
    )
}
