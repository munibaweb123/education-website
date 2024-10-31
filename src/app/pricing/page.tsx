import "../css/pricing.css"
import { FaCheckSquare,FaTimes,FaArrowRight,FaPlus } from 'react-icons/fa';
export default function Pricing(){
    return(
        <div className="pricing">
           
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

        {/* faqs */}
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