import { FC } from 'react';


interface NewsletterSectionProps { }

const NewsletterSection: FC<NewsletterSectionProps> = () => {
    return (
        <section className='bg-[#E0EFF6] grid grid-cols-1 md:grid-cols-2 py-[48px] md:py-[0px]'>
            <article>
                <div
                    className='w-full h-full bg-center bg-cover'
                    style={{
                        backgroundImage: "url('images/NewsletterSection/image-1.jpg')"
                    }}
                />
            </article>
            <article className='p-4 md:p-[150px] space-y-10 text-[#07484A]'>
                <div className='space-y-[25px] text-center md:text-left'>
                    <h3 className='font-Playfair font-[400] text-[36px] md:text-[64px] leading-[52px] md:leading-[85px] tracking-[0.05em]'>Join Our <span className='font-[700]'>Newsletter</span></h3>
                    <p className='font-Roboto font-[400] text-[18px] md:text-[24px] leading-[23px] md:leading-[28px] tracking-[0.05em]'>Receive exclusive deals, discounts and many offers.</p>
                </div>
                <div>
                    <input
                        type="text"
                        className='px-5 py-4 w-full text-[#C4C4C4] bg-transparent border-b border-black text-center'
                        placeholder='Enter your email'
                    />
                </div>
                <div className='flex justify-center md:justify-start'>
                    <button
                        className="md:flex flex items-center justify-center w-[250px] cursor-pointer bg-[#70908B] px-[24px] py-[20px] rounded-[10px] text-white hover:brightness-90 transition duration-300"
                    >
                        <span className='font-Roboto text-[24px] font-[400] leading-[28px]'>Subscribe</span>
                    </button>
                </div>
            </article>
        </section>
    );
};

export default NewsletterSection;