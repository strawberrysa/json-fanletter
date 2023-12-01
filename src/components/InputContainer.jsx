import React, { useState } from "react";
import uuid from "react-uuid";
import * as St from "../styled-components/StComponent";
import { sendMsg } from "../redux/modules/message";
import { useDispatch, useSelector } from "react-redux";
//사용자가 주문하는 곳
function InputContainer() {
  const [name, setName] = useState("");
  const [contents, setContents] = useState("");
  const [sendWho, setSendWho] = useState("민지");
  //message 상점을 즐겨찾기 함.

  //const now = new Date();
  // const formattedTime = now.toLocaleString();

  //무언가가 보내줘야하는거지. 택배아저씨
  const dispatch = useDispatch();
  const send = () => {
    // 만약 if문 조건이 아니라면 else문 안에 코드를 실행
    if (name === "" || contents === "") {
      alert("닉네임 또는 메세지를 입력하세요");
    } else {
      const card = {
        time: new Date().getTime(),
        id: uuid(),
        name,
        contents,
        sendWho,
        avatar: "assets/default-avatar.png",
      };
      // sendMsg(state, action) {
      //   return [...state, action.payload];
      // }
      // setMessage([...message, card]);
      dispatch(sendMsg(card));

      setName(""); // 메세지 등록 후 input 초기화
      setContents(""); // 메세지 등록 후 input 초기화
      setSendWho("민지"); // 메세지 등록 후 select 초기화
    }
  };

  return (
    <div>
      <St.Nickname>
        <St.Span>닉네임</St.Span>
        <textarea
          maxLength={20}
          placeholder="최대 20글자까지 작성할 수 있습니다."
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            console.log(name);
          }}
        />
      </St.Nickname>
      <St.Contents>
        <St.Span>내용</St.Span>
        <textarea
          placeholder="최대 100글자까지 작성할 수 있습니다."
          maxLength={100}
          value={contents}
          onChange={(event) => {
            setContents(event.target.value);
          }}
        />
      </St.Contents>

      <span>누구에게 보내실 건가요?</span>
      <St.SelectBox
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
      </St.SelectBox>
      <St.SendButton onClick={send}>팬레터 등록</St.SendButton>
    </div>
  );
}

export default InputContainer;
