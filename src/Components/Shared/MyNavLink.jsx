"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({href, onClick, children}) => {
    const pathname = usePathname();
    const normalizedHref = href.startsWith("/") ? href : `/${href}`;
    const isActive = pathname === normalizedHref;
    return (
        <Link
            href={normalizedHref}
            onClick={onClick}
            className={`font-semibold flex gap-1 px-4 py-2 rounded-xl ${isActive ? "bg-neutral" : ""}`}
        >
            {children}
        </Link>
    );
};

export default MyNavLink;