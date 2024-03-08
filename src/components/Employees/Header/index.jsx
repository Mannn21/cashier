import HeaderAction from "./HeaderAction";

const Header = () => {
    return (
        <div className="w-full h-auto">
            <div className="w-full h-auto flex flex-col justify-start items-center gap-2">
                <div className="w-full h-auto flex justify-between items-start p-2">
                    <h1 className="text-xl font-semibold tracking-wide text-color-dark">Pegawai</h1>
                    <span className="text-base font-medium tracking-wide text-color-tersier3">Jumlah pegawai: 30</span>
                </div>
                <div className="w-full h-auto">
                    <HeaderAction />
                </div>
            </div>
        </div>
    )
}

export default Header;