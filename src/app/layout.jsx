import { Montserrat } from "next/font/google";
import { ReduxProvider } from "./provider";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
	title: "Cashier Apps",
	description: "Cashier app by next js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
