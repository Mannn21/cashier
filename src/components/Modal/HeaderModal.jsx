import Image from "next/image";
import { dateFormatter } from "@/utils/dateFormatter";

const HeaderModal = () => {
	return (
		<div className="w-full h-auto flex flex-row justify-between items-center px-3">
			<div className="w-auto h-full flex flex-col gap-2">
				<h3 className="text-3xl font-bold tracking-wide text-color-dark">
					Invoice
				</h3>
				<span className="text-base font-medium tracking-wide">
					Nama Kasir: Aimanurrofi
				</span>
				<span className="text-base font-medium tracking-wide">
					Tanggal Pesanan: {dateFormatter()}
				</span>
			</div>
			<Image src="/logo.png" width={100} height={100} alt="Logo Fies" />
		</div>
	);
};

export default HeaderModal;
