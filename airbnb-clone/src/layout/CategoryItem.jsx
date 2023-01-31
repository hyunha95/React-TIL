import styled from "styled-components";

const Button = styled.button`
    border: none;
    background: white;
    width: 80px;
    height: 80px;

    & > img {
        margin-bottom: 10px;
    }
`;

function CategoryItem({ title, src }) {
    return (
        <Button>
            <img width="24" height="24" src={src} alt="" />
            <div>{title}</div>
        </Button>
    );
}

export default CategoryItem;
