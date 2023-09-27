import { BsTwitter, BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs'

export default function Footer() {
    return (
        <footer className="bg-[#f4f5fd] px-8 md:px-10 lg:px-20 py-10 flex flex-col gap-20 md:grid md:grid-cols-3">
            <div className="flex flex-col gap-4 text-black/75">
                <img 
                    src="BlackLogo.svg"
                    className="max-w-[150px] mb-6"
                />
                <p> Elevate your Steeze and make a statement with our handcrafted pieces. Explore the world of refined craftsmanship and sophistication. Your journey to timeless elegance begins here.</p>
                <div className='flex gap-4'>
                    <a><i><BsTwitter /></i></a>
                    <a><i><BsInstagram /></i></a>
                    <a><i><BsFacebook /></i></a>
                    <a><i><BsWhatsapp /></i></a>
                </div>
            </div>
            <div className='lg:flex flex-col items-start '>
                <h2 className='font-Lora font-semibold text-[1.1rem] mb-6'>My Account</h2>
                <div className='flex flex-col gap-1 text-black/75'>
                    <p>Wishlist</p>
                    <p>Cart</p>
                    <p>Checkout</p>
                </div>
            </div>
            <div className='lg:flex flex-col items-start '>
                <h2 className='font-Lora font-semibold text-[1.1rem] mb-6'>Newsletter</h2>
                <form className='flex flex-col gap-3 text-black/75'>
                   <input 
                        placeholder='Name'
                        type='text'
                        className='p-2 border-[1px] border-black bg-transparent'
                   /> 
                   <input 
                        placeholder='Email'
                        type='text'
                        className='p-2 border-[1px] border-black bg-transparent'
                   /> 
                   <div>
                        <button type='button' className='py-2 px-8 bg-black text-white'>Send</button>
                   </div>
                </form>
            </div>
        </footer>
    )
}
