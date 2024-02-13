import Image from "next/image"
import { sidebarData } from "@/data/sidebarData";
import Logo from "@/assets/logo.png"

const Sidebar = () => {
    return (
        <div className="w-32 h-screen">
            <div className="w-full h-full">
                <div>
                    <Image src={Logo} width={100} height={100} alt="logo" />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;