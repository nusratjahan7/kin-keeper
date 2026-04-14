'use client'
import Link from "next/link";
import { Home, Clock, BarChart3, Users } from "lucide-react";
import MyNavLink from "./MyNavLink";
import { FaBars, FaTimes } from "react-icons/fa"; 
import { useState } from "react";

const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/timeline", label: "Timeline", icon: Clock },
    { to: "/stats", label: "Stats", icon: BarChart3 },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); 

    return (
        <nav className="sticky top-0 z-50 bg-base-100/70 backdrop-blur-2xl py-3 px-8">
            <div className="flex justify-between items-center">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-1">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg">
                        <Users className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-2xl text-white font-bold">
                        Keen<span className="text-[#2aa078]">Keeper</span>
                    </span>
                </Link>

                {/* Hamburger Icon for Mobile */}
                <button
                    className="md:hidden text-2xl p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex text-white justify-between gap-6 items-center">
                    {navLinks.map((item, index) => (
                        <MyNavLink key={index} href={item.to}>
                            <item.icon className="h-5 w-5" />
                            {item.label}
                        </MyNavLink>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col  px-4 py-4 gap-3">
                    {navLinks.map((item, index) => (
                        <MyNavLink key={index} href={item.to} onClick={() => setMenuOpen(false)}>
                            <item.icon className="h-5 w-5" />
                            {item.label}
                        </MyNavLink>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;