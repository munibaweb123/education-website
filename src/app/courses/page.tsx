
import "../css/courses.css"
import Image from "next/image"

export default function Courses(){
    return(
        <div>
    
            <div className="courses1">
                <h2 className="heading1">Online Courses on Design and Development</h2>
                <p className="para1">Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.</p>
            </div>
            <div className="courses2">
                <h2 className="course-heading">Web Design Fundamentals</h2>
                <div className="courses2-1">
                    <p className="course-para">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                <button className="course-btn">View Course</button>
                </div>
                <div className="courses2-img">
                    <Image className="img" src={"/images/courses/web1.jpg"} alt="web design" width={1000} height={1000}/>
                    <Image className="img" src={"/images/courses/web2.jpg"} alt="web design" width={1000} height={1000}/>
                    <Image className="img" src={"/images/courses/web3.jpg"} alt="web design" width={1000} height={1000}/>

                </div>
                <div className="courses2-2">
                   <div className="course-btn-div">
                   <button className="course-btn">4 weeks</button>
                   <button className="course-btn">Beginners</button>
                   </div>
                    <h2 className="course-heading">By John Smith</h2>

                </div>
                <div className="courses3">
                <h2 className="course-heading">Curriculum</h2>
                    <div className="courses3-1">
                    <div><h2 className="course-heading2">01</h2>
                    <p>Introduction to HTML</p></div>
                    <div><h2 className="course-heading2">02</h2>
                    <p>Styling with CSS</p></div>
                    <div><h2 className="course-heading2">03</h2>
                    <p>Introduction to Responsive Design</p></div>
                    <div><h2 className="course-heading2">04</h2>
                    <p>Design Principles for Web</p></div>
                    <div><h2 className="course-heading2">05</h2>
                    <p>Building a Basic Website</p></div>
                    </div>
                </div>
            </div>

            <div className="courses2">
                <h2 className="course-heading">Graphic Design for Beginners</h2>
                <div className="courses2-1">
                    <p className="course-para">Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.</p>
                <button className="course-btn">View Course</button>
                </div>
                <div className="courses2-img">
                    <Image className="img" src={"/images/courses/graphic1.jpg"} alt="web design" width={1000} height={1000}/>
                    <Image className="img" src={"/images/courses/graphic2.jpg"} alt="web design" width={1000} height={1000}/>
                    <Image className="img" src={"/images/courses/graphic3.jpg"} alt="web design" width={1000} height={1000}/>

                </div>
                <div className="courses2-2">
                   <div className="course-btn-div">
                   <button className="course-btn">10 weeks</button>
                   <button className="course-btn">Beginners</button>
                   </div>
                    <h2 className="course-heading">BBy Sarah Thompson</h2>

                </div>
                <div className="courses3">
                <h2 className="course-heading">Curriculum</h2>
                    <div className="courses3-1">
                    <div><h2 className="course-heading2">01</h2>
                    <p>Introduction to Graphic Design</p></div>
                    <div><h2 className="course-heading2">02</h2>
                    <p>Typography and Color Theory</p></div>
                    <div><h2 className="course-heading2">03</h2>
                    <p>Layout Design and Composition</p></div>
                    <div><h2 className="course-heading2">04</h2>
                    <p>Image Editing and Manipulation</p></div>
                    <div><h2 className="course-heading2">05</h2>
                    <p>Designing for Print and Digital Media</p></div>
                    </div>
                </div>
            </div>
        </div>
    )

}