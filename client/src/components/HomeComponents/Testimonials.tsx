import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        arrows: false
    }

    return (
        <section className="px-8 md:px-10 lg:px-20 bg-[url('/testimonialBackground.jpg')] bg-cover bg-center md:bg-fixed py-6 pb-10">
            <h2 className="text-center font-Lora text-[1.5rem] text-black/75 font-semibold">Customer Reviews</h2>
            <div className="mt-8">
                <Slider {...settings}>
                    <div className="">
                        <div className="border-[1px] border-[#808080] p-8">
                            <p className="text-[1.2rem] text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla quis optio harum illum. Beatae debitis error alias molestias. Perferendis provident rerum ea aperiam quis fugiat sit, optio labore. Praesentium.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-8 text-white/75">
                            <h3 className="font-semibold text-[1.2rem]">Tife Enoch</h3>
                            <p>Model</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="border-[1px] border-[#808080] p-8">
                            <p className="text-[1.2rem] text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla quis optio harum illum. Beatae debitis error alias molestias. Perferendis provident rerum ea aperiam quis fugiat sit, optio labore. Praesentium.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-8 text-white/75">
                            <h3 className="font-semibold text-[1.2rem]">Triple Odunayo</h3>
                            <p>Stakeholder</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}
