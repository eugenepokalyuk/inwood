import { FC } from 'react';

interface TestimonialsProps { }

const Testimonials: FC<TestimonialsProps> = () => {
    return (
        <section className='h-full p-4 md:p-0 py-[80px]'>
            <article className='container mx-auto md:p-[100px] flex flex-col'>
                <div className='mb-4 md:mb-[100px] text-center text-[#07484A]'>
                    <h2 className="font-[700] text-[36px] md:text-[64px] leading-[52px] md:leading-[85px] tracking-0 font-Playfair md:my-[0px] mb-[16px] md:mb-[35px]">
                        Testimonials
                    </h2>

                    <p className='font-Roboto font-[400] text-[18px] md:text-[36px] leading-[23px] md:leading-[43px] tracking-[0px]'>Over 15,000 happy customers.</p>
                </div>

                <div className='flex flex-col md:flex-col lg:flex-row'>
                    <div
                        className='min-w-[280px] w-[280px] max-w-full max-h-full md:w-1/2 rounded-[20px] bg-cover bg-center mb-4 md:mb-[51px] md:mb-0'
                        style={{
                            backgroundImage: 'url("images/Testimonials/image-1.jpg")',
                            minWidth: "280px",
                            width: "100%",
                            minHeight: "280px"
                        }}
                    />

                    <div className='w-full h-full flex flex-col justify-between md:p-[54px]'>
                        <p className='font-OpenSans text-[18px] md:text-[36px] font-[400] leading-[23px] md:leading-[49px] tracking-[0em] text-[#07484A] mb-[65px]'>“My experience with Mark is a complete sucess, from customer service, wide range of products, clean store, purchasing experience, the newsletter.Thank you.”</p>
                        <div className='flex flex-col'>
                            <p className='font-Roboto text-[24px] font-[700] leading-[28px] tracking-[0em] text-[#07484A]'>Leona Paul</p>
                            <p className='font-Roboto text-[24px] font-[300] leading-[28px] tracking-[0em] text-[#07484A]'>CEO of Floatcom</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Testimonials;