import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Suspense>
	</React.StrictMode>
);
