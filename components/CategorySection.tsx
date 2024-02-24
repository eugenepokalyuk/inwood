import { FC, useState } from 'react';
import Content from './Content';
import SideMenu from './SideMenu';

interface CategorySectionProps {
    categories: { title: string }[]
}

const CategorySection: FC<CategorySectionProps> = ({ categories }) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    return (
        <section className='p-4 md:p-0'>
            <h2 className="font-[700] text-[28px] md:text-[64px] leading-[42px] md:leading-[85px] tracking-0 text-center mt-[80px] md:my-[100px] font-Playfair text-[#07484A]">
                Explore by Category
            </h2>
            {/* min-h-screen */}
            <div className="container mx-auto w-full flex flex-col md:flex-row">
                <SideMenu onSelect={setSelectedCategory} categories={categories} />
                <Content selectedCategory={selectedCategory} />
            </div>
        </section>
    );
};

export default CategorySection;