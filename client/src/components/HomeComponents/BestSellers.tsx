import axios from "axios"
import { useQuery } from "react-query"
import { itemType } from "../../types/generalAppType"
import Loader from "../Loader"
import { HiOutlineShoppingCart, HiOutlineHeart } from 'react-icons/hi2'

export default function BestSellers() {

    const featuredItemsUrl = 'http://localhost:3000/item/featureditems/'
    async function fetchFeaturedItems(){
        const response = await axios.get(featuredItemsUrl)
        return response.data as itemType[]
    }

    const { data, isLoading, error } = useQuery('featuredItems', fetchFeaturedItems)

    console.log(data)
    const serverUrl = 'http://localhost:3000/'

    return (
        <section className="px-8 md:px-10 lg:px-20 mt-[80px] flex flex-col gap-8">
            <h2 className="text-center font-Lora text-[1.5rem]">Best Selling</h2>
            { isLoading ? <div className="flex items-center justify-center"><Loader /></div>
                : error ? <h1 className="md:hidden flex">There was an error</h1>
                :  <div className="flex overflow-x-scroll scrollbarHidden lg:grid lg:grid-cols-5 gap-2">
                    {data?.map((item, index)=>{

                        return (
                            <div key={index} className="min-w-[250px] lg:min-w-[150px] relative flex items-start md:items-center flex-col gap-2">
                                <div className="min-h-[250px] flex flex-col gap-3 bg-[#f4f5fd] p-3">
                                    <div className="flex justify-end">
                                        <div className="flex flex-col gap-3">
                                            <i
                                                className="cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in text-[1.5rem] p-2 bg-white rounded-full shadow-md"
                                            ><HiOutlineShoppingCart /></i>
                                            <i
                                                className="hidden md:block cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in text-[1.5rem] p-2 bg-white rounded-full shadow-lg"
                                            ><HiOutlineHeart /></i>
                                        </div>
                                    </div>
                                    <img 
                                        src={`${serverUrl}${item.image}`}
                                        className="w-full h-[200px] object-contain md:hover:scale-110 transition-all duration-300 ease-in"
                                    />
                                </div>
                                <h3 className="text-[1.2rem] md:text-[1.4rem] text-[#808080]">{item.name}</h3>
                                <h4 className="text-black font-bold text-[1.3rem]"><span className="font-normal text-base">NGN </span>{item.price}</h4>
                            </div>
                        )
                    })}
                    </div>
                }
                <div className="flex items-centere justify-start md:justify-center">
                    <button 
                        className="py-3 px-12 tracking-wider border-[1px] border-black bg-black text-white md:hover:bg-white md:hover:text-black transition-all duration-200 ease-in"
                    >
                        VIEW ALL
                    </button>
                </div>
        </section>
    )
}