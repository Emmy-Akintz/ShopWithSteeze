import { itemType } from "../../types/generalAppType";
import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../Loader";
import { GrSort } from 'react-icons/gr'
import { FaSortDown } from 'react-icons/fa'
import { useEffect, useRef, useState } from "react";
import { useGeneralAppContext } from "../../functions/useGeneralAppContext";
import CategoryItems from "./CategoryItems";

export default function StoreItems() {

    const url = 'http://localhost:3000/item/storeitems/'
    const [featuredProducts, setFeaturedProducts] = useState<itemType[]>([])

    async function fetchRecipes(){
        const response = await axios.get(url)
        setFeaturedProducts(response.data)
        return response.data as itemType[]
    }

    const filterRef = useRef<HTMLDivElement>(null)
    const { showFilters, showSorting, generalAppDispatch } = useGeneralAppContext()
    const sortingRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            event.stopPropagation()
            if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
                generalAppDispatch({
                    type: 'setShowFilters',
                    payload: {
                        showFiltersPayload: false
                    }
                })
            }
        }

        window.addEventListener("click", handleClickOutside);
        return () => {
        window.removeEventListener("click", handleClickOutside);
        };
    }, [filterRef, generalAppDispatch]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            event.stopPropagation()
            if (sortingRef.current && !sortingRef.current.contains(event.target as Node)) {
                generalAppDispatch({
                    type: 'setShowSorting',
                    payload: {
                        showSortingPayload: false
                    }
                })
            }
        }

        window.addEventListener("click", handleClickOutside);
        return () => {
        window.removeEventListener("click", handleClickOutside);
        };
    }, [sortingRef, generalAppDispatch]);

    const { data, isLoading, error } = useQuery('headerItems', fetchRecipes)
    const serverUrl = 'http://localhost:3000/'

    return (
        <section className={`px-4 md:px-10 lg:px-20 my-8`}>
            <div 
                ref={filterRef}
                className={`w-[250px] bg-white py-6 px-4 z-[99999] h-screen absolute transition-all duration-300 ease-in flex flex-col justify-between ${showFilters ? 'left-0 top-0' : ' left-[-250px]'}`}
            >
                <CategoryItems featuredProducts={featuredProducts}/>
            </div>
            <div className="flex gap-8">
                <div className="hidden lg:block w-[400px] px-4">
                    <CategoryItems featuredProducts={featuredProducts}/>
                </div>
                <div>
                <div className="relative flex justify-between items-center mb-6">
                    <i 
                        onClick={(e)=>{
                            e.stopPropagation(); 
                            generalAppDispatch({
                                type: 'setShowFilters',
                                payload: {
                                    showFiltersPayload: true
                                }
                            })
                        }} 
                        className="lg:hidden p-2 border-2 border-[#808080] text-[1.2rem]"
                    >
                        <GrSort />
                    </i>
                    <div className="hidden md:block"></div>
                        <div className="relative">
                            <button 
                                onClick={(e)=>{
                                    e.stopPropagation()
                                    if(!showSorting){
                                        generalAppDispatch({
                                            type: 'setShowSorting',
                                            payload: {
                                                showSortingPayload: true
                                            }
                                        })
                                    }else {
                                        generalAppDispatch({
                                            type: 'setShowSorting',
                                            payload: {
                                                showSortingPayload: false
                                            }
                                        })
                                    }
                                }}
                                className="flex gap-2 border-[1px] border-[#808080] p-2"
                            >
                                <p>Default Sorting</p>
                                <i><FaSortDown /></i>
                            </button>
                            <div
                                ref={sortingRef}
                                className={`absolute min-w-[250px] flex flex-col gap-2 shadow-md z-[999] mt-4 p-4 bg-white rounded-md transition-all duration-500 ease-in right-0 ${showSorting ? 'block' : 'hidden'}`}
                            >
                                <p>Default Sorting</p>
                                <p>Sort by Popularity</p>
                                <p>Sort by latest</p>
                                <p>Sort by price : High to Low</p>
                                <p>Sort by price: Low to High</p>
                            </div>
                        </div>
                        
                    </div>
                    { isLoading ?<div className="md:hidden flex items-center justify-center"><Loader /></div>
                    : error ? <h1 className="md:hidden flex">There was an error</h1>
                    :   <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4"> 
                            {data?.map((item) => (
                                <div key={item.id} className="flex flex-col gap-2 justify-start">
                                <div className="w-full h-[300px] bg-[#f4f5fd] p-8">
                                        <img 
                                            src={`${serverUrl}${item.image}`}
                                            className="w-full h-full object-contain md:hover:scale-110 transition-all duration-300 ease-in"
                                        />
                                </div>
                                    <h3 className="text-[1.1rem] md:text-[1.2rem] text-[#808080]">{item.name}</h3>
                                    <h4 className="text-black font-bold text-[1.1rem]"><span className="font-normal text-base">NGN </span>{item.price}</h4>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}
