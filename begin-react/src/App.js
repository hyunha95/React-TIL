import React from "react";
import Hello from "./Hello";
import "./App.css";
import Wrapper from "./Wrapper";
import Counter from "./Counter";

function App() {
  const name = "react";
  // 인라인 스타일은 객체 형태로 작성을 해야 하며, background-color처럼 -로 구분되어 있는 이름들은 backgroudColor처럼 camelCase형태로 네이밍 해주어야 한다.
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24, // 기본 단위 px
    padding: "1rem", // 다른 단위 사용 시 문자열로 설정
  };
  return (
    <>
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true} />
        <Hello color="pink" />
      </Wrapper>
      {/* JSX 내부에 자바스크립트 변수를 보여줘야 할 떄에는 {}으로 감싸서 보여준다 */}
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
      <Counter />
    </>
  );
}

export default App;
