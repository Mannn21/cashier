const BackdropOverlay = () => {
	return (
		<div className="fixed w-full h-screen top-0 left-0 bottom-0 right-0 bg-color-dark bg-opacity-75 z-20"></div>
	);
};

const ModalOverlay = ({ children }) => {
	// Gunakan prop children
	return (
		<div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-30">
			<div className="bg-white p-4 rounded-lg shadow-lg text-gray-900 mx-2">
				{children}
			</div>
		</div>
	);
};


const Modal = props => {
	return (
		<>
			<BackdropOverlay />
			<ModalOverlay>{props.children}</ModalOverlay>
		</>
	);
};
export default Modal;
