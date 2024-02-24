import Link from 'next/link';
import { FC, useEffect, useState } from 'react';

interface ContentProps {
    selectedCategory: string | null;
}

type Item = {
    title: string;
    imageUrl: string;
};

const CategoryCard: FC<Item> = ({ title, imageUrl }) => (
    // h-[320px]
    <div
        className="w-full h-[250px] flex flex-col justify-center items-center rounded-[10px] transition duration-300 hover:brightness-90 hover:scale-[105%]"
        style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover"
        }}
    >
        <h3 className="font-[400] text-[36px] md:text-[64px] leading-[52px] md:leading-[85px] mb-[24px] md:mb-[0px] tracking-[0em] text-left text-white">{title}</h3>

        <Link href={`/category/${title.toLowerCase()}`}>
            <button className="bg-[#E0EFF6] py-[14px] px-[43px] rounded-[6px] font-[400] text-[18px] leading-[24.51px] font-OpenSans">Explore</button>
        </Link>
    </div>
);

const Content: FC<ContentProps> = ({ selectedCategory }) => {
    const [items, setItems] = useState<Item[]>([]);
    useEffect(() => {
        switch (selectedCategory) {
            case 'Babyroom':
                setItems([
                    {
                        title: 'Babyroom 1',
                        imageUrl: '/images/categories/Babyroom/1/1.jpg'
                    }, {
                        title: 'Babyroom 2',
                        imageUrl: '/images/categories/Babyroom/1/2.jpg'
                    }, {
                        title: 'Babyroom 3',
                        imageUrl: '/images/categories/Babyroom/1/3.jpg'
                    }, {
                        title: 'Babyroom 4',
                        imageUrl: '/images/categories/Babyroom/1/4.jpg'
                    }, {
                        title: 'Babyroom 5',
                        imageUrl: '/images/categories/Babyroom/1/6.jpg'
                    }, {
                        title: 'Babyroom 6',
                        imageUrl: '/images/categories/Babyroom/2/1.jpg'
                    }, {
                        title: 'Babyroom 7',
                        imageUrl: '/images/categories/Babyroom/2/2.jpg'
                    }, {
                        title: 'Babyroom 8',
                        imageUrl: '/images/categories/Babyroom/2/6.jpg'
                    }, {
                        title: 'Babyroom 9',
                        imageUrl: '/images/categories/Babyroom/2/7.jpg'
                    }
                ]);
                break;
            case 'Bathroom':
                setItems([
                    {
                        title: 'Bathroom 1',
                        imageUrl: '/images/categories/Bathroom/1.jpg'
                    }, {
                        title: 'Bathroom 2',
                        imageUrl: '/images/categories/Bathroom/2.jpg'
                    }, {
                        title: 'Bathroom 3',
                        imageUrl: '/images/categories/Bathroom/3.jpg'
                    }, {
                        title: 'Bathroom 4',
                        imageUrl: '/images/categories/Bathroom/4.jpg'
                    }, {
                        title: 'Bathroom 5',
                        imageUrl: '/images/categories/Bathroom/5.jpg'
                    }, {
                        title: 'Bathroom 6',
                        imageUrl: '/images/categories/Bathroom/6.jpg'
                    }
                ]);
                break;
            case 'Gameroom':
                setItems([
                    {
                        title: 'Gameroom 1',
                        imageUrl: '/images/categories/Gameroom/1.jpg'
                    }, {
                        title: 'Gameroom 2',
                        imageUrl: '/images/categories/Gameroom/2.jpg'
                    }, {
                        title: 'Gameroom 3',
                        imageUrl: '/images/categories/Gameroom/3.jpg'
                    }, {
                        title: 'Gameroom 4',
                        imageUrl: '/images/categories/Gameroom/4.jpg'
                    }, {
                        title: 'Gameroom 5',
                        imageUrl: '/images/categories/Gameroom/5.jpg'
                    }
                ]);
                break;
            case 'Laundryroom':
                setItems([
                    {
                        title: 'Laundryroom 1',
                        imageUrl: '/images/categories/Laundryroom/1.jpg'
                    }, {
                        title: 'Laundryroom 2',
                        imageUrl: '/images/categories/Laundryroom/2.jpg'
                    }, {
                        title: 'Laundryroom 3',
                        imageUrl: '/images/categories/Laundryroom/3.jpg'
                    }, {
                        title: 'Laundryroom 4',
                        imageUrl: '/images/categories/Laundryroom/4.jpg'
                    }, {
                        title: 'Laundryroom 5',
                        imageUrl: '/images/categories/Laundryroom/5.jpg'
                    }
                ]);
                break;
            case 'Livingroom':
                setItems([
                    {
                        title: 'Livingroom 1',
                        imageUrl: '/images/categories/Livingroom/1.jpg'
                    }, {
                        title: 'Livingroom 2',
                        imageUrl: '/images/categories/Livingroom/2.jpg'
                    }, {
                        title: 'Livingroom 3',
                        imageUrl: '/images/categories/Livingroom/3.jpg'
                    }, {
                        title: 'Livingroom 4',
                        imageUrl: '/images/categories/Livingroom/4.jpg'
                    }, {
                        title: 'Livingroom 5',
                        imageUrl: '/images/categories/Livingroom/5.jpg'
                    }, {
                        title: 'Livingroom 6',
                        imageUrl: '/images/categories/Livingroom/6.jpg'
                    }, {
                        title: 'Livingroom 7',
                        imageUrl: '/images/categories/Livingroom/7.jpg'
                    }
                ]);
                break;
            case 'Workspace':
                setItems([
                    {
                        title: 'Workspace 1',
                        imageUrl: '/images/categories/Workspace/1.jpg'
                    }, {
                        title: 'Workspace 2',
                        imageUrl: '/images/categories/Workspace/2.jpg'
                    }, {
                        title: 'Workspace 3',
                        imageUrl: '/images/categories/Workspace/3.jpg'
                    }, {
                        title: 'Workspace 4',
                        imageUrl: '/images/categories/Workspace/4.jpg'
                    }, {
                        title: 'Workspace 5',
                        imageUrl: '/images/categories/Workspace/5.jpg'
                    }, {
                        title: 'Workspace 6',
                        imageUrl: '/images/categories/Workspace/6.jpg'
                    }
                ]);
                break;
            default:
                setItems([{
                    title: 'Babyroom',
                    imageUrl: '/images/categories/Babyroom/1/1.jpg'
                },
                {
                    title: 'Bathroom',
                    imageUrl: '/images/categories/Bathroom/1.jpg'
                },
                {
                    title: 'Gameroom',
                    imageUrl: '/images/categories/Gameroom/1.jpg'
                },
                {
                    title: 'Laundryroom',
                    imageUrl: '/images/categories/Laundryroom/1.jpg'
                },
                {
                    title: 'Livingroom',
                    imageUrl: '/images/categories/Livingroom/1.jpg'
                },
                {
                    title: 'Workspace',
                    imageUrl: '/images/categories/Workspace/1.jpg'
                }]);
                break;
        }
    }, [selectedCategory]);

    return (
        <div className='w-full'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-full overflow-auto p-4">
                {items.map((item, index) => (
                    <CategoryCard key={index} title={item.title} imageUrl={item.imageUrl} />
                ))}
            </div>
        </div>
    );
};

export default Content;