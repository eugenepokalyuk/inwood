import { FC } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import 'swiper/css';

interface ProductCardProps {
    title: string,
    description: string,
    price: number,
    imageUrl: string,
    backgroundColor: string
}

interface PopularProductsProps {
    products: ProductCardProps[]
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, imageUrl, backgroundColor }) => {
    return (
        <div className='p-4 text-left rounded-[16px] space-y-[23px] md:space-y-[0px] md:pt-[84px] md:pb-[60px]' style={{
            backgroundColor: `${backgroundColor}`
        }}>
            <div>
                <img src={imageUrl} alt={title} className="mx-auto mb-4 h-[340px] md:h-[270px] max-sm:scale-75 object-contain" />
            </div>

            <h3 className="text-[24px] leading-[36px] font-OpenSans text-[#70908B]">{title}</h3>
            <p className="text-[18px] leading-[24px] font-OpenSans text-[#70908B]">{description}</p>
            <p className="text-[24px] leading-[36px] font-OpenSans text-[#70908B]">${price}</p>
        </div>
    );
};

const PopularProducts: FC<PopularProductsProps> = ({ products }) => {
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
        <section className='p-0'>
            <div
                className='flex flex-col items-center justify-center bg-60% bg-left md:bg-contain bg-no-repeat'
                style={{
                    backgroundImage: 'url(/images/chair.png)',
                }}
            >
                <div className='container w-full mx-auto'>
                    <h2 className="font-[700] text-[28px] md:text-[64px] leading-[42px] md:leading-[85px] tracking-0 text-center font-Playfair text-[#07484A] mt-[80px] mb-[60px] md:my-[100px]">
                        Popular Products
                    </h2>

                    <div className='mb-[100px]'>
                        <Slider {...settings}>
                            {products.map((product, index) => (
                                <div key={index} className="px-[16px]">
                                    <ProductCard {...product} />
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <button
                        className="hidden mx-auto md:flex flex items-center justify-between cursor-pointer bg-[#70908B] px-[24px] py-[20px] rounded-[10px] text-white hover:brightness-90 transition duration-300"
                    >
                        <span>Explore all items</span>
                        <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PopularProducts;