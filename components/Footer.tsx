import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#F3F6F5] text-[#07484A] pt-[100px]">
            <div className="container mx-auto px-4 lg:px-8">
                <div className='flex flex-col md:flex-row flex-wrap'>
                    <div className="font-[400] text-[18px] leading-[25px] font-OpenSans space-y-4 w-1/3">
                        <div className="mb-4">
                            <Link href="/">
                                <span>
                                    <Image src="/images/logo.png" alt="INWOOD Logo" width={100} height={50} />
                                </span>
                            </Link>
                        </div>

                        <div className="flex w-full lg:space-x-4 mb-4">
                            <Link href="https://t.me/PaperCranejs">
                                <span>
                                    <Image src="/images/icons/socials/telegram.svg" alt="Telegram Logo" width={28} height={28} />
                                </span>
                            </Link>

                            <Link href="https://github.com/eugenepokalyuk">
                                <span>
                                    <Image src="/images/icons/socials/github-mark.svg" alt="Github Logo" width={28} height={28} />
                                </span>
                            </Link>

                            <Link href="https://eugenepokalyuk.github.io/react-about/">
                                <span>
                                    <Image src="/images/icons/socials/general.svg" alt="General Logo" width={28} height={28} />
                                </span>
                            </Link>
                        </div>

                        <div className='grid grid-cols-1 mb:flex'>
                            <div className='font-[400] text-[18px] leading-[25px] font-OpenSans space-y-4'>
                                <h5 className="font-[700] mb-3">Address</h5>
                                <ul className='space-y-4'>
                                    <li><a href="#" className="hover:underline">+123 654 987</a></li>
                                    <li><a href="#" className="hover:underline">877  The Bronx, NY</a></li>
                                    <li><a href="#" className="hover:underline">14568, USA</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='max-md:grid max-md:grid-cols-2 md:flex max-md:gap-[32px] my-[80px] justify-between md:w-2/3'>
                        <div className="font-[400] text-[18px] leading-[25px] font-OpenSans space-y-4">
                            <h5 className="font-[700] mb-3">My Account</h5>
                            <ul className='space-y-4'>
                                <li><a href="#" className="hover:underline">Sign in</a></li>
                                <li><a href="#" className="hover:underline">Register</a></li>
                                <li><a href="#" className="hover:underline">Order status</a></li>
                            </ul>
                        </div>

                        <div className="font-[400] text-[18px] leading-[25px] font-OpenSans space-y-4">
                            <h5 className="font-[700] mb-3">Help</h5>
                            <ul className='space-y-4'>
                                <li><a href="#" className="hover:underline">Shipping</a></li>
                                <li><a href="#" className="hover:underline">Returns</a></li>
                                <li><a href="#" className="hover:underline">Sizing</a></li>
                            </ul>
                        </div>

                        <div className="font-[400] text-[18px] leading-[25px] font-OpenSans space-y-4">
                            <h5 className="font-[700] mb-3">Shop</h5>
                            <ul className='space-y-4'>
                                <li><a href="#" className="hover:underline">All Products</a></li>
                                <li><a href="#" className="hover:underline">Bedroom</a></li>
                                <li><a href="#" className="hover:underline">Dining Room</a></li>
                            </ul>
                        </div>

                        <div className="font-[400] text-[18px] leading-[25px] font-OpenSans space-y-4">
                            <h5 className="font-[700] mb-3">Legal Stuff</h5>
                            <ul className='space-y-4'>
                                <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
                                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:underline">Privacy & Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center md:text-left text-[18px] font-[400] leading-[25px] mt-[69px] pb-[32px]">
                    <p>Copyright ©2020 INWOOD. All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};
export default Footer;