import Link from "next/link"

import { FaEnvelope,FaPhone,FaMapMarkerAlt,FaFacebook,FaLinkedin,FaGithub } from "react-icons/fa"
import "../css/contact.css"
export default function Contact(){
    return(
        <div className="contact">
            <div className="contact1">
                <h2 className="heading1">Contact Us</h2>
                <p className="para1">Welcome to SkillBridge&apos;s Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you&apos;re an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.</p>
            </div>
            <div className="contact2">
                <div className="contact2-1">
                    <form className="form">
                        <div className="form1">
                           <div className="form1-1">
                           <label className="label">First Name</label>
                           <input className="input" type="text" placeholder="Enter First Name" />
                           </div>
                           <div className="form1-2">
                           <label className="label">Last Name</label>
                           <input className="input" type="text" placeholder="Enter Last Name" />
                           </div>
                        </div>
                        <div className="form1">
                        <div className="form1-1">
                           <label className="label">Email</label>
                           <input className="input" type="text" placeholder="Enter Your Email" />
                           </div>
                           <div className="form1-2">
                           <label className="label">Phone</label>
                           <input className="input" type="text" placeholder="Enter Phone Number" />
                           </div>
                        </div>
                        <div className="form2">
                        <label className="label">Subject</label><br/>
                        <input className="input" type="text" placeholder="Enter Your Subject" />

                        </div>
                        <div className="form2">
                        <label className="label">Message</label><br/>
                        <textarea className="input" rows={5} placeholder="Enter your Message here..."></textarea>

                        </div>
                        <div className="btn-div"><button className="form-btn">Send Your Message</button></div>
                    </form>
                </div>
                <div className="contact2-2">
                    <div className="contact2-3">
                    <div className="email"><div className="icon"><FaEnvelope size={20}/>
                    </div></div>
                    <p className="para2">support@skillbridge.com</p>
                    </div>

                    <div className="contact2-3">
                    <div className="phone"><div className="icon"><FaPhone size={20}/></div>
                    </div>
                    <p className="para2">+91 00000 00000</p>
                    </div>

                    <div className="contact2-3">
                    <div className="location"><div className="icon"><FaMapMarkerAlt size={20}/></div>
                    </div>
                    <p className="para2">Some Where in the World</p>
                    </div>

                    <div className="contact2-3">
                    <div className="social">
                        <div className="social-1"><Link className="link2" href="https://www.facebook.com/share/g1hjCi2Lad2PaRtH/"><FaFacebook size={20}/> </Link>
            <Link className="link2" href={"https://www.linkedin.com/in/muniba-ahmed-4936391a4/"}> <FaLinkedin size={20}/></Link>
            <Link className="link2" href={"https://github.com/munibaweb123"}><FaGithub size={20}/></Link>
            </div>
            
            </div>
            <p className="para2">Social Profiles</p>
                    </div>
            </div>
                </div>
            </div>
        
    )
}