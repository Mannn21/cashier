import Image from "next/image";
import { formattedDateTime } from "@/utils/formattedDateTime";

const EmployeeCard = ({ data }) => {
	return (
		<div className="w-full h-auto">
			<div className="w-full h-auto p-2 bg-color-primer rounded-md shadow-md">
				<div className="w-full h-auto p-1 flex flex-col gap-3 justify-start items-center">
					<div className="w-full h-auto flex flex-row justify-start items-center gap-2">
						<div className="relative w-[80px] h-[80px] rounded-full overflow-hidden bg-color-primer ring-2 ring-color-primer">
							<Image
								src={data.image.image_URI}
								alt="Profile"
								priority
								fill
								sizes="100%"
								className="object-center object-cover w-full h-full"
							/>
						</div>

						<div className="w-[calc(100%-80px)] h-auto flex flex-col justify-start items-start gap-1">
							<h3 className="text-base font-semibold tracking-wide text-color-dark">
								{data.name}
							</h3>
							<span className="text-sm font-medium tracking-wide text-color-tersier3">
								{data.role}
							</span>
						</div>
					</div>
					<div className="w-full h-auto flex flex-col justify-start items-start gap-3">
						<div className="w-full h-auto flex flex-row gap-1 justify-start items-center">
							<h4 className="text-sm font-semibold tracking-wide text-color-dark">
								Id Pegawai:{" "}
							</h4>
							<span className="text-sm font-semibold tracking-wide text-color-tersier3">
								{data.id.slice(0, 17)}{"..."}
							</span>
						</div>
						<div className="w-full h-auto flex flex-row gap-1 justify-start items-center">
							<h4 className="text-sm font-semibold tracking-wide text-color-dark">
								Email:{" "}
							</h4>
							<span className="text-sm font-semibold tracking-wide text-color-tersier3">
								{
									data.email.length > 22 ? (data.email.slice(0, 22) + "...") : (data.email)
								}
							</span>
						</div>
						<div className="w-full h-auto flex flex-row gap-1 justify-start items-center">
							<h4 className="text-sm font-semibold tracking-wide text-color-dark">
								Mulai Bekerja:{" "}
							</h4>
							<span className="text-sm font-semibold tracking-wide text-color-tersier3">
								{formattedDateTime(data.startedAt)}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmployeeCard;
