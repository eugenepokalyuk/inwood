import { FC } from 'react';

interface CategoryButtonProps {
    onClick: () => void;
}

const CategoryButton: FC<CategoryButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="hidden md:flex flex items-center justify-between cursor-pointer bg-[#70908B] px-[32px] py-[20px] rounded-[10px] text-white hover:brightness-90 transition duration-300"
        >
            <span>All Categories</span>
            <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7"></path>
            </svg>
        </button>
    );
};

export default CategoryButton;