import Section from "./Section"
import SectionHeading from "./SectionHeading"

import user1 from "../assets/images/user-1.png";
import user2 from "../assets/images/user-2.png";
import user3 from "../assets/images/user-3.png";
import user4 from "../assets/images/user-4.png";
import {useEffect, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Testiminoals = () => {

  const [tx, setTx] = useState(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);



  function prevSlide() {
    if (windowSize < 1024 && tx > -75) {
      setTx((prevValue) => prevValue - 25 )
    }
    if (windowSize >= 1024 && tx > -50) {
      setTx((prevValue) => prevValue - 25 )
    }
  }

  function nextSlide() {
    if (tx < 0) {
      setTx((prevValue) => prevValue + 25 )
    }
  }



  let x = {
    transform : `translateX(${tx}%)`
  }
  
  useEffect(() => {
    // Function to update window size
    const updateWindowSize = () => {
      setWindowSize(window.innerWidth)
    };

    // Event listener to update window size on resize
    window.addEventListener('resize', updateWindowSize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, [windowSize]);

  return (
    <Section className="bg-blue-500/5 py-20" id="testimonials">
      <SectionHeading subHeading={"What our client say"} sectionHeading={"Testimonials"} />
      <div className="container overflow-hidden relative">
        <ul className="slider flex overflow-hidden w-[400%] lg:w-[200%] translateX-0 duration-300" style={x}>
          <li className="w-full lg:w-1/2 mx-4">
            <div className="slide rounded-lg overflow-hidden shadow bg-white px-8 py-10">
              <div className="flex gap-3 items-center mb-4">
                <figure className="w-16 h-16 rounded-full overflow-hidden border-[3px] border-blue-700">
                  <img src={user1} alt="" className="max-w-full object-cover" />
                </figure>
                <div>
                  <h3 className="text-blue-700 font-semibold text-xl pb-1">Emily Williams</h3>
                  <p className="text-gray-500">Edusity, USA</p>
                </div>
              </div>
              <p className="text-gray-600 leading-normal">Choosing to pursue my degree at Edusity was one of the best decisions I&lsquo;ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li className="w-full lg:w-1/2 mx-4">
            <div className="slide rounded-lg overflow-hidden shadow bg-white px-8 py-10">
              <div className="flex gap-3 items-center mb-4">
                <figure className="w-16 h-16 rounded-full overflow-hidden border-[3px] border-blue-700">
                  <img src={user2} alt="" className="max-w-full object-cover" />
                </figure>
                <div>
                  <h3 className="text-blue-700 font-semibold text-xl pb-1">William Jackson</h3>
                  <p className="text-gray-500">Edusity, USA</p>
                </div>
              </div>
              <p className="text-gray-600 leading-normal">Choosing to pursue my degree at Edusity was one of the best decisions I&lsquo;ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li className="w-full lg:w-1/2 mx-4">
            <div className="slide rounded-lg overflow-hidden shadow bg-white px-8 py-10">
              <div className="flex gap-3 items-center mb-4">
                <figure className="w-16 h-16 rounded-full overflow-hidden border-[3px] border-blue-700">
                  <img src={user3} alt="" className="max-w-full object-cover" />
                </figure>
                <div>
                  <h3 className="text-blue-700 font-semibold text-xl pb-1">Emily Williams</h3>
                  <p className="text-gray-500">Edusity, USA</p>
                </div>
              </div>
              <p className="text-gray-600 leading-normal">Choosing to pursue my degree at Edusity was one of the best decisions I&lsquo;ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li className="w-full lg:w-1/2 mx-4">
            <div className="slide rounded-lg overflow-hidden shadow bg-white px-8 py-10">
              <div className="flex gap-3 items-center mb-4">
                <figure className="w-16 h-16 rounded-full overflow-hidden border-[3px] border-blue-700">
                  <img src={user4} alt="" className="max-w-full object-cover" />
                </figure>
                <div>
                  <h3 className="text-blue-700 font-semibold text-xl pb-1">William Jackson</h3>
                  <p className="text-gray-500">Edusity, USA</p>
                </div>
              </div>
              <p className="text-gray-600 leading-normal">Choosing to pursue my degree at Edusity was one of the best decisions I&lsquo;ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
        </ul>
        <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-0 z-20 w-8 h-8 rounded-full bg-black/50 text-white p-2 flex items-center justify-center hover:bg-black"> <GoChevronLeft /> </button>
        <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-0 z-20 w-8 h-8 rounded-full bg-black/50 text-white p-2 flex items-center justify-center hover:bg-black"> <GoChevronRight /> </button>
      </div>
    </Section>
  )
}

export default Testiminoals