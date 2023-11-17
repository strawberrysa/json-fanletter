import React from "react";
import { useState } from "react";
import { ButtonWrap, BackgroundImg } from "./Stylecomponents";
import Button from "./Button";
import styled from "styled-components";

function Background({ setCurmember }) {
  const currentMember = (event) => {
    //curMember를 현재 이벤트가 일어나는 요소의 innerText로 바꿔주세요 (온클릭 때 작동하는 함수)
    setCurmember(event.target.innerText);
    console.log(currentMember);
  };

  const setBg = () => {
    setBgColor(true);
  };
  const [bgColor, setBgColor] = useState(false);
  return (
    <div>
      <BackgroundImg>
        <Title>🎀🅛🅞🅥🅔 🅦🅗🅐🅣 🅨🅞🅤 🅗🅐🅥🅔🐰</Title>
        <ButtonWrap>
          <Button
            $bgColor={bgColor}
            onClick={(event) => {
              currentMember(event);
              setBg();
            }}
          >
            모두🐰
          </Button>
          <Button
            $bgColor={bgColor}
            onClick={(event) => {
              currentMember(event);
              setBg();
            }}
          >
            민지
          </Button>
          <Button
            $bgColor={bgColor}
            onClick={(event) => {
              currentMember(event);
              setBg();
            }}
          >
            해린
          </Button>
          <Button
            $bgColor={bgColor}
            onClick={(event) => {
              currentMember(event);
              setBg();
            }}
          >
            하니
          </Button>
          <Button
            $bgColor={bgColor}
            onClick={(event) => {
              currentMember(event);
              setBg();
            }}
          >
            다니엘
          </Button>
          <Button
            $bgColor={bgColor}
            onClick={(event) => {
              currentMember(event);
              setBg();
            }}
          >
            혜인
          </Button>
        </ButtonWrap>
      </BackgroundImg>
    </div>
  );
}

export default Background;

const Title = styled.h1`
  margin-top: 8%;
  color: white;
  font-size: 1.5rem;
`;
