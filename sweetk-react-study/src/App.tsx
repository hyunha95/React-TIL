import {ChangeEvent, useState} from "react";
import Input from "@/components/form/Input";
import Counter from "@/components/layout/Counter";
import Timer from "@/components/LiveWatch";
import Calculator from "@/components/Calculator";
import TodoList from "@/components/layout/TodoLIst";

/**
 * @description 루트 컴포넌트
 */
function App() {
    // router-info
    const location = useLocation();
    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log(location);
    //     navigate("counter");
    // }, []);

    return (
        <>
<<<<<<< HEAD
            {/* string 이외의 타입은 {}를 사용한다. */}
            {/* <Header title="Header" description="study" company="sweetk" />
				<Sidebar title="Sidebar" />
				<Contents title="Contents" />
				<Footer title="Footer" /> */}

            {/* <Input type="file" value={value} onChange={onChange} />
            <Counter />
            <Timer />
            <Calculator /> */}
            <TodoList/>
=======
            <Header />
            <BodyWrapper>
                <Sidebar />
                <Contents />
            </BodyWrapper>
>>>>>>> 3a7c8af43e77e73bdfcf086e5d5c9f7553454f41
        </>
    );
}
export default App;
