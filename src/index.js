import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StudentProvider } from "./context/StudentProvider";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<StudentProvider>
			<App />
		</StudentProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
