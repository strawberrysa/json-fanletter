import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { useState } from "react";
import Message from "./components/Message";
import Background from "./components/Background";
import InputContainer from "./components/InputContainer";
import { CardWrap } from "./components/Stylecomponents";
import Footer from "./components/Footer";

function App({ message, setMessage }) {
  const [curmember, setCurmember] = useState("모두🐰");
  console.log(message);

  return (
    <>
      <Wrap>
        <GlobalStyle />
        <Background setCurmember={setCurmember} />
        <CardWrap>
          <InputContainer message={message} setMessage={setMessage} />
        </CardWrap>
        <Message
          message={message}
          curmember={curmember}
          setMessage={setMessage}
        />
      </Wrap>
      <Footer />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

const Wrap = styled.div`
  position: relative;
  width: 100%;
`;
