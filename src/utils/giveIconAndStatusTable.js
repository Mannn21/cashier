import {
	mdiPencilOutline,
	mdiDeleteOutline,
	mdiPartyPopper,
	mdiAccountSupervisor,
	mdiAccountGroup,
	mdiAccount,
	mdiAccountTie,
} from "@mdi/js";

export const giveIcon = (data) => {
	let icon;
	if (data.category === "personal") icon = mdiAccount;
	if (data.category === "couple") icon = mdiAccountSupervisor;
	if (data.category === "family") icon = mdiAccountGroup;
	if (data.category === "private") icon = mdiAccountTie;
	if (data.category === "party") icon = mdiPartyPopper;
	return icon;
}

export const giveStatus = (data) => {
    let status;
	if (!data.status) status = "Tersedia";
	if (data.status) status = "Sedang Digunakan";
	return status;
}