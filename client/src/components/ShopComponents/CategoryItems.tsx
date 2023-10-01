import { useState } from 'react'
import { itemType } from '../../types/generalAppType'
import { Link } from 'react-router-dom'

export default function CategoryItems({featuredProducts}: {featuredProducts: itemType[]}){

    const [rangeValues, setRangeValues] = useState({
        minValue: '500',
        maxValue: '5000'
    })

    return (
        <div className="flex flex-col gap-8 overflow-scroll scrollbarHidden ">
            <div>
                <h2 className="font-lora font-semibold text-[1.3rem] pb-2">Categories</h2>
                <div className="flex flex-col relative">
                    <span className="w-[80px] border-y-2 border-black absolute bottom-[0]"></span>
                    <hr className="border-[#808080]"/>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                    <p>Rings (19)</p>
                    <p>Glasses (9)</p>
                    <p>Watches (6)</p>
                </div>
            </div>
            <div>
                <h2 className="font-lora font-semibold text-[1.3rem] pb-2">Prices</h2>
                <div className="flex flex-col relative">
                    <span className="w-[80px] border-y-2 border-black absolute bottom-[0]"></span>
                    <hr className="border-[#808080]"/>
                </div>
                <div className='mt-4'>
                    <div className='flex items-center gap-4 mb-2'>
                        <input 
                            type='text'
                            value={rangeValues.minValue}
                            className='w-full p-2 outline-none border-[1px] border-[#808080]'
                            onChange={(e)=>{
                                setRangeValues((prevValues)=>{
                                    return {
                                        ...prevValues,
                                        minValue: e.target.value
                                    }
                                })
                            }}
                        />
                        <p>To</p>
                        <input 
                            type='text'
                            value={rangeValues.maxValue}
                            className='w-full p-2 outline-none border-[1px] border-[#808080]'
                            onChange={(e)=>{
                                setRangeValues((prevValues)=>{
                                    return {
                                        ...prevValues,
                                        maxValue: e.target.value
                                    }
                                })
                            }}
                        />
                    </div>
                    <p>{`Range : NGN ${rangeValues.minValue} - NGN ${rangeValues.maxValue}`}</p>
                </div>
            </div>
            <div>
                <h2 className="font-lora font-semibold text-[1.3rem] pb-2">Featured Product</h2>
                <div className="flex flex-col relative">
                    <span className="w-[80px] border-y-2 border-black absolute bottom-[0]"></span>
                    <hr className="border-[#808080]"/>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                   {featuredProducts.slice(0,3).map(products=>{
                    return (
                        <Link to={`/products/${products.id}`} key={products.id} className='lg:flex items-center gap-4'>
                            <div className='max-w-[150px] bg-[#f4f5fd]'>
                                <img 
                                    src={`http://localhost:3000/${products.image}`}
                                    className='object-fit w-full'
                                />
                            </div>
                            <div>
                                <p>{products.name}</p>
                                <p>{products.price}</p>
                            </div>
                        </Link>
                    )
                   })}
                </div>
            </div>
        </div>
    )
}
