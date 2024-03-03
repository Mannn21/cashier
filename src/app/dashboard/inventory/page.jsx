import HeaderInventory from "@/components/Inventory/HeaderInventory"
import InventoryTable from "@/components/Inventory/InventoryTable"

export default async function Inventory() {
    return (
        <div className="w-full h-auto">
            <div className="w-full h-auto flex flex-col gap-3 justify-start items-center">
                <HeaderInventory />
                <div className="w-full h-auto px-2">
                    <InventoryTable />
                </div>
            </div>
        </div>
    )
}