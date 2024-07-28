import logo from "./logo.svg"; //Декларативный стиль
import "./App.css"; //Декларативный стиль
import { createElement } from "react";

export const App = () => {
	//Императивный стиль
	const year = new Date().getFullYear();
	return (
		//Декларативный стиль
		createElement(
			`div`,
			{ className: `App-header` },
			createElement(
				`header`,
				{ className: "App-header" },
				createElement(`img`, {
					src: `${logo}`,
					className: "App-logo",
					alt: `logo`,
				}),
				createElement(
					`p`,
					null,
					`Edit `,
					createElement(`code`, null, `src/App.js`),
					` and save to reload.`
				),
				createElement(
					`a`,
					{
						className: "App-link",
						href: "https://reactjs.org",
						target: "_blank",
						rel: "noopener noreferrer",
					},
					`Learn React`
				),
				createElement(`div`, null, year)
			)
		)
	);
};
