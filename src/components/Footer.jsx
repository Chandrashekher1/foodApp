import { LOGO } from "../utils/constants"
import SocialIcons from "./SocialIcons"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="h-36 w-screen flex justify-between bg-gray-300 ">
            <div className="m-5 px-5">
                <img src={LOGO} alt="logo"  className="w-14 h-14 cursor-pointer"/>
                <span className="font-bold"><>FORK AND FEAST</></span>
                <h4 className="">@2024 Fork & Feast Limited</h4>
            </div>
            <div>
                <h1 className="font-semibold text-2xl cursor-pointer m-5 p-5"><Link to="/about">About us</Link></h1>
            </div>
            <div className="m-5 px-5">
                <h2 className="font-bold text-lg">Social Links</h2>
                <ul className="my-5">
                <SocialIcons />
                    
                </ul>
            </div>
        </footer>
    )
}
export default Footer