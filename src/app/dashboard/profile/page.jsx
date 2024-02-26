import TodayGraphic from "@/components/Profile/TodayGraphic"

export default function Profile() {
    return (
        <div className="w-full h-full p-2">
            <div className="w-full h-full flex flex-col gap-2 justify-start items-center">
                <div className="w-full h-auto flex flex-row justify-start items-center gap-3">
                    <div className="w-[300] h-auto">
                        <TodayGraphic />
                    </div>
                    <div></div>
                </div>
                <div></div>
            </div>
        </div>
    )
}