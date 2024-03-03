import CardTable from "../CardTable"
import { sortDatas } from "@/utils/sortDatas"

const ListTables = ({tables}) => {
    const sortTables = sortDatas(tables)
    
    return (
        <div className="w-full h-auto py-2">
            <div className="grid grid-cols-4 gap-x-8 gap-y-10">
                {
                    sortTables?.map((data, index) => {
                        return (
                            <div key={index}>
                                <CardTable data={data} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListTables