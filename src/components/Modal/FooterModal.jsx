const FooterModal = ({handleCartModal, handlePaymentModal}) => {
	return (
		<div className="w-full h-auto flex flex-row gap-4 justify-center items-center">
			<button
				type="button"
				onClick={handleCartModal}
				className="w-auto h-auto text-center px-2 py-1 text-color-primer text-lg font-semibold bg-color-accent rounded-md hover:bg-color-accentHover transition-all ease-in-out duration-300">
				Batal
			</button>
			<button
				type="button"
				onClick={handlePaymentModal}
				className="w-auto h-auto text-center px-2 py-1 text-color-primer text-lg font-semibold bg-color-secondary1 rounded-md hover:bg-color-secondary1hover transition-all ease-in-out duration-300">
				Lanjut
			</button>
		</div>
	);
};

export default FooterModal;
