
const Footer = () => {
  let year = new Date().getFullYear()
  return (
    <footer className="py-4 bg-gray-800">
      <div className="container">
        <ul className="flex justify-between flex-col lg:flex-row gap-2">
          <li className="text-center lg:text-left">
            <p className="text-white"> &copy; {year} Edusity. All rights reserved.</p>
          </li>
          <li className="text-center lg:text-right">
            <a className="text-slate-50 ml-2" href="#">Terms of Services</a>
            <a className="text-slate-50 ml-10" href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer