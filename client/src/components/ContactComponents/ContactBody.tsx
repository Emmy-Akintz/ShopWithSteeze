import { BsTwitter, BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs'

export default function ContactBody() {
    return (
        <section className="px-4 md:px-10 lg:px-20 py-8 flex flex-col lg:flex-row justify-between gap-6">
            <form className='flex flex-col gap-6'>
                <h2 className="font-Lora text-[1.5rem] font-semibold">Get In Touch</h2>
                <div className='flex flex-col md:grid md:grid-cols-3 gap-6 justify-between mt-6'>
                    <div className='w-full flex flex-col gap-3'>
                        <p className='font-Lora font-semibold'>Name</p>
                        <input
                            type='text'
                            placeholder='Name'
                            required
                            className='p-2 border-[#cccccc] border-[1px] outline-none w-full'
                        />
                    </div>
                    <div className='w-full flex flex-col gap-3'>
                        <p className='font-Lora font-semibold'>Email</p>
                        <input
                            type='email'
                            placeholder='Email Address'
                            required
                            className='p-2 border-[#cccccc] border-[1px] outline-none w-full'
                        />
                    </div>
                    <div className='w-full flex flex-col gap-3'>
                        <p className='font-Lora font-semibold'>Phone Number</p>
                        <input
                            type='tel'
                            placeholder='Phone Number'
                            className='p-2 border-[#cccccc] border-[1px] outline-none w-full'
                        />
                    </div>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <p className='font-Lora font-semibold'>Your Message</p>
                    <textarea
                        rows={10}
                        placeholder='Message or Comment'
                        className='p-2 border-[#cccccc] border-[1px] outline-none w-full'
                    />
                </div>
                <div>
                    <button
                        className="py-3 px-12 tracking-wider border-[1px] border-black bg-black text-white md:hover:bg-white md:hover:text-black transition-all duration-200 ease-in"
                    >
                        Send Message
                    </button>
                </div>
            </form>

            <div className="flex flex-col gap-2">
                <div className="py-4 border-b-[1px] border-[#cccccc] flex flex-col gap-2">
                    <h2 className="font-semibold font-Lora text-[1.1rem]">Address</h2>
                    <p>Off Mobolaji Johnson Street, Abuja, Nigeria</p>
                </div>
                <div className="py-4 border-b-[1px] border-[#cccccc] flex flex-col gap-2">
                    <h2 className="font-semibold font-Lora text-[1.1rem]">Phone</h2>
                    <p>+234 8140518534</p>
                </div>
                <div className="py-4 border-b-[1px] border-[#cccccc] flex flex-col gap-2">
                    <h2 className="font-semibold font-Lora text-[1.1rem]">Email</h2>
                    <p>ayomidotzee@gmail.com</p>
                </div>
                <div className="py-4 border-b-[1px] border-[#cccccc] flex flex-col gap-2">
                    <h2 className="font-semibold font-Lora text-[1.1rem]">Opening Time</h2>
                    <p>8:00am - 10:00pm, Closed on Sundays</p>
                </div>
                <div className="py-4 flex flex-col gap-2">
                    <h2 className="font-semibold font-Lora text-[1.1rem]">Follow us on</h2>
                    <div className='flex gap-4'>
                        <a className='p-4 rounded-full border-[#cccccc] border-[1px]'><i ><BsTwitter /></i></a>
                        <a className='p-4 rounded-full border-[#cccccc] border-[1px]'><i ><BsInstagram /></i></a>
                        <a className='p-4 rounded-full border-[#cccccc] border-[1px]'><i ><BsFacebook /></i></a>
                        <a className='p-4 rounded-full border-[#cccccc] border-[1px]'><i ><BsWhatsapp /></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
