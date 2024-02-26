import ProfileCard from "../ProfileCard";
import { cardDataProfile } from "@/data/cardDataProfile";

const Cards = () => {
    return (
        <div className="w-full h-full p-2">
            <div className="w-full h-full grid grid-cols-2 gap-2">
                {
                    cardDataProfile.map((data, index) => {
                        return (
                            <ProfileCard key={index} data ={data} />
                        )
                    })
                }
            </div> 
        </div>
    )
}

export default Cards