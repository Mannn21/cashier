export const currentTime = () => {
	const currentTime = new Date();

	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();
	const seconds = currentTime.getSeconds();

	const formattedTime = `${hours}:${minutes}:${seconds}`;
    return formattedTime;
};
