import React from "react";
import StarRating from "../base/StarRating";

interface RatingProps {
  username: string;
  rating: number;
  review: string;
}

const ReviewCard: React.FC<RatingProps> = ({ username, rating, review }) => {
  return (
    <div className="rounded-[2vw] border-2 border-gray-400 p-4 flex">
      <div className="mr-5 flex flex-col justify-center items-center">
        <div>{username}</div>
        <div style={{ fontSize: '40px' }}>{rating}</div>
        <div>
          <StarRating initialRating={rating} />
        </div>
      </div>
      <div className="flex-grow">{review}</div>
    </div>
  );
};

export default ReviewCard;
