import OrdersGraphic from "./OrdersGraphic";
import WorksGraphic from "./WorksGraphic";

const GraphicWrapper = () => {
	return (
		<div className="w-full h-[400px] rounded-md bg-color-primer p-3 box-border">
			<div className="w-full h-auto flex flex-row gap-1">
				<div className="w-1/2 h-full">
					<div className="w-full h-[380px] flex flex-col gap-3">
                        <h2 className="text-base font-semibold tracking-wide text-color-tersier3">Grafik Pesanan Dalam 7 Hari</h2>
						<OrdersGraphic />
					</div>
				</div>
				<div className="w-1/2 h-full">
					<div className="w-full h-[380px] flex flex-col gap-3">
                        <h2 className="text-base font-semibold tracking-wide text-color-tersier3">Grafik Jam Kerja Dalam 7 Hari</h2>
						<WorksGraphic />
					</div>
				</div>
			</div>
		</div>
	);
};

export default GraphicWrapper;
