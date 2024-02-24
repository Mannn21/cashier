import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

const AddInventory = () => {
	return (
		<div className="w-full h-auto">
			<div className="w-full h-auto p-2 flex flex-row justify-between items-center">
				<div className="w-1/2 h-auto flex flex-row justify-start items-center">
					<h1>Semua Produk (20)</h1>
				</div>
				<div className="w-1/2 h-auto flex flex-row justify-end items-center">
					<button className="flex flex-row justify-start items-center gap-1 p-2 rounded-md bg-color-secondary2 text-color-primer hover:bg-color-secondary2hover ease-in-out duration-300 transition-all">
						<Icon path={mdiPlus} size={1} />
						Tambah Produk
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddInventory;
