import { Link } from "react-router-dom"
const About = () => {
    return (
       <div className="h-screen ">
         <div className="text-center m-7 p-7">
            <h3 className="font-semibold">Hello I'm</h3>
            <h1 className="font-bold text-3xl">Chandrashekher Prasad</h1>
            <h3 className="font-semibold my-5">Contact Me : </h3>
            <h1 className="font-semibold text-xl my-4"><Link>9990418622</Link> </h1>
            <h1 className="font-semibold text-xl my-4"><Link>cpsaw999041@gmail.com</Link> </h1>

        </div>
       </div>
    )
}
export default About