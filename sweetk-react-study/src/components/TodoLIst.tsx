import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
type ToDo = {
    done: boolean;
    task: string;
};
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
/**
 * @description ToDoList 컴포넌트
 */
function ToDoList() {
    // state
    const [inputValue, setInputValue] = useState<string>("");
    const [list, setList] = useState<ToDo[]>([]);
    // event
    const onchange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        console.log(e.target.value);
    };
    const onAdd = () => {
        const addRow = {
            done: false,
            task: inputValue,
        };
        setList((prevList) => [...prevList, addRow]);
        setInputValue("");
    };
    const onDelete = (index: number) => {
        setList((prevList) => {
            const updateList = prevList.filter((item, idx) => idx !== index);
            return updateList;
        });
    };
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    };
    const onCheck = (index: number) => {
        setList((prevList) => {
            const updateList = prevList.map((item, idx) =>
                idx === index ? { ...item, done: !item.done } : item
            );
            return updateList;
        });
    };
    // view
    return (
        <Wrapper>
            <h1>ToDoList</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <input value={inputValue} onChange={onchange} />
                    <button onClick={onAdd}>Add</button>
                </form>
            </div>
            <ul>
                {list.map(({ done, task }, index) => (
                    <li key={index.toString()}>
                        <input
                            type="checkbox"
                            checked={done}
                            onChange={() => onCheck(index)}
                        />
                        <input value={task} disabled readOnly />
                        <button onClick={() => onDelete(index)}>Del</button>
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
}
export default ToDoList;
