import CategoryItem from "./CategoryItem";

import React from "react";
import styled from "styled-components";

const CategoryWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Icon = styled.svg`
    display: block;
    fill: none;
    height: 12px;
    width: 12px;
    stroke: currentcolor;
    stroke-width: 5.33333;
    overflow: visible;
`;

function Category() {
    return (
        <CategoryWrap>
            <button>
                <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                >
                    <g fill="none">
                        <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
                    </g>
                </svg>
            </button>
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

            <button></button>
            <button></button>
        </CategoryWrap>
    );
}

export default Category;
