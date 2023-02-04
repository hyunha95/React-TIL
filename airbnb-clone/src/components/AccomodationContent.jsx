import styled from "styled-components";

const TitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    & :first-child {
        font-weight: bold;
    }

    & :last-child {
        display: flex;
    }
`;

const IconWrap = styled.div`
    width: 12px;
`;

const Icon = styled.svg`
    fill: currentcolor;
`;

const DistanceDiv = styled.div`
    color: gray;
`;

const DateDiv = styled.div`
    color: gray;
`;

const priceDiv = styled.div`
    /* margin-top: 50px; */
`;

function AccomodationContent() {
    return (
        <>
            <TitleWrap>
                <div>성산읍, 서귀포시, 한국</div>
                <div>
                    <IconWrap>
                        <svg viewBox="0 0 32 32">
                            <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
                        </svg>
                    </IconWrap>
                    <div>4.71</div>
                </div>
            </TitleWrap>
            <DistanceDiv>468km 거리</DistanceDiv>
            <DateDiv>2월 26일 ~ 3월 3일</DateDiv>
            <priceDiv>$287.577 /박</priceDiv>
        </>
    );
}

export default AccomodationContent;
