import HeaderInventory from "@/components/Inventory/HeaderInventory"
import InventoryTable from "@/components/Inventory/InventoryTable"
import { getFoods, getDrinks } from "@/services/getMenuDatas"

export default async function Inventory() {
    const foodsResponse = await getFoods();
    const drinksResponse = await getDrinks();

    const foods = foodsResponse.message;
    const drinks = drinksResponse.message;
    
    return (
        <div className="w-full h-auto">
            <div className="w-full h-auto flex flex-col gap-3 justify-start items-center">
                <HeaderInventory />
                <div className="w-full h-auto px-2">
                    <InventoryTable foods={foods} drinks={drinks} />
                </div>
            </div>
        </div>
    )
}