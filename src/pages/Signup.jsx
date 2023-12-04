import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/register",
        {
          id: id,
          password: password,
          nickname: nickname,
        }
      );

      // 회원가입 성공 시 처리할 내용
      console.log("회원가입 성공:", response.data);
    } catch (error) {
      // 회원가입 실패 시 처리할 내용
      console.error("회원가입 실패:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <button onClick={handleSignUp}>회원가입</button>
    </div>
  );
};

export default Login;
