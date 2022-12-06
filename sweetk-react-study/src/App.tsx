import { ChangeEvent, useState } from "react";
import Input from "@/components/form/Input";
import Counter from "@/components/layout/Counter";
import Timer from "./components/LiveWatch";
import Calculator from "./components/Calculator";

/**
 * @description 루트 컴포넌트
 */
function App() {
    // state
    const [value, setValue] = useState<string>("");

    // event
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    // view
    return (
        <>
            {/* string 이외의 타입은 {}를 사용한다. */}
            {/* <Header title="Header" description="study" company="sweetk" />
				<Sidebar title="Sidebar" />
				<Contents title="Contents" />
				<Footer title="Footer" /> */}

            <Input type="file" value={value} onChange={onChange} />

            <Counter />
            <Timer />
            <br />
            <br />
            <br />
            <Calculator />
        </>
    );
}

export default App;
