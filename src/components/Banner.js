import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation,Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

import "swiper/components/navigation/navigation.scss";

import image1 from "../images/1.png";
import image2 from "../images/2.png";

SwiperCore.use([Pagination, Navigation,Autoplay]);

const Banner = () => {
  return (
    <div className="mt-6 mb-6">
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        grabCursor={false}
        centeredSlides={true}
        pagination={true}
        spaceBetween={30}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-around items-center">
            <div>
              <p className="text-6xl font-extrabold text-center mt-6 animate-pulse text-yellow-600">
                BIG SALE 2021
              </p>
              <p className="text-center max-w-xl mt-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium praesentium nemo distinctio suscipit dolore enim
                porro hic magnam qui obcaecati odit a est, sint cupiditate
                soluta ex perferendis facere iure?
              </p>
              <p className="bg-black hover:bg-gray-200 text-white hover:text-black font-bold py-2 px-4 rounded text-center mt-12 cursor-pointer">
                Buy Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </p>
            </div>
            <img src={image1} alt="" className="w-1/3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-around items-center">
            <img src={image2} alt="" className="w-1/3 mt-52 object-contain" />
            <div>
              <p className="text-6xl font-extrabold text-center mt-24 animate-pulse text-yellow-600">
                BUY LAMBORGHINI
              </p>
              <p className="text-center max-w-xl mt-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium praesentium nemo distinctio suscipit dolore enim
                porro hic magnam qui obcaecati odit a est, sint cupiditate
                soluta ex perferendis facere iure?
              </p>
              <p className="bg-black hover:bg-gray-200 text-white hover:text-black font-bold py-2 px-4 rounded text-center mt-12 cursor-pointer">
                Buy Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-around items-center">
            <div>
              <p className="text-6xl font-extrabold text-center mt-6 animate-pulse text-yellow-600">
                BIG SALE 2021
              </p>
              <p className="text-center max-w-xl mt-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium praesentium nemo distinctio suscipit dolore enim
                porro hic magnam qui obcaecati odit a est, sint cupiditate
                soluta ex perferendis facere iure?
              </p>
              <p className="bg-black hover:bg-gray-200 text-white hover:text-black font-bold py-2 px-4 rounded text-center mt-12 cursor-pointer">
                Buy Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </p>
            </div>
            <img src={image1} alt="" className="w-1/3" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
