import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as St from "../styled-components/StComponent";

function Message() {
  //curmember가 "모두"일 경우에는 모든 메시지를 그대로 사용하고,
  //그렇지 않을 경우에는 해당하는 조건에 맞는 메시지만 필터링

  const curMember = useSelector((state) => state.curMember);
  console.log("즐겨찾기", curMember);
  const message = useSelector((state) => state.message);
  let filtered =
    curMember === "모두🐰"
      ? message
      : message.filter((msg) => msg.sendWho === curMember);
  console.log(filtered);
  // console.log(curmember);

  const navigate = useNavigate();

  return (
    <div>
      <div>
        {filtered?.map((msg) => {
          console.log(msg);
          return (
            <St.MessageWrap
              onClick={() => {
                navigate(`/detail/${msg.id}`);
              }}
              key={msg.id}
            >
              {/*  */}
              <St.Img avatar={msg.avatar} size={60} />
              <p>{msg.time.toString().slice(0, 25)}</p>
              <div>닉네임 {msg.name}</div>
              <p>{msg.contents}</p>
              {/* <p>누구에게 {msg.sendWho}</p> */}
            </St.MessageWrap>
          );
        })}
      </div>
    </div>
  );
}

export default Message;
