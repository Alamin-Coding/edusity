/* eslint-disable react/prop-types */

const SectionHeading = ({sectionHeading, subHeading, ...props}) => {
  return (
    <div className="text-center pb-10" {...props}>
        <h2 className="text-blue-700 text-xl md:text-2xl font-medium uppercase leading-none">{sectionHeading}</h2>
        <p className="text-black font-bold text-3xl md:text-[40px] leading-tight">{subHeading}</p>
    </div>
  )
}

export default SectionHeading