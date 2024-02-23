import InvoiceCard from "./InvoiceCard";

const Invoice = () => {
    return (
        <div className="w-full h-auto">
            <div className="w-full h-auto flex flex-col gap-1 justify-start items-center">
                <div className="w-full h-auto text-center">
                    <h2 className="text-lg font-semibold tracking-wide">Pesanan</h2>
                </div>
                <div className="w-full h-auto flex flex-col gap-1 justify-start items-center">
                    <InvoiceCard />
                    <InvoiceCard />
                    <InvoiceCard />
                </div>
                <div className="w-full h-auto flex flex-col gap-1 mt-4">
                    <div className="w-full h-auto text-center">
                        <h3 className="text-base font-semibold tracking-wide">Pembayaran</h3>
                    </div>
                    <div className="w-full h-auto flex flex-col gap-1">
                        <div className="w-full h-auto flex flex-row justify-between items-center p-1">
                            <h4>Sub Total</h4>
                            <span>Rp 200.000</span>
                        </div>
                        <div className="w-full h-auto flex flex-row justify-between items-center p-1">
                            <h4>Tax</h4>
                            <span>Rp 5.000</span>
                        </div>
                        <div className="w-full h-auto flex flex-row justify-between items-center p-1">
                            <h4>Discount</h4>
                            <span>Rp 30.000</span>
                        </div>
                        <div className="w-full h-auto flex flex-row justify-between items-center p-1">
                            <h4>Total</h4>
                            <span>Rp 225.000</span>
                        </div>
                    </div>
                    <div className="w-full h-auto flex justify-center items-center">
                        <button type="button" className="px-4 py-2 text-base font-medium text-color-primer bg-color-secondary1 cursor-pointer rounded-xl hover:bg-color-secondary1hover transition-all ease-in-out duration-300">Bayar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoice;