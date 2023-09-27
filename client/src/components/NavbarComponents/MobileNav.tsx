import { HiOutlineShoppingCart, HiOutlineBars3BottomLeft, HiOutlineUser, HiChevronRight } from 'react-icons/hi2'
import { LiaTimesSolid } from 'react-icons/lia'
import {  useRef, useEffect } from 'react'
import { useGeneralAppContext } from '../../functions/useGeneralAppContext'
import { Link } from 'react-router-dom'

export default function MobileNav() {

    const {showMenu, showCart, generalAppDispatch} = useGeneralAppContext()
    const menuref = useRef<HTMLDivElement>(null)
    const cartref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            event.stopPropagation()
            if (menuref.current && !menuref.current.contains(event.target as Node)) {
                generalAppDispatch({
                    type: 'closeMenu'
                })
            }
        }

        window.addEventListener("click", handleClickOutside);
        return () => {
        window.removeEventListener("click", handleClickOutside);
        };
    }, [menuref, generalAppDispatch]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            event.stopPropagation()
            if (cartref.current && !cartref.current.contains(event.target as Node)) {
                generalAppDispatch({
                    type: 'closeCart'
                })
            }
        }

        window.addEventListener("click", handleClickOutside);
        return () => {
        window.removeEventListener("click", handleClickOutside);
        };
    }, [cartref, generalAppDispatch]);

    function openMenu(){
        generalAppDispatch({
            type: 'openMenu'
        })
    }

    function closeMenu(){
        generalAppDispatch({
            type: 'closeMenu'
        })
    }

    function openCart(){
        generalAppDispatch({
            type: 'openCart'
        })
    }

    
    function closeCart(){
        generalAppDispatch({
            type: 'closeCart'
        })
    }

    return (
        <div className={`flex relative`}>
            <div 
                className={`w-[250px] bg-white py-6 px-4 h-screen absolute transition-all duration-300 ease-in flex flex-col justify-between ${showMenu ? 'left-0' : ' left-[-250px]'}`}
                ref={menuref}
            >
                <div className='flex flex-col gap-6 '>
                    <div className='flex justify-end'>
                        <button 
                            className='bg-white p-2 rounded-full shadow-lg text-[1.2rem]' 
                            onClick={(e)=>{
                                e.stopPropagation; 
                                closeMenu()
                            }}
                        >
                            <LiaTimesSolid />
                        </button>
                    </div>
                    <nav className='flex flex-col gap-6'>
                        <Link to='/'>
                            <div className='flex items-center justify-between border-b-[1px] border-[#808080] py-2'>
                                <p>Home</p>
                                <i><HiChevronRight /></i>
                            </div>
                        </Link>
                        <Link to='/shop'>
                            <div className='flex items-center justify-between border-b-[1px] border-[#808080] py-2'>
                                <p>Shop</p>
                                <i><HiChevronRight /></i>
                            </div>
                        </Link>
                        <Link to='/'>
                            <div className='flex items-center justify-between border-b-[1px] border-[#808080] py-2'>
                                <p>About us</p>
                                <i><HiChevronRight /></i>
                            </div>
                        </Link>
                        <Link to='/'>
                            <div className='flex items-center justify-between border-b-[1px] border-[#808080] py-2'>
                                <p>Contact us</p>
                                <i><HiChevronRight /></i>
                            </div>
                        </Link>
                        <Link to='/'>
                            <div className='flex items-center justify-between border-b-[1px] border-[#808080] py-2'>
                                <p>Wishlist</p>
                                <i><HiChevronRight /></i>
                            </div>
                        </Link>
                    </nav>
                </div>
                <button 
                    className='flex items-center gap-3 p-2 border-[1px] border-[#808080] justify-center'
                >
                    <i><HiOutlineUser /></i>
                    <p>Login or Register</p>
                </button>
            </div>
            <div className={`flex justify-between items-center p-4 w-full shadow-md ${showCart || showMenu ? 'bg-black/0' : ' bg-white '}`}>
                <i 
                    className='text-[1.5rem] text-[#000000]'
                    onClick={(e)=>{
                        e.stopPropagation()
                        if(showCart){
                            return
                        } else openMenu()
                    }}
                >
                    <HiOutlineBars3BottomLeft />
                </i>
                <img 
                    src='BlackLogo.svg'
                    className='w-[30%]'
                />
                <div className='flex items-center gap-1'>
                    <i 
                        className='text-[1.5rem] text-[#000000]'
                        onClick={(e)=>{
                            e.stopPropagation()
                            if(showMenu){
                                return
                            }else openCart()
                        }}
                    >
                        <HiOutlineShoppingCart />
                    </i>
                    <p className='text-base'>(0)</p>
                </div>
            </div>
            <div 
                className={`w-[280px] bg-white py-6 px-4  h-screen absolute transition-all duration-200 ease-in ${showCart ? 'right-0 opacity-100' : 'left-[-280px] opacity-0'}`}
                ref={cartref}
            >
                <div className='flex items-center justify-between border-b-[1px] border-[#808080] py-4'>
                    <p>{`Cart(0)`}</p>
                    <button 
                        className='bg-white p-2 rounded-full shadow-lg text-[1.2rem]' 
                        onClick={(e)=>{
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
