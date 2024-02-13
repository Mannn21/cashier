import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
	return (
		<div>
			<Sidebar />
			<div>{children}</div>
		</div>
	);
}
