import TodayGraphic from "@/components/Profile/WorkTImer";
import BioCard from "@/components/Profile/BioCard";
import GraphicWrapper from "@/components/Profile/GraphicWrapper";
import HistoryOrders from "@/components/Profile/HistoryOrders";

export default function Profile() {
    return (
        <div className="w-full h-full p-2">
            <div className="w-full h-full flex flex-row gap-2 justify-between items-start">
                <section className="w-[calc(100% - 300px)] h-auto flex flex-col gap-3 justify-start items-center">
                    <BioCard />
                    <GraphicWrapper />
                </section>
                <section className="w-[300px] h-auto flex flex-col gap-3 justify-start items-center">
                    <TodayGraphic />
                    <div className="w-full h-full">
                        <HistoryOrders />    
                    </div>
                </section>
            </div>
        </div>
    )
}
