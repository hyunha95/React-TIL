import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import React from "react";

import router from "@/router";

/**
 * @description 최상위 컴포넌트
 * @see [https://beta.reactjs.org/]
 * @see [https://reactrouter.com/en/main]
 * @see [https://fkhadra.github.io/react-toastify/introduction]
 * @see [https://recoiljs.org/docs/introduction/installation]
 */
const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);

root.render(
   <React.StrictMode>
      <RecoilRoot>
         <RouterProvider router={router} />
      </RecoilRoot>
   </React.StrictMode>
);
