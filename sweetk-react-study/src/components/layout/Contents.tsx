import styled from "styled-components";
import { Outlet } from "react-router-dom";
const Wrapper = styled.div`
    width: 90%;
`;
/**
 * @description Contents 컴포넌트
 */
function Contents() {
    return (
        <Wrapper>
            <Outlet />
        </Wrapper>
    );
}
export default Contents;
