# React Todo List

React 학습을 위해 만든 Todo 애플리케이션.

## 기능

- Todo 추가 (엔터키 또는 버튼 클릭)
- Todo 검색 (대소문자 구분 없음)
- 체크박스로 완료 표시
- Todo 삭제

---

## 개발 과정 및 학습 기록

### 1. 프로젝트 초기 설정 및 스타일링

컴포넌트 구조를 Header, Editor, List, TodoItem으로 분리했다.
각 컴포넌트별로 CSS 파일을 따로 만들어서 관리했다.

---

### 2. Todo 추가 기능

`useRef`를 활용해서 id 값을 관리했다. useState로 관리하면 id가 바뀔 때마다 리렌더링이 발생하는데, useRef는 값이 바뀌어도 리렌더링이 발생하지 않는다.

```jsx
const idRef = useRef(3);

const onCreate = (content) => {
  const newTodo = {
    id: idRef.current++,
    isCheck: false,
    content: content,
    date: new Date().toLocaleDateString()
  };
  setTodo([newTodo, ...todo]);
};
```

---

### 3. 빈 입력값 처리

문제: 빈 칸일 때 추가 버튼을 누르면 undefined가 리스트에 추가됨

원인: useState()의 초기값을 설정하지 않으면 undefined가 된다. undefined === 빈문자열 비교는 false이기 때문에 조건문을 통과해버림.

해결: useState의 초기값을 빈 문자열로 설정

```jsx
// 수정 전
const [content, setContent] = useState();

// 수정 후
const [content, setContent] = useState("");
```

추가로 빈 값일 때 input에 focus를 주도록 useRef를 활용했다.

```jsx
const contentRef = useRef();

const toSubmit = () => {
  if (content === "") {
    contentRef.current.focus();
    return;
  }
  onCreate(content);
};
```

---

### 4. 리스트 렌더링

map 메서드를 사용해서 todo 배열을 TodoItem 컴포넌트로 변환했다.
React에서 배열을 렌더링할 때는 각 요소에 고유한 key 값이 필요하다.

```jsx
{filterTodo.map((td) => {
  return (
    <TodoItem key={td.id} {...td} />
  );
})}
```

스프레드 연산자 {...td}를 사용하면 객체의 모든 속성을 props로 전달할 수 있다.
이때 props는 순서가 아니라 이름으로 매칭된다는 것을 알게 됐다.

문제: isCheck를 false로 설정했는데 체크박스가 체크되어 있음

원인: 데이터에서는 isCheck라는 이름을 썼는데, 컴포넌트에서 checked로 받으려고 해서 undefined가 됨

해결: props 이름을 데이터의 속성 이름과 동일하게 맞춤

---

### 5. 검색 기능

filter와 includes 메서드를 조합해서 검색 기능을 구현했다.

문제: 검색어를 입력해도 필터링이 안 됨

원인 : filter 콜백 함수에서 return을 빼먹음. 화살표 함수에서 중괄호를 쓰면 return을 명시해야 한다.

```jsx
// 잘못된 코드
todo.filter((td) => { td.content.includes(search) });

// 수정한 코드
todo.filter((td) => td.content.includes(search));
```

---

### 6. 체크박스 토글

특정 id의 아이템만 업데이트하는 패턴을 배웠다.
map으로 배열을 순회하면서 id가 일치하는 아이템만 변경하고, 나머지는 그대로 반환한다.

```jsx
const onUpdate = (targetId) => {
  setTodo(todo.map((td) => {
    return td.id === targetId
      ? { ...td, isCheck: !td.isCheck }
      : td;
  }));
};
```

---

### 7. 삭제 기능

filter 메서드를 사용해서 해당 id를 제외한 나머지 아이템만 남긴다.

```jsx
const onDelete = (targetId) => {
  setTodo(todo.filter((td) => td.id !== targetId));
};
```

---

## 배운 것 정리

| 개념 | 설명 |
|------|------|
| useState | 컴포넌트 상태 관리. 초기값 설정 중요 |
| useRef | DOM 접근 또는 리렌더링 없이 값 유지 |
| 구조 분해 할당 | 객체는 이름으로 매칭, 배열은 순서로 매칭 |
| map | 배열을 변환해서 새 배열 반환 |
| filter | 조건에 맞는 요소만 걸러서 새 배열 반환 |
| 스프레드 연산자 | 객체나 배열을 펼쳐서 복사하거나 전달 |
