import { FC } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import 'swiper/css';

interface ProductCardProps {
    imageUrl: string,
}

interface OwnCreationSectionProps {
    products: ProductCardProps[]
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl }) => {
    return (
        <div className='p-4 text-left rounded-[16px]'>
            <img src={imageUrl} alt='Our Own Creation' className="w-[360px] h-[500px] object-cover rounded-[10px] transition duration-300 hover:brightness-90 hover:scale-[105%]" />
        </div>
    );
};

const OwnCreationSection: FC<OwnCreationSectionProps> = ({ products }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className='p-4 md:p-0'>
            <div className='flex flex-col items-center justify-center my-[80px] md:my-[100px]'>
                <div className='container w-full mx-auto space-y-[54px]'>
                    <div>
                        <Slider {...settings}>
                            {products.map((product, index) => (
                                <div key={index}>
                                    <ProductCard {...product} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OwnCreationSection;