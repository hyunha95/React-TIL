import { useLocation, useNavigate } from "react-router-dom";

import styled from "styled-components";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Contents from "@/components/layout/Contents";
import { useEffect } from "react";

const BodyWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

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
            <Header />
            <BodyWrapper>
                <Sidebar />
                <Contents />
            </BodyWrapper>
        </>
    );
}
export default App;
