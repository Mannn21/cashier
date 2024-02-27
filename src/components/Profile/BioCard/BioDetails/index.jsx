const BioDetails = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full h-auto flex flex-col gap-1 justify-center items-center">
                <div className="w-full h-auto flex flex-col gap-1 justify-start items-start">
                    <h2 className="text-2xl font-semibold tracking-wide text-color-dark">Aimanurrofi</h2>
                    <span className="text-lg font-semibold tracking-wide text-color-dark">Kasir</span>
                </div>
                <hr className="w-full text-color-tersier3" />
                <div className="w-full h-auto grid grid-cols-3 gap-x-3">
                    <section className="w-auto h-full flex flex-col justify-start items-center gap-1">
                        <div className="w-full h-auto flex flex-col gap-1">
                            <h4 className="text-sm font-medium text-color-tersier3 tracking-wide">Nama Perusahaan</h4>
                            <span className="text-base font-semibold text-color-dark tracking-wide">Fies Restaurant</span>
                        </div>
                        <div className="w-full h-auto flex flex-col gap-1">
                            <h4 className="text-sm font-medium text-color-tersier3 tracking-wide">Tanggal Masuk</h4>
                            <span className="text-base font-semibold text-color-dark tracking-wide">30 Mei 2023</span>
                        </div>
                        <div className="w-full h-auto flex flex-col gap-1">
                            <h4 className="text-sm font-medium text-color-tersier3 tracking-wide">Gaji Pokok</h4>
                            <span className="text-base font-semibold text-color-dark tracking-wide">Rp. 5.000.000</span>
                        </div>
                    </section>
                    <section className="w-auto h-full flex flex-col justify-start items-center gap-1">
                        <div className="w-full h-auto flex flex-col gap-1">
                            <h4 className="text-sm font-medium text-color-tersier3 tracking-wide">Tanggal Lahir</h4>
                            <span className="text-base font-semibold text-color-dark tracking-wide">21 Oktober 2002</span>
                        </div>
                        <div className="w-full h-auto flex flex-col gap-1">
                            <h4 className="text-sm font-medium text-color-tersier3 tracking-wide">Alamat Domisili</h4>
                            <span className="text-base font-semibold text-color-dark tracking-wide">Cijengkol, Setu</span>
                        </div>
                        <div className="w-full h-auto flex flex-col gap-1">
                            <h4 className="text-sm font-medium text-color-tersier3 tracking-wide">Email</h4>
                            <span className="text-base font-semibold text-color-dark tracking-wide">aimannurrofi21@email.com</span>
                        </div>
                    </section>
                    <section className="w-auto h-full flex flex-col justify-start items-center gap-1">
                        <div className="w-full h-auto flex flex-col gap-1">
                            <h4 className="text-sm font-medium text-color-tersier3 tracking-wide">Rata-Rata Jam Kerja</h4>
                            <span className="text-base font-semibold text-color-dark tracking-wide">8 Jam</span>
                        </div>
                        <div className="w-full h-auto flex flex-col gap-1">
                            <h4 className="text-sm font-medium text-color-tersier3 tracking-wide">Rata-Rata Pesanan</h4>
                            <span className="text-base font-semibold text-color-dark tracking-wide">120</span>
                        </div>
                        <div className="w-full h-auto flex flex-col gap-1">
                            <h4 className="text-sm font-medium text-color-tersier3 tracking-wide">Jumlah Tidak Hadir</h4>
                            <span className="text-base font-semibold text-color-dark tracking-wide">2 Hari</span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default BioDetails;
