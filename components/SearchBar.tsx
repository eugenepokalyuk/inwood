// components/SearchBar.tsx
import Image from 'next/image';
import { FC, FormEvent, useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <form onSubmit={handleSearch} className="flex items-center px-[4px] py-[4px] bg-[#F0F0F0] rounded-[10px]">
            <button
                type="submit"
                className="p-2"
                aria-label="search"
            >
                <Image src='images/icons/zoom-white.svg' alt='zoom' width={20} height={20} />
            </button>
            <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full focus:outline-none font-[400] text-[20px] leading-[23px] tracking-[0em] text-left bg-transparent font-Roboto"
            />
        </form>
    );
};

export default SearchBar;