import { FC } from "react";

interface MenuBoxProps {
    onSelect: (category: string) => void;
    categories: { title: string }[]
}

const MenuBox: FC<MenuBoxProps> = ({ onSelect, categories }) => {
    return (
        <div className="flex flex-col">
            {categories.map((category, index) => (
                <button
                    key={index}
                    className="w-full block text-left font-[400] text-[24px] leading-[28px] tracking-0 hover:bg-gray-200 p-4 rounded-[10px]"
                    onClick={() => onSelect(category.title)}
                >
                    {category.title}
                </button>
            ))}
        </div>
    );
};

export default MenuBox;