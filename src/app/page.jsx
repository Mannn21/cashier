export default function Home() {
  return (
    <div className="w-screen h-screen box-border bg-white">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-96 h-auto px-1 py-3 rounded-xl shadow-2xl flex flex-col justify-start items-center gap-3">
          <div className="w-full h-auto flex justify-center items-center">
            <h1 className="text-3xl font-bold tracking-wide text-black p-2">Login Cashier</h1>
          </div>
          <div className="w-full h-auto flex flex-col gap-2 justify-start items-center">
            <div className="w-full h-auto p-1 flex flex-col gap-1 justify-start items-start">
              <label htmlFor="email" className="text-base font-medium tracking-wide text-black">Email</label>
              <div className="w-full py-1 border border-gray-500 text-gray-800 px-1 rounded-md hover:border-blue-500 focus:border-blue-700">
                <input type="email" className="outline-none border-none w-full h-full bg-transparent" placeholder="Masukkan email terdaftar" />
              </div>
            </div>
            <div className="w-full h-auto p-1 flex flex-col gap-1 justify-start items-start">
              <label htmlFor="password" className="text-base font-medium tracking-wide text-black">Password</label>
              <div className="w-full py-1 border border-gray-500 text-gray-800 px-1 rounded-md hover:border-blue-500 focus:border-blue-700">
                <input type="password" className="outline-none border-none w-full h-full bg-transparent" placeholder="*******" />
              </div>
            </div>
          </div>
          <div className="w-full h-auto flexjustify-center items-center mt-4 pb-3">
            <button type="button" className="w-full py-2 text-xl font-bold tracking-wide flex justify-center items-center bg-green-600 hover:bg-green-700">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}