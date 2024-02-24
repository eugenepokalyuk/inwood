import { FC } from "react";

interface StarRatingProps {
    rating: number
}

const StarRating: FC<StarRatingProps> = ({ rating }) => {
    return (
        <div className="flex">
            {[...Array(rating)].map((star, index) => {
                index += 1;
                return (
                    <button type="button" key={index} className={index <= rating ? "on" : "off"}>
                        <span className="text-yellow-500">&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
};

export default StarRating;