import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
	return (
		<div className="w-full h-screen flex flex-row gap-2 items-start justify-start">
			<Sidebar />
			<div className="w-full h-full px-1 py-6">
				<Header />
				<div>{children}</div>
			</div>
		</div>
	);
}
