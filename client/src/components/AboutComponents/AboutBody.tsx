
export default function AboutBody() {
    return (
        <div className="min-h-screen py-8">
            {/* <p className="text-gray-700 text-lg">
                At XYZ Jewelry, we believe that every piece of jewelry tells a
                story. Our passion for craftsmanship and timeless elegance drives
                us to create exquisite jewelry that complements your unique style
                and celebrates life's special moments.
            </p>
            <p className="text-gray-700 text-lg mt-4">
                Founded in [Year], XYZ Jewelry has been a trusted name in the
                world of fine jewelry. Our artisans bring together creativity,
                precision, and a deep appreciation for the beauty of gemstones and
                metals. Each piece in our collection is a work of art, designed to
                be treasured for generations.
            </p>
            <p className="text-gray-700 text-lg mt-4">
                We are committed to quality, sustainability, and ethical sourcing.
                Our dedication to providing you with exceptional jewelry is
                matched only by our commitment to responsible business practices.
                When you choose XYZ Jewelry, you choose jewelry that reflects your
                values.
            </p> */}
            <div className="px-4 md:px-10 lg:px-20 py-8 flex flex-col gap-4 items-center justify-center">
                <img
                    src="AboutLogo.png"
                />
                <h3 className="text-orange-500 font-semibold text-[1.1rem]">ALL YOUR STEEZE HERE</h3>
                <h4 className="max-w-[600px] text-[2rem] font-Lora text-center font-semibold">Empowering Men to Express Their Style Through Jewelry</h4>
            </div>
            <div className="px-4 md:px-10 lg:px-20 py-8 flex flex-col items-center gap-4 md:flex-row-reverse relative">
                <img 
                    src="AboutImage.jpg"
                    className="md:w-[50%]"
                />
                <div className="flex flex-col gap-4">
                    <h3 className="uppercase text-[1.4rem] font-Lora">THE BEST STEEZE</h3>
                    <p> We are committed to quality, sustainability, and ethical sourcing.
                        Our dedication to providing you with exceptional jewelry is
                        matched only by our commitment to responsible business practices.
                        When you Shop with Steeze, you choose jewelry that reflects your
                        values.
                    </p>
                    <div>
                        <button 
                            className="py-3 px-12 tracking-wider border-[1px] border-black bg-black text-white md:hover:bg-white md:hover:text-black transition-all duration-200 ease-in"
                        >
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
