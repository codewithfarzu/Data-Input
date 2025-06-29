'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

const Menu = () => {
    const pathname = usePathname();

    return (
        <>
            <Link href="/" className={pathname==="/"? "active":""}>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/input" className={pathname==="/input"? "active":""}>Input</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/show" className={pathname==="/show"? "active":""}>Show</Link>
        </>
    );
}

export default Menu