import React from "react";
import StarRating from "../base/StarRating";

interface RatingProps {
  username: string;
  rating: number;
  review: string;
}

const ReviewCard: React.FC<RatingProps> = ({ username, rating, review }) => {
  return (
    <div className="flex flex-col sm:flex-row rounded-2xl border-2 border-gray-400 p-4">
      <div className="flex flex-col sm:mr-5 justify-center items-center">
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
