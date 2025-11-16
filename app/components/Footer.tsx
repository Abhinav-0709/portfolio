"use client";

import React from "react";
import Container from "./Container";
import AnimatedTitle from "./AnimatedTitle";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";


const Footer = () => {
    const socialLinks = [
        {
            icon: <FaGithub size={20} />,
            url: "https://github.com/Abhinav-0709",
            label: "GitHub",
        },
        {
            icon: <FaLinkedin size={20} />,
            url: "https://linkedin.com/in/abhinav-gupta-a2a103334",
            label: "LinkedIn",
        },
        {
            icon: <FaTwitter size={20} />,
            url: "https://twitter.com/@Abhinav0247",
            label: "Twitter",
        },
    ];

    const contactInfo = [
        {
            icon: <Mail size={20} />,
            text: "mrxsahil247@gmail.com",
            url: "mailto:mrxsahil247@gmail.com",
        },
        {
            icon: <Phone size={20} />,
            text: "+91 87577 36901",
            url: "tel:+918757736901",
        },
    ];

    return (
        <footer id="footer" className=" bg-black text-white py-24 ">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="text-white/60 hover:text-white transition-colors"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        {contactInfo.map((info) => (
                            <a
                                key={info.text}
                                href={info.url}
                                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                            >
                                {info.icon}
                                <span>{info.text}</span>
                            </a>
                        ))}
                    </div>

                    <span className="text-white/60">© ABHINAV 2025</span>
                </div>

                <div className="w-full h-px bg-white/20 my-12" />

                <div className="flex justify-center item-center gap-10">
                    <AnimatedTitle text="ABHINAV" />

                </div>

            </Container>
        </footer>
    );
};

export default Footer;