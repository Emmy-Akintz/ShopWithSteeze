import { useQuery } from "react-query";
import axios from "axios";
import { useState, useEffect } from 'react';
import { itemType } from "../../types/generalAppType";
import useWindowDimensions from "../../windowDimensions";
import Loader from "../Loader";

export default function HomeHeader() {

    const {width} = useWindowDimensions()
    const isMobile = width <= 768

    console.log(isMobile, width)
    
    const url = 'http://localhost:3000/item/storeitems/'
    async function fetchRecipes(){
        const response = await axios.get(url)
        return response.data as itemType[]
    }

    const { data, isLoading, error } = useQuery('featuredItems', fetchRecipes)

    const [currentIndex, setCurrentIndex] = useState(0);

    const serverUrl = 'http://localhost:3000/'

    useEffect(() => {
       if(data){
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                return (prevIndex + 1) % data.length
            });
        }, 4000);

        return () => clearInterval(interval);
       }
    }, [data, currentIndex]);

    

    return (
        <div className="bg-white md:h-[70vh] w-full md:grid md:grid-cols-2 px-4 md:px-10 lg:px-20">
            <div className={`flex flex-col  gap-8 justify-center mt-8 lg:mt-0 px-4 md:px-0 bg-cover bg-center md:bg-white transition-all duration-500 ease-in`}>
                
                { isLoading ?<div className="md:hidden flex items-center justify-center"><Loader /></div>
                : error ? <h1 className="md:hidden flex">There was an error</h1>
                :  <div className=" md:hidden slider-container w-full h-[300px] relative overflow-hidden"> 
                        {data?.map((data, index: number) => (
                            <div
                                key={index}
                                className={`flex items-center justify-center slider-item absolute w-full h-[300px] text-2xl transform transition-transform duration-500 ease-in ${index === currentIndex ? '' : 'translate-x-full opacity-0'}`}
                            >
                                <img 
                                    src={`${serverUrl}${data.image}`}
                                    className="h-full"
                                />
                            </div>
                        ))}
                    </div>
                }
                <h1 className="font-bold text-[2rem] md:text-[3rem]">Elevate Your Steeze with Our Exquisite Collection</h1>
                <p className="md:text-[1.2rem]"> 
                    Shop with Steeze, where sophistication meets style. Discover our exquisite collection of men's jewelry,
                    meticulously crafted to elevate your everyday look. Whether you're seeking classic elegance or bold statements,
                    we have the perfect piece to complement your unique style. Start your style journey with us today.
                </p>
                <div>
                    <button 
                        className="py-3 px-12 tracking-wider border-[1px] border-black bg-black text-white md:hover:bg-white md:hover:text-black transition-all duration-200 ease-in"
                    >
                        SHOP NOW
                    </button>
                </div>
            </div>
            { isLoading ? <div className="hidden md:flex items-center justify-center"><Loader /></div>
            : error ? <h1 className="hidden md:flex">There was an error</h1>
            :  <div className="hidden md:block slider-container w-full h-full relative overflow-hidden"> 
                    {data?.map((data, index: number) => (
                        <div
                            key={index}
                            className={`flex items-center justify-center slider-item absolute w-full h-full p-4 text-2xl transform transition-transform duration-500 ease-in ${
                            index === currentIndex ? '' : 'translate-x-full opacity-0'
                            }`}
                        >
                            <img 
                                src={`${serverUrl}${data.image}`}
                                className="h-[500px] w-[500px]"
                            />
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}
