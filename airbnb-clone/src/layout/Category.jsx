import CategoryItem from "./CategoryItem";
import "./../../src/style.css";

import React, { useState, useRef } from "react";
import styled from "styled-components";

const CategoryWrap = styled.div`
    display: flex;
    align-items: center;
    margin: 0px auto 0px 0px;
`;

const CategoryItemWrap = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    overflow-x: scroll;
    white-space: nowrap;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const Button = styled.button`
    border: 0.5px solid rgb(0 0 0 / 0.3);
    border-radius: ${(props) => props.radius};
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    cursor: pointer;
    padding: ${(props) => props.padding || null};
    margin-left: ${(props) => props.ml || null};
`;

const Icon = styled.svg`
    display: ${(props) => props.display || null};
    fill: ${(props) => props.fill || null};
    height: ${(props) => props.height || null};
    width: ${(props) => props.width || null};
    stroke: ${(props) => props.stroke || null};
    stroke-width: ${(props) => props.strokeWidth || null};
    overflow: ${(props) => props.overflow || null};
`;

function Category() {
    const [position, setPosition] = useState(0);
    const scrollBar = useRef();

    const rightClick = () => {
        scrollBar.current.scrollTo({
            left: position + 80,
            behavior: "smooth",
        });

        setPosition((currentState) => currentState + 80);
    };

    return (
        <CategoryWrap>
            <Button radius="50%" height="30px" width="30px">
                <Icon
                    viewBox="0 0 32 32"
                    display="block"
                    fill="none"
                    height="12px"
                    width="12px"
                    stroke="currentColor"
                    strokeWidth="5.33333"
                    overflow="visible"
                >
                    <g fill="none">
                        <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
                    </g>
                </Icon>
            </Button>
            <CategoryItemWrap ref={scrollBar}>
                <CategoryItem
                    title="인기 급상승"
                    src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
                <CategoryItem
                    title="해변 바로 앞"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />

                <CategoryItem
                    title="test"
                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                />
            </CategoryItemWrap>

            <Button
                onClick={rightClick}
                radius="50%"
                height="30px"
                width="30px"
            >
                <Icon
                    viewBox="0 0 32 32"
                    display="block"
                    fill="none"
                    height="12px"
                    width="12px"
                    stroke="currentColor"
                    strokeWidth="5.33333"
                    overflow="visible"
                >
                    <g fill="none">
                        <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path>
                    </g>
                </Icon>
            </Button>
            <Button
                radius="12px"
                height="48px"
                width="76.77px"
                padding="7px 0"
                ml="24px"
            >
                <Icon
                    viewBox="0 0 16 16"
                    display="block"
                    fill="currentColor"
                    height="14px"
                    width="14px"
                >
                    <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                </Icon>
                <span>필터</span>
            </Button>
        </CategoryWrap>
    );
}

export default Category;
