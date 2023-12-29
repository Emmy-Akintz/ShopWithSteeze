import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function HomeHeader() {

    const displayRings = [
        'AngelDemonRing.jpg',
        'ZirconDragon.jpg',
        'DeathNoteRing.jpg'
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                return (prevIndex + 1) % displayRings.length
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, displayRings.length]);



    return (
        <header className="bg-white w-full md:grid md:grid-cols-2 px-8 md:px-10 lg:px-20">
            <div className={`flex flex-col  gap-8 justify-center mt-8 lg:mt-24 bg-cover bg-center md:bg-white transition-all duration-500 ease-in`}>
                <div className=" md:hidden slider-container w-full h-[300px] relative overflow-hidden">
                    {displayRings.map((data, index: number) => (
                        <div
                            key={index}
                            className={`flex items-center justify-center slider-item absolute w-full h-[300px] text-2xl transform transition-transform duration-500 ease-in ${index === currentIndex ? '' : 'translate-x-full opacity-0'}`}
                        >
                            <img
                                src={`/${data}`}
                                className="h-full"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
                <h1 className="font-bold text-[2rem] md:text-[3rem]">Improve your health with our most healthy foods</h1>
                <p className="md:text-[1.2rem]">
                    We have been producing irresistible food products since 2015. Our mission is to keep you smiling with every purchase.
                </p>
                <p className="md:text-[1.2rem]">
                    Get yourself a great quality product today!
                </p>
                <Link to='/shop'>
                    <button
                        type='button'
                        className="py-3 px-12 tracking-wider border-[1px] border-black bg-black text-white md:hover:bg-white md:hover:text-black transition-all duration-200 ease-in"
                    >
                        SHOP NOW
                    </button>
                </Link>
            </div>
            <div className="hidden md:block slider-container w-full h-full relative overflow-hidden">
                {displayRings.map((data, index: number) => (
                    <div
                        key={index}
                        className={`flex items-center justify-center slider-item absolute w-full h-full p-4 text-2xl transform transition-transform duration-500 ease-in ${index === currentIndex ? '' : 'translate-x-full opacity-0'
                            }`}
                    >
                        <img
                            src={`/${data}`}
                            className="h-[500px] w-[500px]"
                        />
                    </div>
                ))}
            </div>
        </header>
    )
}
