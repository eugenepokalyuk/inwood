import { FC } from 'react';

type Data = {
    title: string;
    description: string;
    imageUrl: string;
    backgroundColor: string;
}

interface BonusSectionProps {
    data: Data[]
}

const BonusSection: FC<BonusSectionProps> = ({ data }) => {
    return (
        <section className='bg-[#E0EFF6] h-full pt-[80px] md:pt-[0px] md:pb-[100px]'>
            <article className='container mx-auto p-4 md:p-[100px]'>
                <h2 className="font-[700] text-[28px] md:text-[64px] leading-[42px] md:leading-[85px] tracking-0 text-center font-Playfair text-[#07484A] mb-[100px]">
                    Benefits for your expediency
                </h2>

                <div className='flex flex-col md:flex-row items-center md:justify-between'>
                    {data.map((item: Data) => {
                        return (
                            <>
                                <div className='flex flex-col items-center justify-center max-w-[310px] gap-[32px] mb-[60px] md:mb-0'>
                                    <div className='w-[108px] h-[108px] p-4 rounded-[24px]' style={{ background: item.backgroundColor }}>
                                        <img src={item.imageUrl} alt={item.description} className='w-full h-full' />
                                    </div>

                                    <h3 className='font-Playfair text-[24px] md:text-[36px] font-[700] leading-[36px] md:leading-[48px] tracking-[0.00em] text-center md:text-left text-[#07484A]'>{item.title}</h3>
                                    <p className='font-OpenSans text-[18px] md:text-[24px] font-[400] leading-[23px] md:leading-[33px] tracking-[0.00em] text-center text-[#07484A]'>{item.description}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </article>
        </section>
    );
};

export default BonusSection;