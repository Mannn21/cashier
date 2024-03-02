import HeaderTables from "@/components/Tables/HeaderTables"
import ListTables from "@/components/Tables/ListTables"
import { getTables } from "@/services/getTableDatas"

export default async function Tables() {
    const response = await getTables();
    const tables = response.message; 
    
    return (
        <div className="w-full h-auto">
            <div className="w-full h-auto flex flex-col gap-3 justify-start items-center">
                <HeaderTables />
                <div className="w-full h-auto px-2">
                    <ListTables tables={tables} />
                </div>
            </div>
        </div>
    )
}