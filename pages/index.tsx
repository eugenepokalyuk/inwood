import BonusSection from '@/components/BonusSection';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import NewsletterSection from '@/components/NewsletterSection';
import OwnCreationSection from '@/components/OwnCreationSection';
import PopularProducts from '@/components/PopularProducts';
import SpecialPackage from '@/components/SpecialPackage';
import Testimonials from '@/components/Testimonials';
import Head from 'next/head';

const Home = () => {

    const categories = [
        { title: 'Babyroom' },
        { title: 'Bathroom' },
        { title: 'Gameroom' },
        { title: 'Laundryroom' },
        { title: 'Livingroom' },
        { title: 'Workspace' }
    ];

    const products = [
        { title: 'Armchair', description: 'Light single chair', price: 145, imageUrl: '/images/armchair.png', backgroundColor: "#caf3e5" },
        { title: 'Premium Sofa', description: 'Light single chair', price: 145, imageUrl: '/images/premium-sofa.png', backgroundColor: "#E0EFF6" },
        { title: 'Minimal Sofa', description: 'Light single chair', price: 145, imageUrl: '/images/minimal-sofa.png', backgroundColor: "#EEEBFF" },
        { title: 'Dining Chair', description: 'Light single chair', price: 145, imageUrl: '/images/dining-chair.png', backgroundColor: "#FFF4E7" }
    ];

    const specialProducts = [
        { title: 'Living Room Family Set', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 229, imageUrl: '/images/SpecialPackage/image-1.jpg', backgroundColor: "#caf3e5", rating: 5 },
        { title: 'Living Room Special Set', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 329, imageUrl: '/images/SpecialPackage/image-2.jpg', backgroundColor: "#E0EFF6", rating: 4 },
        { title: 'Living Room Special Set', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 589, imageUrl: '/images/SpecialPackage/image-3.jpg', backgroundColor: "#EEEBFF", rating: 5 },
        { title: 'Living Room Special Set', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 349, imageUrl: '/images/SpecialPackage/image-4.jpg', backgroundColor: "#FFF4E7", rating: 5 }
    ];

    const creations = [
        { imageUrl: '/images/creations/1.jpg' },
        { imageUrl: '/images/creations/2.jpg' },
        { imageUrl: '/images/creations/3.jpg' },
        { imageUrl: '/images/creations/4.jpg' },
        { imageUrl: '/images/creations/5.jpg' },
        { imageUrl: '/images/creations/6.jpg' },
        { imageUrl: '/images/creations/7.jpg' },
        { imageUrl: '/images/creations/8.jpg' }
    ];

    const bonus = [
        {
            title: "Payment Method",
            description: "We offer flexible payment options, to make easier.",
            imageUrl: "/images/icons/benefit-image-3.svg",
            backgroundColor: "#EEEBFF"
        }, {
            title: "Return policy",
            description: "You can return a product within 30 days.",
            imageUrl: "/images/icons/benefit-image-2.svg",
            backgroundColor: "#FFF4E7"
        }, {
            title: "Customer Support",
            description: "Our customer support is 24/7.",
            imageUrl: "/images/icons/benefit-image-1.svg",
            backgroundColor: "#CAF3E5"
        }
    ]

    return (
        <div className='mx-auto'>
            <Head>
                <title>INWOOD</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="InWood description" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <Header />
            <main>
                <HeroSection />
                <CategorySection categories={categories} />
                <PopularProducts products={products} />
                <SpecialPackage products={specialProducts} />
                <OwnCreationSection products={creations} />
                <BonusSection data={bonus} />
                <Testimonials />
                <NewsletterSection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;