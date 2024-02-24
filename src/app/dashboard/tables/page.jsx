import HeaderTables from "@/components/Tables/HeaderTables"

export default function Tables() {
    return (
        <div className="w-full h-auto">
            <div className="w-full h-auto flex flex-col gap-3 justify-start items-center">
                <HeaderTables />
                <div className="w-full h-auto px-2">
                    {/* <InventoryTable /> */}
                </div>
            </div>
        </div>
    )
}