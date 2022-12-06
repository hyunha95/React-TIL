import { ChangeEvent, useState } from "react";

/**
 * @description Counter 컴포넌트
 */
function Counter() {
    // state
    const [count, setCount] = useState<number>(0);
    const [value, setValue] = useState<string>("");

    // event
    const onIncrease = () => setCount((prevState) => prevState + 1);
    const onDecrease = () => {
        setCount((prevState) => prevState - 1);
        setCount((prevState) => prevState - 1);
        setCount((prevState) => prevState - 1);
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        console.log(e.target.value);
    };

    // view
    return (
        <>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-3</button>
            <hr />
            <input value={value} onChange={onChange} />
        </>
    );
}

export default Counter;
