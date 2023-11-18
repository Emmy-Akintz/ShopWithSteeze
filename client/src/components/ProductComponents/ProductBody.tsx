import axios from "axios"
import { itemType } from "../../types/generalAppType"
import { useQuery, useQueryClient } from "react-query"
import Loader from "../Loader"
import { useEffect, useState } from "react"
import { BsStar, BsHeart, BsPlus } from 'react-icons/bs'
import { AiOutlineMinus } from 'react-icons/ai'
import { useGeneralAppContext } from "../../functions/useGeneralAppContext"

export default function ProductBody({ id }: { id: string }) {

    const [loading, setLoading] = useState(false)
    const featuredItemsUrl = `${import.meta.env.VITE_SERVER_URL}item/storeitems/${id}`

    async function fetchFeaturedItems() {
        setLoading(true)
        try {

            const response = await axios.get(featuredItemsUrl)
            return response.data as itemType
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const queryClient = useQueryClient();

    const { currentUser, generalAppDispatch } = useGeneralAppContext()

    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { data, error } = useQuery('item', fetchFeaturedItems)

    async function addToCart() {
        if (currentUser === null) {
            generalAppDispatch({
                type: 'setShowLogin',
                payload: {
                    showLoginPayload: true
                }
            })
        } else {
            try {
                await axios.post(`${import.meta.env.VITE_SERVER_URL}cart/createCartItem/${currentUser.uid}`, {
                    ...data,
                    amount: quantity
                })

                generalAppDispatch({
                    type: 'openCart'
                })
                queryClient.refetchQueries('cart')
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <section className="px-4 md:px-10 lg:px-20 py-8 flex flex-col flex-grow">
            {loading ? (
                <div className=" flex-grow flex items-center justify-center">
                    <Loader />
                </div>
            ) : error ? (
                <h1 className="md:hidden flex">There was an error</h1>
            ) : (
                <div>
                    <p className="font-semibold">{`Home - ${data?.name}`}</p>
                    <div className="flex flex-col md:grid md:grid-cols-2 mt-4 gap-6 lg:gap-16">
                        <div className="bg-[#f4f5fd] h-full max-w-full">
                            <img
                                className="w-full h-full object-contain"
                                src={`${import.meta.env.VITE_SERVER_URL}${data?.image}`}
                            />
                        </div>
                        <div className="flex flex-col justify-between gap-6">
                            <h2 className="text-[1.5rem] font-semibold">{data?.name}</h2>
                            <div className="flex items-center gap-3">
                                <div className="flex gap-3">
                                    <i><BsStar /></i>
                                    <i><BsStar /></i>
                                    <i><BsStar /></i>
                                    <i><BsStar /></i>
                                    <i><BsStar /></i>
                                </div>
                                <p>No reviews</p>
                            </div>
                            <h3 className="text-[1.5rem] font-semibold text-orange-500">{`NGN ${data?.price}`}</h3>
                            <p className="text-[1.1rem] leading-8 tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem accusantium provident blanditiis ipsa voluptate, ex suscipit iure dicta nesciunt quia magnam facilis tempore quo quos facere saepe commodi animi?</p>
                            <p className="font-semibold text-[1.1rem]">Size : <span className="font-normal">{data?.size}</span></p>
                            <div>
                                <h3 className="tracking-wide text-[1.1rem]">Quantity</h3>
                                <div className="flex flex-col gap-3 mt-2">
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <div className="flex items-center flex-[0.5] py-3 px-3 justify-between border-black text-[1.1rem] font-semibold border-[1px]">
                                            <i
                                                onClick={() => {
                                                    setQuantity(prevQuantity => {
                                                        if (prevQuantity - 1 === 0) {
                                                            return 1
                                                        } else {

                                                            return prevQuantity = prevQuantity - 1
                                                        }
                                                    })
                                                }}
                                            >
                                                <AiOutlineMinus />
                                            </i>
                                            <p className="">{quantity}</p>
                                            <i
                                                onClick={() => {
                                                    setQuantity(prevQuantity => {
                                                        return prevQuantity = prevQuantity + 1
                                                    })
                                                }}
                                            >
                                                <BsPlus />
                                            </i>
                                        </div>
                                        <div className="flex-1 flex gap-3">
                                            <button
                                                onClick={() => addToCart()}
                                                className="bg-black flex-[0.75] w-full text-white font-semibold text-[1.1rem] py-3 border-black border-[1px] md:hover:text-black md:hover:bg-white transition-all duration-300 ease-in cursor-pointer"
                                            >
                                                ADD TO CART
                                            </button>

                                            <i className="bg-black flex-[0.25] flex items-center justify-center w-full text-white font-semibold text-[1.1rem] py-3 border-black border-[1px] md:hover:text-black md:hover:bg-white transition-all duration-300 ease-in cursor-pointer">
                                                <BsHeart />
                                            </i>
                                        </div>
                                    </div>
                                    <button className="w-full border-orange-500 border-[1px] text-orange-500 hover:text-white hover:bg-orange-500 py-3 font-semibold tracking-wide transition-all duration-300 ease-in">BUY IT NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </section>
    )
}
