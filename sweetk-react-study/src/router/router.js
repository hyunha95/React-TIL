import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import Calculator from "@/components/Calculator";
import LiveWatch from "@/components/LiveWatch";
import ToDoList from "@/components/TodoLIst";
import Counter from "@/components/Counter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "calculator",
                element: <Calculator />,
            },
            {
                path: "counter",
                element: <Counter />,
            },
            {
                path: "LiveWatch",
                element: <LiveWatch />,
            },
            {
                path: "todoList",
                element: <ToDoList />,
            },
        ],
    },
]);

export default router;
