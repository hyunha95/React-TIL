import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import App from "@/App";
import { RecoilRoot } from "recoil";
=======
import { RouterProvider } from "react-router-dom";

import router from "@/router/router";
>>>>>>> 3a7c8af43e77e73bdfcf086e5d5c9f7553454f41
// 경로에 @는 src에서 시작한다는 의미이다.

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
<<<<<<< HEAD
        <RecoilRoot>
            <App />
        </RecoilRoot>
=======
        <RouterProvider router={router} />
>>>>>>> 3a7c8af43e77e73bdfcf086e5d5c9f7553454f41
    </React.StrictMode>
);
