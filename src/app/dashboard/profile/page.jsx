import TodayGraphic from "@/components/Profile/TodayGraphic";
import Cards from "@/components/Profile/Cards";

export default function Profile() {
    return (
        <div className="w-full h-full p-2">
            <div className="w-full h-full flex flex-col gap-2 justify-start items-center">
                <div className="w-full h-auto flex flex-row justify-start items-center gap-3">
                    <div className="w-[300px] h-auto">
                        <TodayGraphic />
                    </div>
                    <div className="w-full h-[250px]">
                        <Cards />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}