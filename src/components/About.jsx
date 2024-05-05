import Section from "./Section"
import SectionHeading from "./SectionHeading"

import aboutImage from "../assets/images/about.png"
import playIcon from "../assets/images/play-icon.png"

import '@vidstack/react/player/styles/base.css';
import { useRef, useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
// import { MediaPlayer, MediaProvider } from '@vidstack/react';

const About = () => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const closeIcon = useRef();



  const openModal = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };


  window.addEventListener("mousemove", (e) => {
    let topValue = e.clientY;
    if (topValue < 100 && modal) {
      closeIcon.current.style.top = "40px"
      console.log("IF", modal);
    }
    if (modal === true && topValue > 100) {
      console.log("ELSE", modal);
      // closeIcon.current.style.top = "-40px"
    }
  })


  return (
    <Section className="bg-blue-500/5 py-20" id="about">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 items-center xl:grid-cols-[4fr_5fr] md:gap-7">
          <div className="relative hidden xl:block">
            <img src={aboutImage} alt="" />
            <button onClick={openModal} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <img src={playIcon} alt="" />
            </button>
            {modal && (
                <div className="fixed left-0 top-0 bg-black/50 flex items-center justify-center w-screen h-screen z-40">
                  <div>
                    <div className="group">
                      <button
                      className={`w-10 h-10 rounded-full bg-white text-black absolute left-1/2  top-${10} duration-300 z-50 cursor-pointer`} 
                      onClick={closeModal}
                      ref={closeIcon}
                      >
                        <IoCloseOutline
                          arial-label="Close modal"
                        />
                      </button>
                      <div className="relative">
                        {videoLoading ? (
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ">
                            <BiLoaderAlt
                            className="loading_animation"
                              // fadeIn="none"
                            />
                          </div>
                        ) : null}
                        <iframe
                          className="border border-blue-600 p-4 bg-white"
                          onLoad={spinner}
                          loading="lazy"
                          width="1000"
                          height="600"
                          src="https://www.youtube.com/embed/4UZrsTqkcW4"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
          <div>
            <SectionHeading className="text-left pb-3" sectionHeading="ABOUT UNIVERSITY" subHeading="Nurturing Tomorrow's Leaders Today" />
            <p className="py-2 text-gray-800 leading-normal">Embark on a transformative educational journey with our university&apos;s comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>

            <p className="py-2 text-gray-800 leading-normal">With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>

            <p className="py-2 text-gray-800 leading-normal">Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
          </div>
          <div className="relative xl:hidden">
            <img src={aboutImage} alt="" />
            <button onClick={openModal} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <img src={playIcon} alt="" />
            </button>
            {modal && (
                <div className="fixed left-0 top-0 bg-black/50 flex items-center justify-center w-screen h-screen z-40">
                  <div>
                    <div className="group">
                      <button
                      className={`w-10 h-10 rounded-full bg-white text-black absolute left-1/2  top-${10} duration-300 z-50 cursor-pointer`} 
                      onClick={closeModal}
                      ref={closeIcon}
                      >
                        <IoCloseOutline
                          arial-label="Close modal"
                        />
                      </button>
                      <div className="relative">
                        {videoLoading ? (
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ">
                            <BiLoaderAlt
                            className="loading_animation"
                              // fadeIn="none"
                            />
                          </div>
                        ) : null}
                        <iframe
                          className="border border-blue-600 p-4 bg-white"
                          onLoad={spinner}
                          loading="lazy"
                          width="1000"
                          height="600"
                          src="https://www.youtube.com/embed/4UZrsTqkcW4"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
      <script>
        
      </script>
    </Section>
  )
}

export default About