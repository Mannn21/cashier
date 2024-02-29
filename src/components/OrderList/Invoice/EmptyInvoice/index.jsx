import Icon from "@mdi/react";
import { mdiPackageVariant } from "@mdi/js";

const EmptyInvoice = () => {
	return (
		<div className="w-full h-auto p-2">
			<div className="w-full h-auto flex flex-col justify-center items-center gap-3 text-color-tersier3">
				<Icon path={mdiPackageVariant} size={5} />
				<span className="text-base font-semibold tracking-wide">
					Silahkan pilih menu!
				</span>
			</div>
		</div>
	);
};

export default EmptyInvoice;