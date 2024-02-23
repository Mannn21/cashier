"use client";

import { useState } from "react";
import Icon from "@mdi/react";
import { mdiCalendarMonthOutline, mdiWindowClose } from "@mdi/js";
import SearchHistory from "../SearchHistory";
import FilterByDate from "../FilterByDate";

const HistoryHeader = () => {
	const [isCalendarOpen, setCalendarOpen] = useState(false);

	const handleCalendar = () => {
		setCalendarOpen(!isCalendarOpen);
	};

	return (
		<div className="w-full h-auto p-2">
			<div className="w-full h-auto flex flex-row justify-around items-center">
				<div className="w-1/2 h-auto flex flex-row justify-start items-center gap-3">
					<button className="p-2 rounded-md bg-color-secondary1 text-color-primer hover:bg-color-secondary1hover ease-in-out duration-300 transition-all">Lihat Semua</button>
					<div className="relative">
						{!isCalendarOpen ? (
							<div
								className="w-auto h-auto p-2 rounded-md bg-color-secondary2 cursor-pointer hover:bg-color-secondary2hover text-color-primer ease-in-out duration-300 transition-all"
								onClick={handleCalendar}>
								<Icon path={mdiCalendarMonthOutline} size={1} />
							</div>
						) : (
							<div className="absolute">
								<div className="w-auto h-auto cursor-pointer p-2 rounded-full text-color-primer bg-color-accent hover:bg-color-accentHover absolute -top-4 -right-8 ease-in-out duration-300 transition-all" onClick={handleCalendar}>
									<Icon
										path={mdiWindowClose}
										size={0.7}
									/>
								</div>
								<FilterByDate />
							</div>
						)}
					</div>
				</div>
				<div className="w-1/2 h-auto flex flex-row justify-end items-center">
					<SearchHistory />
				</div>
			</div>
		</div>
	);
};

export default HistoryHeader;
