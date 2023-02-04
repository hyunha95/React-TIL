import AccomodationImage from "./AccomodationImage";
import AccomodationContent from "./AccomodationContent";

import styled from "styled-components";

const Wrap = styled.div`
    display: flex;
    gap: 20px;
`;

const AccomodationWrap = styled.div`
    width: 300px;
`;

function AccomodationInfo({ imgUrl }) {
    const arr = Array.from({ length: 30 });

    return (
        <>
            <Wrap>
                <AccomodationWrap>
                    <AccomodationImage imgUrl={imgUrl} />
                    <AccomodationContent />
                </AccomodationWrap>
                <AccomodationWrap>
                    <AccomodationImage imgUrl={imgUrl} />
                    <AccomodationContent />
                </AccomodationWrap>
                <AccomodationWrap>
                    <AccomodationImage imgUrl={imgUrl} />
                    <AccomodationContent />
                </AccomodationWrap>
                <AccomodationWrap>
                    <AccomodationImage imgUrl={imgUrl} />
                    <AccomodationContent />
                </AccomodationWrap>
            </Wrap>
        </>
    );
}

export default AccomodationInfo;
