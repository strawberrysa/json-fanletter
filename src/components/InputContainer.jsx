import React, { useState } from "react";
import uuid from "react-uuid";
import {
  Contents,
  Nickname,
  Span,
  SendButton,
  SelectBox,
} from "./Stylecomponents";

function InputContainer({ message, setMessage }) {
  const [name, setName] = useState("");
  const [contents, setContents] = useState("");
  const [sendWho, setSendWho] = useState("민지");
  //const now = new Date();
  // const formattedTime = now.toLocaleString();

  const send = () => {
    // 만약 if문 조건이 아니라면 else문 안에 코드를 실행
    if (name === "" || contents === "") {
      alert("닉네임 또는 메세지를 입력하세요");
    } else {
      const card = {
        time: new Date(),
        id: uuid(),
        name,
        contents,
        sendWho,
        avatar: "assets/default-avatar.png",
      };
      setMessage([...message, card]);
      setName(""); // 메세지 등록 후 input 초기화
      setContents(""); // 메세지 등록 후 input 초기화
      setSendWho("민지"); // 메세지 등록 후 select 초기화
    }
  };

  return (
    <div>
      <Nickname>
        <Span>닉네임</Span>
        <textarea
          maxLength={20}
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
        <textarea
          placeholder="최대 100글자까지 작성할 수 있습니다."
          maxLength={100}
          value={contents}
          onChange={(event) => {
            setContents(event.target.value);
          }}
        />
      </Contents>

      <span>누구에게 보내실 건가요?</span>
      <SelectBox
        value={sendWho}
        onChange={(event) => {
          setSendWho(event.target.value);
          console.log(sendWho);
        }}
      >
        <option>민지</option>
        <option>해린</option>
        <option>하니</option>
        <option>다니엘</option>
        <option>혜인</option>
      </SelectBox>
      <SendButton onClick={send}>팬레터 등록</SendButton>
    </div>
  );
}

export default InputContainer;
