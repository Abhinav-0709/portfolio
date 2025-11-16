"use client"; 

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full h-20 bg-black/50 backdrop-blur-md border-b border-white/50 z-50">
                <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4">
                    <Link href="/" className="text-2xl text-white font-bold   mask-b-from-neutral-700">
                        Abhinav
                    </Link>

                    <div className="hidden md:flex gap-6 text-gray-400">
                        <Link
                            href="#project"
                            className="hover:text-white transition-colors"
                        >
                            Projects
                        </Link>
                        <Link href="#about" className="hover:text-white transition-colors">
                            About
                        </Link>
                        <Link
                            href="#contact"
                            className="hover:text-white transition-colors"
                        >
                            Contact
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-sm text-gray-200">Open to Work</span>
                        </div>
                        <Button variant="default">Let's Talk</Button>
                    </div>

                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu className="h-6 w-6 text-white" />
                        </Button>
                    </div>
                </div>
            </nav>

            <div
                className={`
          md:hidden fixed top-0 right-0 h-screen w-3/4 max-w-sm
          bg-black/80 backdrop-blur-lg
          shadow-xl z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
            >
                <div className="flex justify-end p-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={closeMenu}
                        aria-label="Close menu"
                    >
                        <X className="h-6 w-6 text-white" />
                    </Button>
                </div>

                <div className="flex flex-col items-center gap-8 mt-10">
                    <Link
                        href="#project"
                        className="text-2xl text-gray-300 hover:text-white transition-colors"
                        onClick={closeMenu}
                    >
                        Projects
                    </Link>
                    <Link
                        href="#about"
                        className="text-2xl text-gray-300 hover:text-white transition-colors"
                        onClick={closeMenu}
                    >
                        About
                    </Link>
                    <Link
                        href="#contact"
                        className="text-2xl text-gray-300 hover:text-white transition-colors"
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>

                    <Button variant="default" size="lg" className="mt-6" onClick={closeMenu}>
                        Let's Talk
                    </Button>
                </div>
            </div>

            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={closeMenu}
                />
            )}
        </>
    );
};

export default Navbar;