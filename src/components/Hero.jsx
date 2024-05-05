import HeroBg from "../assets/images/hero.png"
const Hero = () => {
    const bannerImage = {
        background : `url(${HeroBg}) no-repeat center/cover`
    }
  return (
    <section style={bannerImage} id="hero">
        <div className="bg-blue-900/70">
            <div className="container">
                <div className="max-w-[1000px] mx-auto pt-36 pb-28 md:mt-40 md:pb-36 xl:pb-48 xl:pt-64 text-center">
                    <h1 className="text-slate-50 text-4xl font-bold">Welcome to <span className="text-blue-700">Edusity</span> Your Gateway to Infinite Knowledge!</h1>
                    <p className="text-gray-100 mt-4 px-10 xl:px-28">Join our vibrant community today and unlock the doors to a world of endless possibilities. Knowledge knows no bounds at Edusity. Lets learn, grow, and thrive together!</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero