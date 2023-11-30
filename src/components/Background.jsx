import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as St from "../styled-components/StComponent";
import { changeMember } from "../redux/modules/curmember";

function Background() {
  const dispatch = useDispatch();

  const currentMember = (event) => {
    //curMember를 현재 이벤트가 일어나는 요소의 innerText로 바꿔주세요 (온클릭 때 작동하는 함수)
    dispatch(changeMember(event.target.innerText));
  };
  const setBg = () => {
    setBgColor(true);
  };
  const [bgColor, setBgColor] = useState(false);
  return (
    <div>
      <St.BackgroundImg>
        <St.Title>🎀🅛🅞🅥🅔 🅦🅗🅐🅣 🅨🅞🅤 🅗🅐🅥🅔🐰</St.Title>
        <St.ButtonWrap>
          <St.Button
            $bgColor={bgColor}
            onClick={(event) => {
              currentMember(event);
              setBg();
            }}
          >
            모두🐰
          </St.Button>
          <St.Button
            $bgColor={bgColor}
            onClick={(event) => {
              currentMember(event);
              setBg();
            }}
          >
            민지
          </St.Button>
          <St.Button
            $bgColor={bgColor}
            onClick={(event) => {
              currentMember(event);
              setBg();
            }}
          >
            해린
          </St.Button>
          <St.Button
            $bgColor={bgColor}
            onClick={(event) => {
              currentMember(event);
              setBg();
            }}
          >
            하니
          </St.Button>
          <St.Button
            $bgColor={bgColor}
            onClick={(event) => {
              currentMember(event);
              setBg();
            }}
          >
            다니엘
          </St.Button>
          <St.Button
            $bgColor={bgColor}
            onClick={(event) => {
              currentMember(event);
              setBg();
            }}
          >
            혜인
          </St.Button>
        </St.ButtonWrap>
      </St.BackgroundImg>
    </div>
  );
}

export default Background;
