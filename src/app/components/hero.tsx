import { GiElectric } from 'react-icons/gi';
import { FaCheckSquare,FaTimes,FaArrowRight,FaPlus } from 'react-icons/fa';


import Image from 'next/image';
import "../css/hero.css"
export default function Hero(){
    return(
        <div className='hero'>
            <div className='hero1'>
            <div className='hero1-1'>
          <div className='spark-icon'>
          <GiElectric className='icon' size={50}/>
          </div>
          <h1 className='heading1'><span className='span'>Unlock</span> Your Creative Potential</h1>
            </div>
            </div>
            <div className='hero2'>
                <h2 className='heading2'>with Online Design and Development Courses.</h2>
                <p className='para'>Learn from Industry Experts and Enhance Your Skills.</p>
                <div className='btn-div'>
                <button className='btn'>Explore Courses</button>
                <button className='btn'>View Pricing</button>
            </div>
            </div>
          
            <div className='logos-div'>
                <div className='logos'>
                <Image className='img' src={"/images/zapier.png"} alt='zapier logo' height={200} width={200}/></div>
              <div className='logos'>  <Image className='img' src={"/images/spotify.jpg"} alt='spotify logo' height={200} width={200}/></div>
                <div className='logos'><Image className='img' src={"/images/zoom.png"} alt='zoom logo' height={200} width={200}/></div>
                <div className='logos'><Image className='img' src={"/images/amazon.png"} alt='amazon logo' height={200} width={200}/></div>
               <div className='logos'> <Image className='img' src={"/images/adobe.jpg"} alt='adobe logo' height={200} width={200}/></div>
               <div className='logos'> <Image className='img' src={"/images/notion.png"} alt='notion logo' height={200} width={200}/></div>
               <div className='logos'> <Image className='img' src={"/images/netflix.png"} alt='netflix logo' height={200} width={200}/></div>
            </div>
            <div>
            <div className="video-div">
            <video controls className='video'>
                <source src="/videos/computer.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
            </div>
            <div className='benefits'>
                <h2 className='heading3'>Benefits</h2>
              <div className='benefits-inner'>
              <p className='para2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio deserunt rerum, animi velit sint sed dolorum assumenda tenetur iure facere nostrum dolore, modi mollitia iste vero praesentium esse quia?
              Iusto, placeat dolores tempore aspernatur fugiat recusandae quasi labore cum ea autem laboriosam enim quod eum blanditiis exercitationem excepturi alias iure ut! Voluptate atque dolore, mollitia facere dolorum perspiciatis nam.</p>
              <button className='btn'>View All</button>
              </div>
              <div className='benefits2'>
                <div className='benefits2-inner'><h4 className='heading4'>01</h4><h5 className='heading5'>Flexible Learning Schedule</h5>
                <p className='para2'>Fit your coursework around your existing commitments and obligations.</p>
                <div className='icon'><Image className='img2' src={"/images/top-right.png"} alt='top right arrow' height={100} width={100}/></div>
                </div>
                <div className='benefits2-inner'><h4 className='heading4'>02</h4><h5 className='heading5'>Expert Instruction</h5>
                <p className='para2'>Learn from industry experts who have hands-on experience in design and development.</p>
                <div className='icon'><Image className='img2' src={"/images/top-right.png"} alt='top right arrow' height={100} width={100}/></div>

                </div>
                <div className='benefits2-inner'><h4 className='heading4'>03</h4><h5 className='heading5'>Diverse Course Offerings</h5>
                <p className='para2'>Explore a wide range of design and development courses covering various topics.</p>
                <div className='icon'><Image className='img2' src={"/images/top-right.png"} alt='top right arrow' height={100} width={100}/></div>

                </div>
                <div className='benefits2-inner'><h4 className='heading4'>04</h4><h5 className='heading5'>Updated Curriculum</h5>
                <p className='para2'>Access courses with up-to-date content reflecting the latest trends and industry practices.</p>
                <div className='icon'><Image className='img2' src={"/images/top-right.png"} alt='top right arrow' height={100} width={100}/></div>

                </div>
                <div className='benefits2-inner'><h4 className='heading4'>05</h4><h5 className='heading5'>Practical Projects and Assignments</h5>
                <p className='para2'>Develop a portfolio showcasing your skills and abilities to potential employers.</p>
                <div className='icon'><Image className='img2' src={"/images/top-right.png"} alt='top right arrow' height={100} width={100}/></div>

                </div>
                <div className='benefits2-inner'><h4 className='heading4'>06</h4><h5 className='heading5'>Interactive Learning Environment</h5>
                <p className='para2'>Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.</p>
                <div className='icon'><Image className='img2' src={"/images/top-right.png"} alt='top right arrow' height={100} width={100}/></div>

                </div>
              </div>
            </div>
            <div className='courses'>
            <h2 className='heading3'>Courses</h2>
              <div className='courses-inner'>
              <p className='para2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio deserunt rerum, animi velit sint sed dolorum assumenda tenetur iure facere nostrum dolore, modi mollitia iste vero praesentium esse quia?
              Iusto, placeat dolores tempore aspernatur fugiat recusandae quasi labore cum ea autem laboriosam enim quod eum blanditiis exercitationem excepturi alias iure ut! Voluptate atque dolore, mollitia facere dolorum perspiciatis nam.</p>
              <button className='btn'>View All</button>
              </div>
              <div className='courses2'>
                <div className='courses2-1'>
                <div className='img3-div'><Image className='img3' src={"/images/courses/web-design.jpg"} alt='web design' width={2000} height={2000}/></div>
                <div className='courses2-2'><div className='courses2-3'><button className='btn4'>4 weeks</button> <button className='btn4'>bigenners</button></div> <h2>By John Smith</h2></div>
                <h4 className='heading6'>Web Design Fundamentals</h4>
                <p className='para3'>LLearn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                <button className='btn3'>Get it now</button>
                </div>
                <div className='courses2-1'>
                <div className='img3-div'><Image className='img3' src={"/images/courses/ui-ux-design.jpg"} alt='ui/ux design' width={2000} height={2000}/></div>
                <div className='courses2-2'><div className='courses2-3'><button className='btn4'>6 weeks</button> <button className='btn4'>intermediate</button></div> <h2>By Emily Johnson</h2></div>
                <h4 className='heading6'>UI/UX Design</h4>
                <p className='para3'>Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.</p>
                <button className='btn3'>Get it now</button>
                </div>
                <div className='courses2-1'>
                <div className='img3-div'><Image className='img3' src={"/images/courses/graphic-design.jpg"} alt='graphic design' width={2000} height={2000}/></div>
                <div className='courses2-2'><div className='courses2-3'><button className='btn4'>8 weeks</button> <button className='btn4'>intermediate</button></div> <h2>By David Brown</h2></div>

                <h4 className='heading6'>Mobile App Development</h4>
                <p className='para3'>Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.</p>
                <button className='btn3'>Get it now</button>
                </div>
                <div className='courses2-1'>
                <div className='img3-div'><Image className='img3' src={"/images/courses/mobile-app.jpg"} alt='mobile app design' width={2000} height={2000}/></div>
                <div className='courses2-2'><div className='courses2-3'><button className='btn4'>8 weeks</button><button className='btn4'>intermediate</button></div> <h2>By Sarah Thompson</h2></div>

                
                <h4 className='heading6'>Graphic Design for Beginners</h4>
                <p className='para3'>Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.</p>
                <button className='btn3'>Get it now</button>
                </div>
                <div className='courses2-1'>
                <div className='img3-div'><Image className='img3' src={"/images/courses/next-js.jpg"} alt='nextjs development' width={2000} height={2000}/></div>
                <div className='courses2-2'><div className='courses2-3'><button className='btn4'>12 weeks</button><button className='btn4'>intermediate</button></div> <h2>By Jennifer Wilson</h2></div>

                <h4 className='heading6'>Next JS</h4>
                <p className='para3'>Become proficient in front-end web development. Learn HTML, CSS,tailwindcss, TypeScript, . Build interactive and responsive websites with nextjs.</p>
                <button className='btn3'>Get it now</button>
                </div>
                <div className='courses2-1'>
                <div className='img3-div'><Image className='img3' src={"/images/courses/ai.jpg"} alt='artifitial intelligence' width={2000} height={2000}/></div>
                <div className='courses2-2'><div className='courses2-3'><button className='btn4'>12 weeks</button><button className='btn4'>intermediate</button></div> <h2> By Michael Adams</h2></div>

                <h4 className='heading6'>Artificial Intelligence</h4>
               
                <p className='para3'>Learn Artificial intelligence,gpts, humenoids, ai agents, docker, metaverse and solopreneurship.</p>
                <button className='btn3'>Get it now</button>
                </div>
              </div>

            </div>
            <div className='testimonials'>
            <h2 className='heading3'>Our Testimonials</h2>
              <div className='testimonials-inner'>
              <p className='para2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio deserunt rerum, animi velit sint sed dolorum assumenda tenetur iure facere nostrum dolore, modi mollitia iste vero praesentium esse quia?
              Iusto, placeat dolores tempore aspernatur fugiat recusandae quasi labore cum ea autem laboriosam enim quod eum blanditiis exercitationem excepturi alias iure ut! Voluptate atque dolore, mollitia facere dolorum perspiciatis nam.</p>
              <button className='btn'>View All</button>
            </div>
            <div className='testimonials2'>
            <div className='testimonials2-1'>
            <p className='para3'>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
            <div className='testimonials2-2'>
              <div className='test-div'><Image className='test-img' src={"/images/test/test1.jpg"} alt='testimonial one' height={100} width={100}/>
              <h3>Sarah L.</h3>
              </div>
            <button className='test-btn'>Read Full Story</button>
            </div>
            </div>

            <div className='testimonials2-1'>
            <p className='para3'>The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I&apos;m now building my own app. Great course!</p>
            <div className='testimonials2-2'>
              <div className='test-div'><Image className='test-img' src={"/images/test/test2.jpg"} alt='testimonial one' height={100} width={100}/>
              <h3>Jason M.</h3>
              </div>
            <button className='test-btn'>Read Full Story</button>
            </div>
            </div>
            <div className='testimonials2-1'>
            <p className='para3'>The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I&apos;m now building my own app. Great course!</p>
            <div className='testimonials2-2'>
              <div className='test-div'><Image className='test-img' src={"/images/test/test3.jpg"} alt='testimonial one' height={100} width={100}/>
              <h3>Emily R.</h3>
              </div>
            <button className='test-btn'>Read Full Story</button>
            </div>
            </div>
            <div className='testimonials2-1'>
            <p className='para3'>I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor&apos;s guidance and feedback improved my design abilities significantly. I&apos;m grateful for this course!</p>
            <div className='testimonials2-2'>
              <div className='test-div'><Image className='test-img' src={"/images/test/test4.jpg"} alt='testimonial one' height={100} width={100}/>
              <h3>Michael K.</h3>
              </div>
            <button className='test-btn'>Read Full Story</button>
            </div>
            </div>
            </div>
            

        </div>

        <div className='pricing'>
        <h2 className='heading3'>Our Pricing</h2>
              <div className='pricing-inner'>
              <p className='para2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio deserunt rerum, animi velit sint sed dolorum assumenda tenetur iure facere nostrum dolore, modi mollitia iste vero praesentium esse quia?
              Iusto, placeat dolores tempore aspernatur fugiat recusandae quasi labore cum ea autem laboriosam enim quod eum blanditiis exercitationem excepturi alias iure ut! Voluptate atque dolore, mollitia facere dolorum perspiciatis nam.</p>
              <div className='btn-div2'>
              <button className='btn'>Monthly</button>
              <button className='btn'>Yearly</button>
              </div>
        </div>
        <div className='pricing2'>
          <div className='pricing2-1'>
            <h2 className='pricing-heading1'>Free Plan</h2>
            <h3 className='pricing-heading2'>$0<span className='pricing-span'>/month</span></h3>
            <div className='pricing2-2'>
            <h2 className='pricing-heading3'>Available Features</h2>
            <ul>
              <li className='list'><div className='check'><FaCheckSquare size={20}/></div>Access to selected free courses.</li>
              <li className='list'><div className='check'><FaCheckSquare size={20}/></div>Limited course materials and resources.</li>
              <li className='list'><div className='check'><FaCheckSquare size={20}/></div>Basic community support.</li>
              <li className='list'><div className='check'><FaCheckSquare size={20}/></div>No certification upon completion.</li>
              <li className='list'><div className='check'><FaCheckSquare size={20}/></div>Ad-supported platform.</li>
              <li className='list'><div className='check'><FaTimes size={20}/></div>Access to exclusive Pro Plan community forums.</li>
              <li className='list'><div className='check'><FaTimes size={20}/></div>Early access to new courses and updates.</li>
            </ul>
            <button className='price-btn'>Get started</button>
            </div>
          </div>
          <div className='pricing2-1'>
            <h2 className='pricing-heading1'>Pro Plan</h2>
            <h3 className='pricing-heading2'>$79<span className='pricing-span'>/month</span></h3>
            <div className='pricing2-2'>
            <h2 className='pricing-heading3'>Available Features</h2>
            <ul>
              <li className='list'><div className='check'><FaCheckSquare size={20}/></div>Unlimited access to all courses.</li>
              <li className='list'><div className='check'><FaCheckSquare size={20}/></div>Unlimited course materials and resources.</li>
              <li className='list'><div className='check'><FaCheckSquare size={20}/></div>Priority support from instructors.</li>
              <li className='list'><div className='check'><FaCheckSquare size={20}/></div>Course completion certificates.</li>
              <li className='list'><div className='check'><FaCheckSquare size={20}/></div>Ad-free experience.</li>
              <li className='list'><div className='check'><FaCheckSquare size={20}/></div>Access to exclusive Pro Plan community forums.</li>
              <li className='list'><div className='check'><FaCheckSquare size={20}/></div>Early access to new courses and updates.</li>
            </ul>
            <button className='price-btn'>Get started</button>
            </div>
          </div>
        </div>
        </div>

        <div className='faqs'>
        
              <div className='faqs-inner1'>
              <h2 className='heading3'>Frequently Asked Questions</h2>
              <p className='faqs-para'>Still you have any questions? Contact our Team via support@skillbridge.com</p>
              <button className='btn'>See All FAQ’s</button>
            </div>
            <div className='faqs-inner2'>
              <div className='faqs-inner2-1'>
                <h2 className='faqs-heading1'>Can I enroll in multiple courses at once?<div className='check'><FaTimes size={20}/></div></h2>
              <p className='faqs-para2'>Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.</p>
              <h2 className='faqs-heading2'>Enrollment Process for Different Courses<div className='round'><FaArrowRight size={20}/></div></h2>

              </div>
              <div className='faqs-inner2-2'>
              <h2 className='faqs-heading1'>What kind of support can I expect from instructors?<div className='check'><FaPlus size={20}/></div></h2>

              </div>

              <div className='faqs-inner2-2'>
              <h2 className='faqs-heading1'>Are the courses self-paced or do they have specific start and end dates?<div className='check'><FaPlus size={20}/></div></h2>

              </div>
            </div>
        </div>
        </div>
    )
}