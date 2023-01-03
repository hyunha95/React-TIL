import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { RecoilRoot } from "recoil";
// 경로에 @는 src에서 시작한다는 의미이다.

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>
);
