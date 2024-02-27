import ProfileImg from "./ProfileImg";
import BioDetails from "./BioDetails";

const BioCard = () => {
    return (
        <div className="w-[calc(100% - 300px)] h-[260px] rounded-md shadow-md bg-color-primer">
            <div className="w-full h-full flex flex-row items-center gap-3 p-2">
                <div className="w-[180px] h-full rounded-md overflow-hidden">
                    <ProfileImg />
                </div>
                <div className="w-[calc(100%-180px)] h-full p-1">
                    <BioDetails />
                </div>
            </div>
        </div>
    )
}

export default BioCard;