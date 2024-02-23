import HistoryHeader from "@/components/History/HistoryHeader"
import TableHistoryList from "@/components/History/TableHistoryList"

export default function History() {
    return (
        <div>
            <div className="w-full h-auto flex flex-col gap-4">
                <HistoryHeader />
                <div className="w-full h-auto px-2">
                    <TableHistoryList />
                </div>
            </div>
        </div>
    )
}