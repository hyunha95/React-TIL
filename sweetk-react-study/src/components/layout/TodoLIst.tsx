import { useState, ChangeEvent, FormEvent } from "react";

type Todo = {
    done: boolean;
    task: string;
};

/**
 * @description TodoList 컴포넌트
 */
function TodoList() {
    // state
    const [inputValue, setInputValue] = useState<string>("");
    const [list, setList] = useState<Todo[]>([]);

    // event
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        console.log(e.target.value);
    };
    const onAdd = () => {
        if (inputValue.length < 1) {
            alert("please, fill input field!!!");
            return;
        }
        setList((prevState) => [
            ...prevState,
            { done: false, task: inputValue },
        ]);

        setInputValue("");
    };

    const onDelete = (index: number) => {
        setList((prevState) => {
            const updateList = prevState.filter((item, i) => i !== index);
            return updateList;
        });
    };

    const onCheck = (index: number) => {
        console.log(index);

        setList((prevState) => {
            const updateList = prevState.map((item, i) =>
                i === index ? { ...item, done: !item.done } : item
            );
            return updateList;
        });
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    // view
    return (
        <>
            <h1>TodoList</h1>
            <hr />
            <form onSubmit={onSubmit}>
                <div>
                    <input value={inputValue} onChange={onChange} />
                    <button onClick={onAdd}>Add</button>
                </div>
            </form>
            <hr />
            <ul>
                {list.map(({ done, task }, index) => (
                    <li key={index}>
                        <div>
                            <input
                                type="checkbox"
                                checked={done}
                                onChange={() => onCheck(index)}
                            />
                            <input value={task} disabled />
                            <button onClick={() => onDelete(index)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;
