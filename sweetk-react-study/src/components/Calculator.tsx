import { useState } from "react";
import styled from "styled-components";
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const ButtonContainer = styled.div`
    display: grid;
    width: 40%;
    max-width: 450px;
    height: 50%;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
`;
const Button = styled.button`
    background-color: #f2f3f5;
    border: none;
    color: black;
    font-size: 1.5rem;
    border-radius: 35px;
    cursor: pointer;
    box-shadow: 3px 3px 3px lightgray;
    &:active {
        margin-left: 2px;
        margin-top: 2px;
        box-shadow: none;
    }
`;
const CalButton = styled(Button)`
    font-size: 2rem;
    color: white;
    background-color: #4b89dc;
`;
const ZeroButton = styled(Button)`
    grid-column: 1/3;
`;
const InputBar = styled.input`
    width: 40%;
    max-width: 450px;
    height: 65px;
    margin-bottom: 10px;
    border-radius: 10px;
    font-size: 30px;
    border: 2px solid #4b89dc;
    text-align: right;
    padding-right: 20px;
    &:focus {
        outline: none;
    }
`;
/**
 * @description Calculator 컴포넌트
 */
function Calculator() {
    // state
    const [inputValue, setInputValue] = useState<string>("0");
    const [hasOperator, setHasOperator] = useState<boolean>(false);
    const [hasPoint, setHasPoint] = useState<boolean>(false);

    // event
    const onAddNumber = (num: number) => {
        const strValue = num.toString();

        if (inputValue.startsWith("0") && inputValue.charAt(1) !== ".") {
            setInputValue((prevState) => prevState.substring(1));
        }
        setInputValue((prevState) => prevState + strValue);

        setHasOperator(false);
    };

    const onAllClear = () => {
        setHasOperator(false);
        setHasPoint(false);
        setInputValue("0");
    };

    const onDelete = () => {
        setHasOperator(false);
        setHasPoint(false);
        setInputValue((prevValue) =>
            prevValue.length === 1 ? "0" : prevValue.slice(0, -1)
        );
    };

    const onAddPoint = () => {
        if (hasPoint) {
            return;
        }
        setInputValue((prevValue) => prevValue + ".");
        setHasPoint(true);
    };

    const onPlus = () => {
        if (hasOperator) {
            return;
        }
        setInputValue((prevValue) => prevValue + "+");
        setHasOperator(true);
    };

    const onMinus = () => {
        if (hasOperator) {
            return;
        }
        setInputValue((prevValue) => prevValue + "-");
        setHasOperator(true);
    };

    const onMultiply = () => {
        if (hasOperator) {
            return;
        }
        setInputValue((prevValue) => prevValue + "*");
        setHasOperator(true);
    };

    const onDivide = () => {
        if (hasOperator) {
            return;
        }
        setInputValue((prevValue) => prevValue + "/");
        setHasOperator(true);
    };

    const onEqual = () => {
        setInputValue((prevValue) => eval(prevValue));
        setHasOperator(true);
    };

    return (
        <>
            <h1>Calculator</h1>
            <hr />
            <MainContainer>
                <InputBar value={inputValue} />
                <ButtonContainer>
                    <Button onClick={onAllClear}>AC</Button>
                    <Button onClick={onDelete}>DEL</Button>
                    <CalButton>%</CalButton>
                    <CalButton onClick={onDivide}>÷</CalButton>
                    <Button onClick={() => onAddNumber(7)}>7</Button>
                    <Button onClick={() => onAddNumber(8)}>8</Button>
                    <Button onClick={() => onAddNumber(9)}>9</Button>
                    <CalButton onClick={onMultiply}>×</CalButton>
                    <Button onClick={() => onAddNumber(4)}>4</Button>
                    <Button onClick={() => onAddNumber(5)}>5</Button>
                    <Button onClick={() => onAddNumber(6)}>6</Button>
                    <CalButton onClick={onMinus}>-</CalButton>
                    <Button onClick={() => onAddNumber(1)}>1</Button>
                    <Button onClick={() => onAddNumber(2)}>2</Button>
                    <Button onClick={() => onAddNumber(3)}>3</Button>
                    <CalButton onClick={onPlus}>+</CalButton>
                    <ZeroButton onClick={() => onAddNumber(0)}>0</ZeroButton>
                    <Button onClick={onAddPoint}>.</Button>
                    <CalButton onClick={onEqual}>=</CalButton>
                </ButtonContainer>
            </MainContainer>
        </>
    );
}
export default Calculator;
