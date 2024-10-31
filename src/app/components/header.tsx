"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../css/header.css";
import { AiOutlineArrowRight, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close the menu when a link is clicked
    };

    return (
        <header className="header">
            <div className="sale-div">
                <p className="para">Free Courses 🌟 Sale Ends Soon, Get It Now</p>
                <AiOutlineArrowRight />
            </div>

            <div className="nav">
                <nav className="nav-1">
                    <div className="logo">
                        <Image src={"/images/logo.png"} alt="logo" height={100} width={100} />
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </div>
                    <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
                        <li className="link-list"><Link className="link" href="/" onClick={handleLinkClick}>Home</Link></li>
                        <li className="link-list"><Link className="link" href="/courses" onClick={handleLinkClick}>Courses</Link></li>
                        <li className="link-list"><Link className="link" href="/about" onClick={handleLinkClick}>About Us</Link></li>
                        <li className="link-list"><Link className="link" href="/pricing" onClick={handleLinkClick}>Pricing</Link></li>
                        <li className="link-list"><Link className="link" href="/contact" onClick={handleLinkClick}>Contact</Link></li>
                    </ul>
                </nav>
                <div className="btn-div">
                    <button className="btn">Sign Up</button>
                    <button className="btn">Login</button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="mobile-menu">
                    <AiOutlineClose className="close-icon" onClick={toggleMenu} />
                    <ul className="mobile-nav-list">
                        <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
                        <li><Link href="/courses" onClick={handleLinkClick}>Courses</Link></li>
                        <li><Link href="/about" onClick={handleLinkClick}>About Us</Link></li>
                        <li><Link href="/pricing" onClick={handleLinkClick}>Pricing</Link></li>
                        <li><Link href="/contact" onClick={handleLinkClick}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
}
