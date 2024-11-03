import "../css/about.css"
import { FaCrown, FaMedal,FaShieldAlt,FaBook,FaPuzzlePiece,FaAmbulance } from 'react-icons/fa';
import { MdFeedback,MdHandyman } from 'react-icons/md'; // face icon as a mask
export default function About(){
    return(
        <div className="about">
            <div className="about1">
                <h2 className="heading-about">About Skillbridge</h2>
                <p className="para-about1">Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.</p>
            </div>
            {/* achievements */}
            <div className="about2">
           
                <h2 className="heading-about2">Achievements</h2>
                <p className="para-about1">Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements</p>
            <div className="about2-1">
                <div className="about2-2">
                    <div className="icon"><FaCrown size={20} color="#FF9500"/></div>
                    <h2 className="heading-about2-1">Trusted by Thousands</h2>
                    <p className="para-about2">We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.</p>
                </div>
                <div className="about2-2">
                    <div className="icon"><FaMedal size={20} color="#FF9500"/></div>
                    <h2 className="heading-about2-1">Award-Winning Courses</h2>
                    <p className="para-about2">Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.</p>
                </div>
                <div className="about2-2">
                    <div className="icon"><MdFeedback size={20} color="#FF9500"/></div>
                <h2 className="heading-about2-1">Positive Student Feedback</h2>
                <p className="para-about2">We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.</p>
                </div>
                <div className="about2-2">
                    <div className="icon"><FaShieldAlt size={20} color="#FF9500"/></div>
                <h2 className="heading-about2-1">Industry Partnerships</h2>
                <p className="para-about2">We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies</p>
                </div>
            </div>
            
            </div>
            {/* goals */}
            <div className="about2">
           
           <h2 className="heading-about2">Our Goals</h2>
           <p className="para-about1">At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
           Through our carefully crafted courses, we aim to</p>
       <div className="about2-1">
           <div className="about2-2">
               <div className="icon"><MdHandyman size={20} color="#FF9500"/></div>
               <h2 className="heading-about2-1">Provide Practical Skills</h2>
               <p className="para-about2">We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.</p>
           </div>
           <div className="about2-2">
               <div className="icon"><FaBook size={20} color="#FF9500"/></div>
               <h2 className="heading-about2-1">Foster Creative Problem-Solving</h2>
               <p className="para-about2">We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.</p>
           </div>
           <div className="about2-2">
               <div className="icon"><FaPuzzlePiece size={20} color="#FF9500"/></div>
           <h2 className="heading-about2-1">Promote Collaboration and Community</h2>
           <p className="para-about2">We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.</p>
           </div>
           <div className="about2-2">
               <div className="icon"><FaAmbulance size={20} color="#FF9500"/></div>
           <h2 className="heading-about2-1">Stay Ahead of the Curve</h2>
           <p className="para-about2">The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.</p>
           </div>
       </div>
       
       </div>
       <div className="about3">
        <div className="about3-1">
        <h3 className="heading-about3"><span className="span">Together</span>, let&apos;s shape the future of digital innovation</h3>
        <button className="about-btn">Join Now</button>
        </div>
       <p className="para-about2">Join us on this exciting learning journey and unlock your potential in design and development.</p>
       </div>
        </div>
    )
}