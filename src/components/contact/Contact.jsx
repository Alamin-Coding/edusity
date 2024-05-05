import { useState } from "react";
import  "./Contact.css";
import massageImage from "../../assets/images/msg-icon.png"
import email from "../../assets/images/mail-icon.png"
import phone from "../../assets/images/phone-icon.png"
import Section from "../Section";
import SectionHeading from "../SectionHeading";
const Contact = () => {
    const [result, setResult] = useState("");
    // const [massage, setMassage] = useState(false);

    const showMassage = result ? <p>{result}</p> : null ; 

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "fe4bc4ff-ebd6-45fe-987d-9b962cbaa4a4");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setTimeout(() => {
            setResult("")
        }, 2000);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <Section id="contact">
      <SectionHeading sectionHeading={"Contact Us"} subHeading={"Get in Touch"} />
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center">
        <div className="contact-info max-w-[500px]">
            <h3 className="flex items-center gap-2 pb-3 font-bold text-[26px]">Send us a message <img className="h-5" src={massageImage} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul className="mt-8">
              <li className="grid items-center grid-cols-[40px_1fr] gap-2 mb-3">
                <img className="h-5" src={email} alt="" />
                <span>Contact@GreatStack.dev</span>
              </li>
              <li className="grid items-center grid-cols-[40px_1fr] gap-2">
                <img className="h-5" src={phone} alt="" />
                <span>Contact@GreatStack.dev</span>
              </li>
            </ul>
        </div>
        <div className="contact-form">
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
                <div className="form-control">
                    <label htmlFor="name" className="font-semibold text-lg">Name</label>
                    <input className="w-full p-3 border-b border-b-gray-300" type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-control">
                    <label htmlFor="email" className="font-semibold text-lg">Email</label>
                    <input className="w-full p-3 border-b border-b-gray-300" type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="phone" className="font-semibold text-lg">Phone Number</label>
                    <input className="w-full p-3 border-b border-b-gray-300" type="text" name="phone" placeholder="Your Email" required />
                </div>
                <div className="submit-button">
                    <button className="rounded-lg py-3 px-8 bg-blue-700 hover:bg-blue-900 text-white duration-200" type="submit">Submit Now</button>
                </div>
            </form>
            {showMassage}
        </div>
    </div>
    </Section>
  )
}

export default Contact