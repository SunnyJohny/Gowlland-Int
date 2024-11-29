/* eslint-disable react/no-unknown-property */
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module correctly
import "swiper/css";
import "swiper/css/autoplay";

const Hero = () => {
  const equipmentData = [
    {
      name: "Surgical Instruments",
      image: "/images/_DSC0120.JPG", // Replace with your image URLs
    },
    {
      name: "ICU Ventilator",
      image: "/images/icu ventilator.jpeg", // Replace with your image URLs
    },
    {
      name: "Cataract Surgery Instrument",
      image: "/images/Cataract Surgery Instrument.jpeg", // Replace with your image URLs
    },
    {
      name: "Theater Lights",
      image: "/images/Theater Lights.jpeg", // Replace with your image URLs
    },
    {
      name: "Ultrasound Scanning Machine",
      image: "/images/Ultrasound scanning machine.jpeg", // Replace with your image URLs
    },
    {
      name: "Stackable Job Trays",
      image: "/images/Stackable Job Trays.jpeg", // Replace with your image URLs
    },
    {
      name: "Medical Storage Crash Cart",
      image: "/images/Rolling Medical Storage Crash Cart with Drawers.jpeg", // Replace with your image URLs
    },
  ];

  return (
    <div className="banner cs-style1 relative" id="home">
      {/* Image Slider */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1500}
        loop={true}
        className="h-96"
      >
        {equipmentData.map((equipment, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Image */}
            <img
              src={equipment.image}
              alt={equipment.name}
              className="w-full h-full object-cover"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
              <h2 className="text-2xl font-bold mb-4">{equipment.name}</h2>
              <button className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300">
                Buy Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Additional Banner Content */}
      <div className="px-4 lg:px-24 mt-8">
        <h1 className="md:w-2/3 lg:text-8xl sm:text-6xl text-5xl mb-5 text-white font-bold lg:leading-snug sm:leading-snug leading-snug">
          {/* Add optional heading text */}
        </h1>

        {/* Banner Buttons */}
        <div className="text-white text-lg flex flex-col-reverse md:flex-row md:items-center items-start justify-between gap-8">
          <div>
            <a
              className="inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300"
              href="/contact"
            >
              <span>Get a Quote</span>
              <BsArrowRight />
            </a>
          </div>
          <div className="md:w-1/2">
            <p className="cs-hero_subtitle">
              We deliver the best problem-solving solutions for our clients and
              provide the finest finished products for the present and future.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Arrow to Service Section */}
      <Link
        to="services"
        spy={true}
        smooth={true}
        className="cs-down_btn md:mt-20 mt-8"
      >
        .
      </Link>
    </div>
  );
};

export default Hero;
