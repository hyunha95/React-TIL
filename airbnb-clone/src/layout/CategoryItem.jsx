import styled from "styled-components";

const Button = styled.button`
    border: none;
    background: white;
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    & > img {
        margin-bottom: 10px;
        filter: invert(50%) sepia(0%) saturate(112%) hue-rotate(221deg)
            brightness(84%) contrast(74%);
    }

    & > span {
        font-size: 12px;
        color: #717171;
        min-width: 80px;
    }
`;

const Img = styled.img`
    width: 24px;
    height: 24px;
`;

function CategoryItem({ title, src }) {
    return (
        <Button>
            <Img src={src} alt="" />
            <span>{title}</span>
        </Button>
    );
}

export default CategoryItem;
