import NavbarTable from "../NavbarTables";
import AddTable from "../AddTable";

const HeaderTables = () => {
    return (
        <div className="w-full h-auto">
			<div className="w-full h-auto flex flex-col gap-2 justify-start items-center">
				<div className="w-full h-auto">
					<AddTable />	
				</div>
				<div className="w-full h-auto">
					<NavbarTable />
				</div>
			</div>
		</div>
    )
}

export default HeaderTables;