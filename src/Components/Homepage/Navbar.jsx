
import Link from "next/link";
import { Home, Clock, BarChart3, Users } from "lucide-react";
import MyNavLink from "./MyNavLink";


const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/timeline", label: "Timeline", icon: Clock },
    { to: "/stats", label: "Stats", icon: BarChart3 },
];

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 py-3 w-11/12 mx-auto">
            <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center gap-1">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg">
                        <Users className="h-6 w-6 " />
                    </div>
                    <span className="text-2xl font-bold">
                        Kin<span className="text-[#2aa078]">Keeper</span>
                    </span>
                </Link>
                <ul className="hidden md:flex text-white justify-between gap-6 items-center">
                    {navLinks.map((item, index) => (
                        <MyNavLink key={index} href={item.to}>
                           <item.icon className="h-5 w-5" />
                           {item.label}
                        </MyNavLink>
                    ))}
                </ul>
            </div>
           
        </nav>
    );
};

export default Navbar;