import { LiaTimesSolid } from 'react-icons/lia'
import { useGeneralAppContext } from '../../functions/useGeneralAppContext'
import { useQuery } from 'react-query'
import axios from 'axios'
import { cartType } from '../../types/generalAppType'
import Loader from '../Loader'

export default function CartUI() {

    const { generalAppDispatch, currentUser } = useGeneralAppContext()

    function closeCart() {
        generalAppDispatch({
            type: 'closeCart'
        })
    }

    const cartItemsUrl = `${import.meta.env.VITE_SERVER_URL}cart/getCartItems/${currentUser?.uid}`
    async function fetchcartItems() {
        const response = await axios.get(cartItemsUrl)
        return response.data as cartType[]
    }

    const { data, isLoading, error } = useQuery('cart', fetchcartItems)

    return (
        <>
            <div className='flex items-center justify-between border-b-[1px] border-[#808080] py-4'>
                <p>{`Cart(${data?.length})`}</p>
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
            {
                isLoading ? <Loader />
                    : error ? <p>There was am error loading your cart</p>
                        :
                        data !== undefined ?
                            <div className='mt-4 flex flex-col gap-4'>
                                {data?.map(cartItem => {
                                    return (
                                        <div key={cartItem.id} className='flex flex-col md:flex-row justify-start gap-3'>
                                            <div className='w-[150px] bg-[#f4f5fd]'>
                                                <img
                                                    src={`${import.meta.env.VITE_SERVER_URL}${cartItem.image}`}
                                                />
                                            </div>
                                            <div className='flex flex-col md:py-3 justify-between gap-2 font-semibold'>
                                                <p>{cartItem.name}</p>
                                                <p>{`NGN ${cartItem.price * cartItem.amount}`}</p>
                                                <p>{`Quantity: ${cartItem.amount}`}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div> :
                            <div className='mt-6'>
                                <p className='text-center'>No products in the cart</p>
                            </div>
            }
            <div className='flex flex-col w-full gap-4 mt-4 '>
                <button className="w-full border-orange-500 border-[1px] text-orange-500 hover:text-white hover:bg-orange-500 py-3 font-semibold tracking-wide transition-all duration-300 ease-in">BUY NOW</button>
                <button className="bg-black flex-[0.75] w-full text-white font-semibold text-[1.1rem] py-3 border-black border-[1px] md:hover:text-black md:hover:bg-white transition-all duration-300 ease-in cursor-pointer">CLEAR CART</button>
            </div>
        </>
    )
}