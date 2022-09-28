import styled, { keyframes } from "styled-components";
import React from "react";

const Father = styled.div`
  display: flex;
`;

// const Box = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
// `;

const Text = styled.span`
  color: white;
`;

// const Circle = styled(Box)`
//   border-radius: 50px;
// `;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 80px;
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    // <Father as="header">
    //   <Btn>Log in</Btn>
    //   <Btn as="a" href="/">
    //     Log in
    //   </Btn>

    //   <Input></Input>
    //   <Input></Input>
    //   <Input></Input>
    //   <Input></Input>
    //  </Father>

    // <Wrapper>
    //   <Box>
    //     <Emoji>😀</Emoji>
    //   </Box>
    // </Wrapper>
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
