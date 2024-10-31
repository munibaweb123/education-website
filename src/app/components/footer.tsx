import Image from "next/image"
import "../css/footer.css"
import { FaEnvelope,FaPhone,FaMapMarkerAlt,FaFacebook,FaLinkedin,FaGithub } from "react-icons/fa"
import Link from "next/link"
export default function Footer(){
    return(
        <footer className="footer">
            <div>
            <div className="logo">
                <Image src={"/images/logo.png"} alt="logo" height={100} width={100}/>
            </div>
            <p className="para"><FaEnvelope size={20}/>hello@skillbridge.com</p>
            <p className="para"><FaPhone size={20}/>+91 91813 23 2309</p>
            <p className="para"><FaMapMarkerAlt size={20}/>Somewhere in the World</p>
            </div>
            <div><Link className="link-1" href="/">Home</Link>
            <ul><li className="list1">Benefits</li>
            <li className="list1">Our Courses</li>
            <li className="list1">Our Testimonials</li>
            <li className="list1">Our FAQ</li>
            </ul>
            </div>
            <div><Link className="link-1" href="/about">About Us</Link>
            <ul><li className="list1">Company</li>
            <li className="list1">Achievements</li>
            <li className="list1">Our Goals</li>
        
            </ul>
            </div>
            <div><h2 className="footer-heading" >Social Profiles</h2>
            <div className="social"><Link className="link2" href="https://www.facebook.com/share/g1hjCi2Lad2PaRtH/"><FaFacebook size={40}/> </Link>
            <Link className="link2" href={"https://www.linkedin.com/in/muniba-ahmed-4936391a4/"}> <FaLinkedin size={40}/></Link>
            <Link className="link2" href={"https://github.com/munibaweb123"}><FaGithub size={40}/></Link></div>
            </div>
        </footer>
    )
}