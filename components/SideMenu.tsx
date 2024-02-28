import { FC, useRef, useState } from 'react';
import CategoryButton from './CategoryButton';
import MenuBox from './MenuBox';
import SearchBar from './SearchBar';

interface SideMenuProps {
    onSelect: (category: string) => void;
    categories: { title: string }[];
}

const SideMenu: FC<SideMenuProps> = ({ onSelect, categories }) => {
    const menuRef = useRef<HTMLDivElement>(null);
    const [items, setItems] = useState<{ title: string }[]>(categories);

    const [filteredItems, setFilteredItems] = useState<{ title: string }[]>(items);

    const handleSearch = (query: string) => {
        if (!query.trim()) {
            setFilteredItems(items);
        } else {
            const lowerCaseQuery = query.toLowerCase();
            const filtered = items.filter(item =>
                item.title.toLowerCase().includes(lowerCaseQuery)
            );
            setFilteredItems(filtered);
        }
    };

    return (
        <aside className='w-1/4 min-w-[200px] flex flex-col justify-between h-full p-4 gap-[80px]'>
            <div className='hidden md:flex'>
                <SearchBar onSearch={handleSearch} />
            </div>
            <div ref={menuRef} className='hidden md:flex overflow-auto'>
                <MenuBox onSelect={onSelect} categories={filteredItems} />
            </div>
            <CategoryButton onClick={() => onSelect('default')} />
        </aside>
    );
};

export default SideMenu;