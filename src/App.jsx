import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import Message from "./components/Message";
import Background from "./components/Background";
import InputContainer from "./components/InputContainer";
import Footer from "./components/Footer";
import * as St from "./styled-components/StComponent";

function App({ message, setMessage }) {
  const [curmember, setCurmember] = useState("모두🐰");
  console.log(message);
  console.log(St);

  return (
    <>
      <St.Wrap>
        <GlobalStyle />
        <Background setCurmember={setCurmember} />
        <St.CardWrap>
          <InputContainer message={message} setMessage={setMessage} />
        </St.CardWrap>
        <Message
          message={message}
          curmember={curmember}
          setMessage={setMessage}
        />
      </St.Wrap>
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
