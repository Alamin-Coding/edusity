/* eslint-disable react/prop-types */
import { FaLongArrowAltRight } from "react-icons/fa";
const Button = ({text, ...props}) => {
  return (
    <>
    <button className="py-3 px-8 rounded-lg bg-blue-700 flex gap-2 items-center text-white text-lg font-medium" {...props}>
        {text}
        <FaLongArrowAltRight/>
    </button>
    </>
  )
}

export default Button