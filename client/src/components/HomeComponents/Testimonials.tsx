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
        cssEase: "linear"
    }

    return (
        <section className="px-8 md:px-10 lg:px-20 mt-[80px]">
            <h2 className="text-center font-Lora text-[1.5rem]">Customer Reviews</h2>
            <div className="mt-8">
                <Slider {...settings}>
                    <div className="h-[200px] w-[200px] bg-blue-300">
                        <h3>1</h3>
                    </div>
                    <div className="h-[200px] w-[200px] bg-blue-300">
                        <h3>2</h3>
                    </div>
                </Slider>
            </div>
        </section>
    )
}
