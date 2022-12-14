# REACT-FUNC-CLASS-STYLE-CODING
useEffect
---
어떻게 하면 렌더링 관련 작업을 처리하는 FuncComp 함수형 컴포넌트가 실행된 후에 추가로 필요한 작업을 처리하게 할 수 있을까이다. 이때 사용하는 것이 바로 리액트의 useEffect이다.   
useEffect는 함수 컴포넌트를 반환하기 전에 호출하면 된다. useEffect 함수의 첫 번째 인자로는 함수가 들어와야 한다.   
useEffect라는 훅은 웹 페이지가 처음으로 렌더링됐을 때 실행되고, 그 다음에 render가 실행될 때마다 실행된다는 것을 알 수 있다.


# begin-react
props를 통해 컴포넌트에게 값 전달하기
---
props는 properties의 줄임말이다. 우리가 어떤한 값을 컴포넌트에게 전달해줘야 할 때, props를 사용한다.

defaultProps로 기본값 설정
---
컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 값을 설정하고 싶다면 컴포넌트에 defaultProps라는 값을 설정하면 된다.

props 값 설정을 생략하면 ={true}
---
컴포넌트의 props 값을 설정하게 될 때 만약 props 이름만 작성하고 값 설정을 생략한다면, 이를 true로 설정한 것으로 간주한다.  
isSpecial이름만 넣어주면 isSpecial={true}와 동일한 의미이다.

리액트에서 엘리먼트에 이벤트를 설정해줄떄에는 on이벤트이름={실행하고싶은함수} 형태로 설정해주어야 한다.

동적인 값 끼얹기, useState
---
컴포넌트에서 동적인 값을 상태(state)라고 부른다. 리액트에 useState라는 함수가 있는데, 이것을 사용하면 컴포넌트에서 상태를 관리할 수 있다.

여러개의 input상태 관리하기
---
리액트에서 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 한다.

useRef로 특정 DOM 선택하기
---
리액트를 사용하는 프로젝트에서도 가끔씩 DOM을 직접 선택해야 하는 상황이 발생할 때도 있다. 그럴 땐, 리액트에서 ref라는 것을 사용한다.  
useRef()를 사용하여 Ref객체를 만들고, 이 객체를 우리가 선택하고 싶은 DOM에 ref값으로 설정해주어야 한다. 그러면, Ref객체의 .current 값은 우리가 원하는 DOM을 가르기케 된다.

배열 렌더링하기
---
배열이 고정적이라면 상관없겠지만, 배열의 인덱스를 하나하나 조회해가면서 렌더링하는 방법은 동적인 배열을 렌더링하지 못한다.  
동적인 배열을 렌더링해야 할 때에는 자바스크립트 배열의 내장함수 map()을 사용한다.  
map() 함수는 배열안에 있는 각 원소를 변환하여 새로운 배열을 만들어준다. 리액트에서 동적인 배열을 렌더링해야할 떄는 이 함수를 사용하여 일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환해주면 된다.

리액트에서 배열을 렌더링 할 때에는 key라는 props를 설정해야한다. key값은 각 원소들마다 가지고 있는 고유 값으로 설정을 해야한다.  
만약 배열 안의 원소가 가지고 있는 고유한 값이 없다면 map() 함수를 사용할 때 설정하는 콜백함수의 두 번째 파라미터 index를 key로 사용하면 된다.

```java
<div>
  {users.map((user, index) => (
    <User user={user} key={index}/>
  ))}
</div>
```
