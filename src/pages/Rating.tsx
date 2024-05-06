import Sidebar from "../components/base/Sidebar";
import NavbarAdmin from "../components/base/Navbar_Admin";
import { useState } from "react";
import StarRating from "../components/base/StarRating";
import CircularProgress from "../components/base/CircleProgressBar";
import DatePickerComponent from "../components/base/datepicker";
import ReviewCard from "../components/contents/RatingContent";

interface Review {
  username: string;
  rating: number;
  review: string;
}

function Rating() {
    const totalRating: number = 50
    const positif: number = 40
    const rataRata: number = 10
    const rating: number = 4.3

  const dashboardFieldTitleStyle =
    "px-20 py-3 mx-4 text-start font-semibold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap border-b ";

  const reviews: Review[] = [
    {
      username: "User 1",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      username: "User 2",
      rating: 2,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      username: "User 3",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
  ];

  return (
    <div className="flex flex-col bg-color-6 h-full p-8">
        <div className="flex flex-col bg-white p-8 mb-4 w-full h-fit rounded-3xl">
            <div className="flex flex-row items-center justify-between font-bold text-xl border-b-4 pb-4">
                Rating
                <DatePickerComponent month />
            </div>
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center pt-8">
                <div className="flex flex-col w-fit p-4 xl:mr-16 rounded justify-center items-center text-3xl font-semibold">
                    {rating}
                    <StarRating initialRating={4} />
                </div>
                <div className="flex flex-col sm:flex-col md:flex-row w-full">
                    <div className="flex sm:flex-row md:flex-col xl:flex-row w-full justify-around p-4 m-2 rounded-3xl border-2 border-gray-400">
                        <div className="flex flex-col justify-center items-center">
                            <CircularProgress percentage={100} />
                            <StarRating initialRating={5} />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-md text-center">Total Rating</p>
                            <p className="text-2xl text-center">{totalRating}</p>
                            <p className="text-sm text-center">Rating dari 1.0 - 5.0</p>
                        </div>
                    </div>
                    <div className="flex sm:flex-row md:flex-col xl:flex-row w-full justify-around p-4 m-2 rounded-3xl border-2 border-gray-400">
                        <div className="flex flex-col justify-center items-center">
                            <CircularProgress percentage={(40 / 50) * 100} />
                            <StarRating initialRating={4} />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-md text-center">Positif</p>
                            <p className="text-2xl text-center">{positif}</p>
                            <p className="text-sm text-center">Rating diatas 4.0</p>
                        </div>
                    </div>
                    <div className="flex sm:flex-row md:flex-col xl:flex-row w-full justify-around p-4 m-2 rounded-3xl border-2 border-gray-400">
                        <div className="flex flex-col justify-center items-center">
                            <CircularProgress percentage={(10 / 50) * 100} />
                            <StarRating initialRating={2} />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-md text-center">Positif</p>
                            <p className="text-2xl text-center">{rataRata}</p>
                            <p className="text-sm text-center">Rating dari 3.0 - 3.5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col bg-white p-8 w-full h-fit rounded-3xl">
            <div className="font-bold text-xl border-b-4 pb-4">
                Ulasan
            </div>
            <div className="mt-8">
                <ul>
                    <li className="overflow-auto items-center justify-between space-y-4">
                        {reviews.map((item) => (
                            <ReviewCard
                                username={item.username}
                                rating={item.rating}
                                review={item.review}
                            />
                        ))}
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Rating;
