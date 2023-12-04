import { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import Message from "./components/Message";
import Background from "./components/Background";
import InputContainer from "./components/InputContainer";
import Footer from "./components/Footer";
import * as St from "./styled-components/StComponent";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App({ message, setMessage }) {
  const [curmember, setCurmember] = useState("모두🐰");
  // console.log(message);
  // console.log(St);
  const [loggedIn, setLoggedIn] = useState(false); // 로그인 상태를 저장하는 상태값
  useEffect(() => {
    // 로그인 상태를 확인하는 로직을 구현합니다.
    // 여기서는 로컬 스토리지를 사용하여 로그인 상태를 시뮬레이션합니다.
    const userLoggedIn = localStorage.getItem("loggedIn");
    if (userLoggedIn === "true") {
      setLoggedIn(true);
    }
  }, []);

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
