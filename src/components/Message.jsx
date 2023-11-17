import React from "react";
import { useNavigate } from "react-router-dom";
import { MessageWrap } from "./MessageWrap";
import { Img } from "./Stylecomponents";

function Message({ message, curmember, setMessage }) {
  //curmember가 "모두"일 경우에는 모든 메시지를 그대로 사용하고,
  //그렇지 않을 경우에는 해당하는 조건에 맞는 메시지만 필터링

  let filtered =
    curmember === "모두🐰"
      ? message
      : message.filter((msg) => msg.sendWho === curmember);
  console.log(filtered);
  console.log(curmember);

  const navigate = useNavigate();

  return (
    <div>
      <div>
        {filtered?.map((msg) => {
          return (
            <MessageWrap
              onClick={() => {
                navigate(`/detail/${msg.id}`);
              }}
              key={msg.id}
            >
              {/*  */}
              <Img avatar={msg.avatar} size={60} />
              <p>{msg.time.toString().slice(0, 25)}</p>
              <div>닉네임 {msg.name}</div>
              <p>{msg.contents}</p>
              {/* <p>누구에게 {msg.sendWho}</p> */}
            </MessageWrap>
          );
        })}
      </div>
    </div>
  );
}

export default Message;
