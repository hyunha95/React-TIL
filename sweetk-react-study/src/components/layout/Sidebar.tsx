import { Link } from "react-router-dom";
import styled from "styled-components";
const ListWrapper = styled.ul`
    background-color: #c0c0c0;
    color: #1a1a1a;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 10%;
    height: calc(100vh - 120px);
    li {
        line-height: 50px;
        text-align: center;
        font-size: 24px;
    }
`;
/**
 * @description Sidebar 컴포넌트
 */
function Sidebar() {
    return (
        <ListWrapper>
            <li>
                <Link to="calculator">Calculator</Link>
            </li>
            <li>
                <Link to="counter">Counter</Link>
            </li>
            <li>
                <Link to="LiveWatch">LiveWatch</Link>
            </li>
            <li>
                <Link to="todoList">ToDoList</Link>
            </li>
            <li>
                <a
                    href="https://www.naver.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    외부링크
                </a>
            </li>
        </ListWrapper>
    );
}
export default Sidebar;
