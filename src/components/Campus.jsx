import Section from "./Section"
import SectionHeading from "./SectionHeading"
import campus1 from "../assets/images/gallery-1.png"
import campus2 from "../assets/images/gallery-2.png"
import campus3 from "../assets/images/gallery-3.png"
import campus4 from "../assets/images/gallery-4.png"
import Button from "./Button"

const Campus = () => {
  return (
    <Section id="campus">
      <div className="container">
        <SectionHeading sectionHeading={"Gallery"} subHeading={"Campus Photos"} />
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-7">
          <li>
            <figure className="rounded-lg overflow-hidden">
              <img src={campus1} alt="" className="w-full object-cover" />
            </figure>
          </li>
          <li>
            <figure className="rounded-lg overflow-hidden">
              <img src={campus2} alt="" className="w-full object-cover" />
            </figure>
          </li>
          <li>
            <figure className="rounded-lg overflow-hidden">
              <img src={campus3} alt="" className="w-full object-cover" />
            </figure>
          </li>
          <li>
            <figure className="rounded-lg overflow-hidden">
              <img src={campus4} alt="" className="w-full object-cover" />
            </figure>
          </li>
        </ul>
        <p className="flex justify-center pt-10">
          <Button text={"See more here"}></Button>
        </p>
      </div>
    </Section>
  )
}

export default Campus