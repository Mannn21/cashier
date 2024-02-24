const Dropdown = () => {
	return (
		<div className="w-[250px] h-auto p-2 dropdown">
			<div className="w-full h-auto p-2">
				<div className="w-full h-auto flex flex-col gap-2 justify-start items-center">
					<div className="w-full h-auto text-center">
						<h3 className="text-lg font-semibold tracking-wide">Filter Data</h3>
					</div>
					<div className="w-full h-auto flex flex-col gap-2 justify-start items-center">
						<div className="w-full flex flex-col gap-2">
							<label htmlFor="category" className="font-semibold tracking-wide">Kategori</label>
							<select id="category">
								<option value="">Semua Menu</option>
								<option value="">Makanan</option>
								<option value="">Minuman</option>
								<option value="">Mie dan Pasta</option>
								<option value="">Cemilan</option>
							</select>
						</div>
						<div className="w-full flex flex-col gap-2">
							<label htmlFor="price" className="font-semibold tracking-wide">Harga</label>
							<select id="price">
								<option value="">Default</option>
								<option value="">Tertinggi - Terendah</option>
								<option value="">Terendah - Tertinggi</option>
							</select>
						</div>
						<div className="w-full flex flex-col gap-2">
							<label htmlFor="stock" className="font-semibold tracking-wide">Stock</label>
							<select id="stock">
								<option value="">Default</option>
								<option value="">Terbesar - Terkecil</option>
								<option value="">Terkecil - Terbesar</option>
							</select>
						</div>
						<div className="w-full flex flex-col gap-2">
							<label htmlFor="discount" className="font-semibold tracking-wide">Diskon</label>
							<select id="discount">
								<option value="">Default</option>
								<option value="">Tertinggi - Terendah</option>
								<option value="">Tertinggi - Terendah</option>
							</select>
						</div>
					</div>
                    <div className="w-full h-auto flex flex-row gap-3 justify-end items-center">
                        <button className="px-2 py-1 bg-color-accent rounded-md text-sm font-semibold text-color-primer hover:bg-color-accentHover ease-in-out duration-300 transition-all">Reset</button>
                        <button className="px-2 py-1 bg-color-secondary1 rounded-md text-sm font-semibold text-color-primer hover:bg-color-secondary1hover ease-in-out duration-300 transition-all">Simpan</button>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
