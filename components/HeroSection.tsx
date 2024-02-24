import Link from 'next/link';
import { FC } from 'react';

interface HeroSectionProps { }

const HeroSection: FC<HeroSectionProps> = () => {
    return (
        <div
            className="h-screen bg-[#C4C4C4] bg-cover bg-bottom md:pl-[150px] rounded-b-[30px] flex flex-col items-start justify-center items-left"
            style={{
                backgroundImage: 'url(/images/background.jpg)'
            }}
        >
            <div className='max-w-[668px] space-y-[54px] flex flex-col p-4 md:p-0 text-center md:text-left'>
                <h1 className="font-[700] text-[36px] md:text-[64px] leading-[52px] md:leading-[85.31px] font-Playfair text-[#07484A]">
                    Exclusive Deals of Furniture Collection
                </h1>

                <p className="font-[400] text-[18px] md:text-[24px] leading-[23px] md:leading-[32.68px] font-OpenSans text-[#07484A]">
                    Explore different categories. Find the best deals.
                </p>

                <Link href="/shop">
                    <button className="bg-[#70908B] text-white px-[54.5px] py-[23.5px] rounded-[10px] transition duration-300 font-[700] text-[24px] leading-[32.68px] hover:brightness-90">
                        Shop Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;