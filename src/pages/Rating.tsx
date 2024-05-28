import Sidebar from "../components/base/Sidebar";
import NavbarAdmin from "../components/base/Navbar_Admin";
import { useState, useEffect } from "react";
import StarRating from "../components/base/StarRating";
import CircularProgress from "../components/base/CircleProgressBar";
import DatePickerComponent from "../components/base/datepicker";
import ReviewCard from "../components/contents/RatingContent";
import { Review } from "../interfaces/review";
import api from "../services/api";

function Rating() {
  const [reviewData, setReviewData] = useState<Review[]>([]);

  useEffect(() => {
    api.get(`/api/review/${localStorage.getItem('idPlanetarium')}`)
      .then((response) => {
        setReviewData(response.data);
      })

      .catch((error) => console.error("Error fetching review data:", error));
  }, []);

  //   const totalRating: number = 50;
  //   const positif: number = 40;
  //   const rataRata: number = 10;

  const totalRating: number = reviewData.length;
  const positif: number = reviewData.filter((item) => item.rating >= 4).length;     
  const rataRata: number = reviewData.filter(
    (item) => item.rating >= 2.5 && item.rating <= 3.5
  ).length;
  const rating : number = totalRating > 0 ? parseFloat((reviewData.reduce((acc, item) => acc + item.rating, 0) / totalRating).toFixed(1)) : 0;

  const dashboardFieldTitleStyle =
    "px-20 py-3 mx-4 text-start font-semibold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap border-b ";

//   const reviews: Review[] = [
//     {
//       username: "User 1",
//       rating: 4,
//       review:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
//     },
//     {
//       username: "User 2",
//       rating: 2,
//       review:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
//     },
//     {
//       username: "User 3",
//       rating: 5,
//       review:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
//     },
//   ];

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
            <StarRating initialRating={Math.round(rating)} />
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
                <CircularProgress percentage={totalRating > 0 ? (positif / totalRating) * 100 : 0} />
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
                <CircularProgress percentage={totalRating > 0 ? (rataRata / totalRating) * 100 : 0} />
                <StarRating initialRating={3} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-md text-center">Netral</p>
                <p className="text-2xl text-center">{rataRata}</p>
                <p className="text-sm text-center">Rating dari 3.0 - 3.5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white p-8 w-full h-fit rounded-3xl">
        <div className="font-bold text-xl border-b-4 pb-4">Ulasan</div>
        <div className="mt-8">
          <ul>
            <li className="overflow-auto items-center justify-between space-y-4">
              {reviewData.map((item) => (
                <ReviewCard
                  key={item.reviewId}
                  username={(item.nama || "").toString()}
                  rating={item.rating}
                  review={item.komentar.toString()}
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
