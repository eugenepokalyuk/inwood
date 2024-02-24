// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface HeaderProps { }

const Header: FC<HeaderProps> = () => {
    return (
        // fixed 
        <header className="absolute w-full flex justify-between items-center md:py-[28px]">
            <div className='mx-auto w-full flex flex-row justify-between p-4 md:px-[150px]'>
                <div className="logo">
                    <Link href="/">
                        <span>
                            <Image src="/images/logo.png" alt="INWOOD Logo" width={100} height={50} />
                        </span>
                    </Link>
                </div>

                <nav className='hidden md:block'>
                    <ul className="flex flex-col md:flex-row md:gap-[48px]">
                        <li><Link href="/"><span className="font-[400] text-[20px] leading-[26.58px] tracking-[0.05em] font-Playfair hover:text-green-800 hover:font-[700] hover:border-b-2 hover:border-b hover:border-green-800">Home</span></Link></li>
                        <li><Link href="/products"><span className="font-[400] text-[20px] leading-[26.58px] tracking-[0.05em] font-Playfair hover:text-green-800 hover:font-[700] hover:border-b-2 hover:border-b hover:border-green-800">Products</span></Link></li>
                        <li><Link href="/categories"><span className="font-[400] text-[20px] leading-[26.58px] tracking-[0.05em] font-Playfair hover:text-green-800 hover:font-[700] hover:border-b-2 hover:border-b hover:border-green-800">Categories</span></Link></li>
                        <li><Link href="/contact"><span className="font-[400] text-[20px] leading-[26.58px] tracking-[0.05em] font-Playfair hover:text-green-800 hover:font-[700] hover:border-b-2 hover:border-b hover:border-green-800">Contact Us</span></Link></li>
                    </ul>
                </nav>

                <div>
                    <ul className="flex flex-row space-x-4 md:space-x-[58px]">
                        <li>
                            <Link href="#">
                                <Image src='images/icons/zoom-green.svg' alt='' width={27} height={27} />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src='images/icons/cart-green.svg' alt='' width={27} height={27} />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src='images/icons/user-green.svg' alt='' width={27} height={27} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;