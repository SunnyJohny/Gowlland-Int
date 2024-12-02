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
      name: "",
      image: "/images/_DSC0120.JPG",
    },
    {
      name: "ICU Ventilator",
      image: "/images/icu ventilator.jpeg",
    },
    {
      name: "Surgical Suction Machine",
      image: "/src/assets/Surgical Suction Machine.jpg",
    },
    {
      name: "Shelf Display",//to change the name
      image: "src/assets/IMG-20241125-WA0037.jpg",
    },
    {
      name: "Cataract Surgery Instrument",
      image: "/src/assets/Cataract Surgery Instrument.jpeg",
    },
    {
      name: "Theater Lights",
      image: "/images/Theater Lights.jpeg",
    },
    {
      name: "Ultrasound Scanning Machine",
      image: "/images/Ultrasound scanning machine.jpeg",
    },
    {
      name: "Shelf Display",//to change the name
      image: "src/assets/IMG-20241125-WA0038.jpg",
    },
    {
      name: "Medical Storage Crash Cart",
      image: "/images/Rolling Medical Storage Crash Cart with Drawers.jpeg",
    },




    {
      name: "Electric and Manual Wheelchair ",
      image: "/images/Electric and Manual Wheelchair .jpeg",
    },
    {
      name: "Laboratory Consumables",
      image: "/images/Laboratory Consumables.jpeg",
    },
    {
      name: "Surgical bed",
      image: "/images/Surgical bed__.jpeg",
    },
    {
      name: "Stainless Steel Manual Folding Wheelchair",
      image: "/images/Stainless Steel Manual Folding Wheelchair.jpeg",
    },
    {
      name: "Medical Electric Weighing Scales ",
      image: "/images/Medical Electric Hospital Weighing Scales 150kg Weight 70~190cm.jpeg",
    },
    {
      name: "Surgical bed",
      image: "/images/Surgical bed.jpeg",
    },
    {
      name: "Non Woven Surgical Disposable Products",
      image: "/images/Non Woven Surgical Disposable Products.jpeg",
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
          <SwiperSlide key={index} className="relative group">
            {/* Image */}
            <img
              src={equipment.image}
              alt={equipment.name}
              className="w-full h-full object-cover"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              {/* Add conditional styling for the first slide */}
              <h2
                className={`text-4xl font-extrabold mb-6 leading-tight break-words text-center ${index === 0
                    ? "text-white font-Poppins shadow-lg mt-[-10px]" // Move "Welcome" text up
                    : "text-[#de5c50] font-Moserate, sans-serif"
                  } animate-drop`}
              >
                {/* Conditionally prepend "Welcome to ..." for the first slide */}
                {index === 0 ? "Welcome to " : ""}
                {equipment.name}
              </h2>

              {/* Add additional text for the first slide */}
              {index === 0 && (
                <div className="relative text-center">
                  <p className="text-[20px] text-white font-extrabold mt-6 px-4 lg:px-32">
                    Supplying Top-Quality Hospital Equipment & 
                    <span className="text-blue-500"> Reliable </span>
                    Medical
                    <span className="text-blue-500">                     Consumables
                    </span>
                  </p>
                  <div className="absolute inset-x-0 bottom--16 flex justify-center">
  <a 
    href="https://wa.me/2348034100655?text=Thanks%20for%20contacting%20us!"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-300">
      Contact Us
    </button>
  </a>
</div>



                </div>



              )}



              {/* Conditionally render the button for slides other than the first */}
              {index !== 0 && (
                <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-orange-600 hover:scale-105 transition-transform duration-300 shadow-md animate-slide-up">
                  Buy Now
                </button>
              )}
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
              Redefining healthcare standards with world-class equipment and
              trusted medical consumables.
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
