import styled from "styled-components";
const Wrapper = styled.header`
    padding: 20px;
    background-color: #1e90ff;
    color: #fff;
`;
/**
 * @description Header 컴포넌트
 * @see [https://jsdoc.app/]
 */
function Header() {
    return (
        <Wrapper>
            <h1>React Study</h1>
        </Wrapper>
    );
}
export default Header;
