import EmployeesCardList from "@/components/Employees/EmployeesCardList"
import Header from "@/components/Employees/Header"

export default function Employee() {
    return (
        <div className="w-full h-auto">
            <div className="w-full h-auto flex flex-col justify-start items-center gap-3">
                <Header />
                <EmployeesCardList />
            </div>
        </div>
    )
}