/* eslint-disable react/prop-types */
const Section = ({children, ...props}) => {
    return (
        <section className="py-16 md:py-20" {...props}>{children}</section>
    )
}

export default Section;