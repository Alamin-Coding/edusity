import Section from "./Section"
import SectionHeading from "./SectionHeading"
import program1 from "../assets/images/program-1.png"
import program2 from "../assets/images/program-2.png"
import program3 from "../assets/images/program-3.png"

import icon1 from "../assets/images/program-icon-1.png"
import icon2 from "../assets/images/program-icon-2.png"
import icon3 from "../assets/images/program-icon-3.png"

const Program = () => {
  return (
    <Section id="program">
        <SectionHeading sectionHeading="Our Program" subHeading="What we Offer" />
        <div className="container">
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
                <li>
                    <div className="rounded-lg overflow-hidden group relative">
                        <img className="max-w-full object-cover" src={program1} alt="program" />
                        <div className="absolute w-full h-full bg-[#000f984d] flex items-center justify-center p-8 sm:p-10 md:p-8 xl:p-10 top-0 opacity-0 duration-300 left-0 group-hover:opacity-100">
                            <a href="#" className="duration-300 translate-y-[200px] group-hover:translate-y-0">
                                <img className="mx-auto md:max-w-24 xl:max-w-full" src={icon1} alt="" />
                                <p className="text-white text-lg">Graduation Degree</p>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="rounded-lg overflow-hidden group relative">
                        <img className="max-w-full object-cover" src={program2} alt="program" />
                        <div className="absolute w-full h-full bg-[#000f984d] flex items-center justify-center p-8 sm:p-10 md:p-8 xl:p-10 top-0 opacity-0 duration-300 left-0 group-hover:opacity-100">
                            <a href="#" className="duration-300 translate-y-[200px] group-hover:translate-y-0">
                                <img className="mx-auto md:max-w-24 xl:max-w-full" src={icon2} alt="" />
                                <p className="text-white text-lg">Masters Degree</p>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="rounded-lg overflow-hidden group relative">
                        <img className="max-w-full object-cover" src={program3} alt="program" />
                        <div className="absolute w-full h-full bg-[#000f984d] flex items-center justify-center p-8 sm:p-10 md:p-8 xl:p-10 top-0 opacity-0 duration-300 left-0 group-hover:opacity-100">
                            <a href="#" className="duration-300 translate-y-[200px] group-hover:translate-y-0">
                                <img className="mx-auto md:max-w-24 xl:max-w-full" src={icon3} alt="" />
                                <p className="text-white text-lg">Post Graduation</p>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </Section>
  )
}

export default Program