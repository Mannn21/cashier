const PaymentModal = () => {
	return (
		<div className="w-full h-auto">
			<div className="w-full h-auto flex flex-col">
				<div>
					<label htmlFor="costumer">Nama Pelanggan</label>
					<input type="text" placeholder="Masukkan nama pelanggan..." />
				</div>
				<div>
					<label htmlFor="payment">Pilih Jumlah Pembayaran</label>

				</div>
				<div>
					<label htmlFor="costumer">Nama Pelanggan</label>
					<input type="text" placeholder="Masukkan nama pelanggan..." />
				</div>
			</div>
		</div>
	);
};

export default PaymentModal;
