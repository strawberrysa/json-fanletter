import Router from './shared/Router';
import Button from "./components/Button";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import {
  Background,
  ButtonWrap,
  CardWrap,
  Nickname,
  Contents,
  Span,
  Input,
} from "./components/Stylecomponents";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

function App() {
  const [message, setMessage] = useState([
    {
      id: uuid(),
      name: "name1",
      contents: "contents1",
    },
    {
      id: uuid(),
      name: "name2",
      contents: "contents2",
    },
  ]);
  const [name, setName] = useState("");
  const [contents, setContents] = useState("");

  const send = () => {
    const card = {
      id: uuid(),
      name,
      contents,
    };
    setMessage([...message, card]);
  };
  return (
    <>
      <GlobalStyle />
      <Router />
      <Background>
        <ButtonWrap>
          <Button>민지</Button>
          <Button>해린</Button>
          <Button>하니</Button>
          <Button>다니엘</Button>
          <Button>혜인</Button>
        </ButtonWrap>
      </Background>

      <CardWrap>
        <Nickname>
          <Span>닉네임</Span>
          <Input
            type="text"
            placeholder="최대 20글자까지 작성할 수 있습니다."
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              console.log(name);
            }}
          />
        </Nickname>
        <Contents>
          <Span>내용</Span>
          <Input
            value={contents}
            onChange={(event) => {
              setContents(event.target.value);
            }}
          />
        </Contents>

        <span>누구에게 보내실 건가요?</span>
        <select>
          <option>민지</option>
          <option>해린</option>
          <option>하니</option>
          <option>다니엘</option>
          <option>혜인</option>
        </select>
        <button onClick={send}>팬레터 등록</button>
        {message.map((msg) => {
          return (
            <>
              <p>{msg.id}</p>
              <p>{msg.name}</p>
              <p>{msg.contents}</p>
            </>
          );
        })}
      </CardWrap>

      <footer>푸터입니다</footer>
    </>
  );
}

export default App;
