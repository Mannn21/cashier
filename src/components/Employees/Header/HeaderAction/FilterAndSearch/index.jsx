import EmployeesFilter from "./EmployeesFilter";
import EmployeesSearch from "./EmployeesSearch";

const FilterAndSearch = () => {
    return (
        <div className="w-full h-auto">
            <div className="w-full h-auto p-2 flex flex-row justify-between items-center gap-3">
                <div className="w-1/2 h-auto">
                    <EmployeesSearch />
                </div>
                <div className="w-1/2 h-auto">
                    <EmployeesFilter />
                </div>
            </div>
        </div>
    )
}

export default FilterAndSearch;