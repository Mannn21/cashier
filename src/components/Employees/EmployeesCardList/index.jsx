import EmployeeCard from "./EmployeeCard";

const EmployeesCardList = () => {
    return (
        <div className="w-full h-auto p-2">
            <div className="w-full h-auto grid grid-cols-3">
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
            </div>
        </div>
    )
}

export default EmployeesCardList;