/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"gradient-with-alpha":
					"linear-gradient(90deg, rgba(249, 118, 157, 1), rgba(249, 118, 157, 0.5))",
			},
		},
		linearGradientColors: {},
		colors: {
			color: {
				primer: "#ffffff",
				secondary1: "#4169E1",
				secondary1hover: "#2E417A",
				secondary2: "#3CB371",
				secondary2hover: "#2C8A6F",
				tersier1: "#F5F5F5",
				tersier2: "#A9A9A9",
				tersier3: "#555555",
				accent: "#FF0000 ",
				accentHover: "#CC0000 ",
				dark: "#000000"
			},
		},
	},
	plugins: [],
};