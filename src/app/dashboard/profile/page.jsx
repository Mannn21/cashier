import TodayGraphic from "@/components/Profile/WorkTImer";
import BioCard from "@/components/Profile/BioCard";
import GraphicWrapper from "@/components/Profile/GraphicWrapper";

export default function Profile() {
    return (
        <div className="w-full h-full p-2">
            <div className="w-full h-full flex flex-col gap-2 justify-between items-start">
                <section className="w-full h-auto flex flex-row gap-3 justify-start items-center">
                    <BioCard />
                    <TodayGraphic />
                </section>
                <section className="w-full h-auto">
                    <GraphicWrapper />
                </section>
            </div>
        </div>
    )
}
