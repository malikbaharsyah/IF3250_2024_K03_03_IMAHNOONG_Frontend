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
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full items-center bg-[#E9EAF6] min-h-[100vh] bg-no-repeat bg-[length:100vw]">
        <div className="w-full">
          <NavbarAdmin />
        </div>
        <div className="w-full h-full px-[1vw] py-[1.5vw]">
          <section className="bg-white rounded-[2vw] w-full h-full pl-0">
            <div
              className={
                dashboardFieldTitleStyle + "flex items-center justify-between"
              }
            >
              <div className="">Rating & Ulasan</div>
              <div>
                <DatePickerComponent month />
              </div>
            </div>
            <div className="flex justify-around">
              <div className="box bg-white p-4 m-2 rounded">
                <div className="p-4 flex">
                  <div className="mr-5 flex flex-col justify-center items-center">
                    <div style={{ fontSize: "40px" }}>{rating}</div>
                    <div>
                      <StarRating initialRating={4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="box bg-white p-4 m-2 rounded-[1vw]">
                <div className="rounded-[2vw] border-2 border-gray-400 p-4 flex">
                  <div className="mr-5 flex flex-col justify-center items-center">
                    <div>
                      <CircularProgress percentage={100} />
                    </div>
                    <div>
                      <StarRating initialRating={5} />
                    </div>
                  </div>
                  <div className="mr-5 flex flex-col justify-center items-center">
                    <div style={{ fontSize: "16px" }}>Total Rating</div>
                    <div style={{ fontSize: "24px" }}>{totalRating}</div>
                    <div style={{ fontSize: "12px" }}>
                      Rating dari 1.0 - 5.0
                    </div>
                  </div>
                </div>
              </div>
              <div className="box bg-white p-4 m-2 rounded-[1vw]">
                <div className="rounded-[2vw] border-2 border-gray-400 p-4 flex">
                  <div className="mr-5 flex flex-col justify-center items-center">
                    <div>
                      <CircularProgress percentage={(40 / 50) * 100} />
                    </div>
                    <div>
                      <StarRating initialRating={4} />
                    </div>
                  </div>
                  <div className="mr-5 flex flex-col justify-center items-center">
                    <div style={{ fontSize: "16px" }}>Positif</div>
                    <div style={{ fontSize: "24px" }}>{positif}</div>
                    <div style={{ fontSize: "12px" }}>Rating diatas 4.0</div>
                  </div>
                </div>
              </div>
              <div className="box bg-white p-4 m-2 rounded-[1vw]">
                <div className="rounded-[2vw] border-2 border-gray-400 p-4 flex">
                  <div className="mr-5 flex flex-col justify-center items-center">
                    <div>
                      <CircularProgress percentage={(10 / 50) * 100} />
                    </div>
                    <div>
                      <StarRating initialRating={3} />
                    </div>
                  </div>
                  <div className="mr-5 flex flex-col justify-center items-center">
                    <div style={{ fontSize: "16px" }}>Rata-rata</div>
                    <div style={{ fontSize: "24px" }}>{rataRata}</div>
                    <div style={{ fontSize: "12px" }}>
                      Rating dari 3.0 - 3.5
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <main className="w-full h-full px-[1vw] py-[1.5vw]">
          <section className="bg-white rounded-[2vw] w-full h-full pl-0 p-5">
            <div className="px-20 py-3 mx-4 text-start font-semibold text-black text-[20px] tracking-[0] leading-[normal] flex">
              Ulasan
            </div>
            <div className="body ">
              <ul className="mx-80">
                <li className="h-[30vw] overflow-auto items-center justify-between space-y-4">
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
          </section>
        </main>
      </div>
    </div>
  );
}

export default Rating;
