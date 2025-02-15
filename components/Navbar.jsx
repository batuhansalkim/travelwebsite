import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import user_svg from "../public/user.svg";
import menu_svg from "../public/menu.svg";
function Navbar(){
    return(
        <nav className=" flexBetween max-container relative z-30 py-5">
            
            <Link href="/">
                <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}/>
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">{NAV_LINKS.map((item)=>(<Link className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" href={item.href} key={item.key}>{item.label}</Link>))}
            </ul>

            <div className="lg:flexCenter hidden">
               <Button type="button" title="Login" icon={user_svg} variant="btn_dark_green"/>
            </div>

            <Image src={menu_svg} alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden"/>
            
        </nav>
    )
}

export default Navbar;