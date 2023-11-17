"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Home() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <>
      <section className="relative pb-8 " style={{ height: "750px" }}>
        {[...Array(totalSlides)].map((_, index) => (
          <div key={index} className={`duration-700 ease-in-out ${currentSlide === index ? '' : 'hidden'
            }`}>
            <img src={`/robots${index + 1}.jpg`}
              className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full" alt="RoboCT" />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center bg-gray-900/30">
              <div className="z-10 max-w-6xl px-4 mx-auto ">
                <button
                  type="button"
                  className="w-3 h-3 absolute left-10 rounded-full"
                  aria-current="true"
                  aria-label="Previous Slide"
                  onClick={prevSlide}
                >
                  <ArrowBackIosIcon />
                </button>
                <button
                  type="button"
                  className="w-3 h-3 absolute right-10 rounded-full"
                  aria-current="true"
                  aria-label="Next Slide"
                  onClick={nextSlide}
                >
                  <ArrowForwardIosIcon />
                </button>
                <h2
                  className="mt-2 mb-4 text-3xl font-bold leading-tight text-white md:text-4xl md:leading-tight lg:text-7xl lg:leading-tight g">
                  The Future
                </h2>

              </div>
            </div>
            <div className="absolute z-10 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">

              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-white'
                    }`}
                  aria-current={currentSlide === index}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}

            </div>
          </div>
        ))}
      </section>

      <SecondSection />
      <ThirdSection />
    </>
  );
};

const SecondSection = () => {

  return (
    <section className="body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="inline-block py-1 px-2 text-xs font-medium tracking-widest">TECHNICAL SPECIFICATION</span>
            <h2 className="sm:text-8xl text-2xl title-font font-bold uppercase  mt-4 mb-4">Range</h2>
            <p className="leading-relaxed text-2xl sm:text-7xl qodef-m-item  mb-6">Acceleration</p>
            <p className="leading-relaxed text-2xl sm:text-7xl qodef-m-item  mb-6">Total power</p>
            <p className="leading-relaxed text-2xl sm:text-7xl qodef-m-item  mb-6">Charging</p>
            <p className="leading-relaxed text-2xl sm:text-7xl qodef-m-item  mb-6">Interior</p>
          </div>
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <h2 className="sm:text-xl text-lg title-font font-bold  mt-4 mb-4">TOTAL POWER UP TO 750 HP</h2>
            <p className="leading-relaxed text-gray-400 mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, explicabo.</p>
            <h2 className="sm:text-xl text-lg title-font font-bold  mt-4 mb-4">POWER CONSUMPTION</h2>
            <ul className="pl-5 space-y-3 text-gray-400 list-disc marker:text-orange-500">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, corporis!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, corporis!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, corporis!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
};

const ThirdSection = () => {

  return (
    <>
      <section className=" body-font">
        <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
          <div className=" md:w-1/2 px-10 m-4 h-[50vh]  flex flex-col justify-center md:items-center md:text-center mb-16 md:mb-0 items-center text-center bg-stone-900">
            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          </div>
          <div className="lg:max-w-lg lg:w-full m-4 md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="aircraft" src="/aircraft.jpg" />
          </div>
        </div>
      </section>
      <section className=" body-font">
        <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2  m-4 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="aircraft" src="/aircraft1.jpg" />
          </div>
          <div className="md:w-1/2 px-10 flex m-4 bg-stone-900 h-[50vh] justify-center flex-col md:items-center md:text-center items-center text-center">

            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>

          </div>
        </div>
      </section>
    </>
  );
};
