import Image from "next/image"
import Link from "next/link"
import "../css/header.css"
import { AiOutlineArrowRight } from "react-icons/ai"
export default function Header(){
    return(
        <header className="header">
             <div className="sale-div">
        <p className="para">Free Courses 🌟 Sale Ends Soon, Get It Now</p>
        <AiOutlineArrowRight/>
      </div>
            
         <div className="nav">
         <nav className="nav-1">
            <div className="logo">
                <Image src={"/images/logo.png"} alt="logo" height={100} width={100}/>
            </div>
                <ul className="nav-list">
                    <li className="link-list"><Link className="link" href="/">Home</Link></li>
                    <li className="link-list"><Link className="link" href="/courses">Courses</Link></li>
                    <li className="link-list"><Link className="link" href="/about">About Us</Link></li>
                    <li className="link-list"><Link className="link" href="/pricing">Pricing</Link></li>
                    <li className="link-list"><Link className="link" href="/contact">Contact</Link></li>




                </ul>
            </nav>
            <div className="btn-div">
                <button className="btn">Sign Up</button>
                <button className="btn">Login</button>
            </div>
         </div>
            
        </header>
    )
}