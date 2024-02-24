import { FC } from 'react';
import StarRating from './StarRating';

type Product = {
    title: string,
    description: string,
    price: number,
    imageUrl: string,
    backgroundColor: string,
    rating: number
}

interface SpecialPackageProps {
    products: Product[]
}

const SpecialPackage: FC<SpecialPackageProps> = ({ products }) => {
    return (
        <section className='container mx-auto'>
            <h2 className="font-[700] text-[28px] md:text-[64px] leading-[42px] md:leading-[85px] tracking-0 md:text-center font-Playfair text-[#07484A] mt-0 mb-[80px] md:my-[100px] p-4">
                Special Package
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-[100px] p-4 md:p-0'>
                <div className='flex flex-col-reverse md:flex-col'>
                    <div className='mt-[32px] md:mt-0'>
                        <img
                            src='/images/SpecialPackage/image-6.jpg' alt={`image for special product`}
                            className='rounded-[10px] w-full max-h-[556px]'
                        />
                    </div>

                    <div className='flex flex-col md:flex-row md:justify-between mt-[32px]'>
                        <div>
                            <div className='mb-3'>
                                <h3 className="font-[400] text-[16px] md:text-[36px] leading-[18px] md:leading-[49px] -tracking-[0.02em] text-[#07484A] font-Playfair">Larkin Wood Full Set</h3>
                            </div>

                            <div className='mb-3'>
                                <StarRating rating={5} />
                            </div>

                            <div>
                                <h3 className="font-[400] text-[22px] leading-[25px] -tracking-[0.02em] text-black font-Roboto">$729.99</h3>
                            </div>
                        </div>

                        <div className='mr-auto md:m-0'>
                            <button
                                className="mx-auto md:flex flex items-center md:justify-between cursor-pointer bg-[#70908B] px-[24px] py-[16px] mt-[32px] md:mt-0 rounded-[10px] text-white hover:brightness-90 transition duration-300"
                            >
                                <span>Add to cart</span>
                                <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='hidden md:block'>
                    <div className='text-[#07484A] space-y-[25px] mb-10 mt-[32px] md:mt-[0px]'>
                        <h3 className='font-OpenSans text-[24px] font-[700] leading-[28px] -tracking-[0.02em] text-left'>Description</h3>
                        <p className='font-OpenSans text-[18px] font-[400] leading-[20.7px] -tracking-[0.02em] text-left'>Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast Aluminum Chaise Lounge combines the appearance, function and quality all together, offering you with the best experience.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-4 gap-4">
                        <div>
                            <img
                                src='/images/SpecialPackage/image-5.jpg'
                                alt='image for special product'
                                className='rounded-[10px] h-[150px] w-full object-cover bg-center'
                            />
                        </div>

                        <div className='p-4 bg-[#E0F6F1] rounded-[10px] h-full'>
                            <div className='flex items-start justify-between mb-3 text-left'>
                                <h3 className="font-[400] text-[22px] leading-[30px] tracking-[0em] text-[#07484A] font-OpenSans">Living Room Family Set</h3>
                                <h3 className="font-[400] text-[22px] leading-[25px] -tracking-[0.02em] text-black font-Roboto">$229</h3>
                            </div>

                            <div className='mb-3'>
                                <StarRating rating={5} />
                            </div>
                            {/* <p className="font-[400] text-[14px] leading-[16px] -tracking-[0.02em] text-left mb-3 font-OpenSans"></p> */}
                        </div>
                    </div>

                    <div className="md:flex md:flex-col md:w-full md:h-[332px] md:overflow-auto">
                        <div className='flex flex-col md:flex-row'>
                            <div className='w-full md:w-5/6'>
                                {products.map((product, index) => (
                                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 items-center mb-4 gap-4">
                                        <div>
                                            <img
                                                src={product.imageUrl}
                                                alt={`image for special product ${index}`}
                                                className='rounded-[10px] h-[150px] w-full object-cover'
                                            />
                                        </div>

                                        <div className='p-4 rounded-[10px] h-full'>
                                            <div className='flex items-start justify-between mb-3 text-left'>
                                                <h3 className="font-[400] text-[16px] leading-[18px] -tracking-[0.02em] text-[#07484A] font-Playfair">{product.title}</h3>
                                                <h3 className="font-[400] text-[22px] leading-[25px] -tracking-[0.02em] text-black font-Roboto">${product.price}</h3>
                                            </div>

                                            <div className='mb-3'>
                                                <StarRating rating={product.rating} />
                                            </div>

                                            <p className="font-[400] text-[14px] leading-[16px] -tracking-[0.02em] text-left mb-3 font-OpenSans">{product.description}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialPackage;