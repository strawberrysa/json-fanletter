import styled from "styled-components";
//----디테일페이지 헤더 시작
const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
//-------------------------------------------------------
//헤더 백그라운드 시작

const BackgroundImg = styled.div`
  background-image: url("/assets/newjeans_back.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 70vh;
  display: flex;
  justify-content: center;
  position: relative;
`;

const ButtonWrap = styled.div`
  border-radius: 10px;
  padding: 15px;
  list-style: none;
  width: 350px;
  margin: 0 auto;
  display: flex;
  position: absolute;
  bottom: 0;
`;

//-------------------------------------------------------
//인풋 시작

const CardWrap = styled.div`
  border-radius: 10px;
  padding: 10px;
  width: 300px;
  margin: 0 auto;
  background-color: #6e6e6d;
  font-size: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: white;
`;
const Nickname = styled.div`
  margin-bottom: 10px;
  & textarea {
    width: 100%;
  }
  display: flex;
  align-item: center;
`;
const Contents = styled.div`
  display: flex;
  & textarea {
    width: 100%;
  }
  margin-bottom: 10px;
`;
const Span = styled.span`
  width: 50px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

const SendButton = styled.button`
  background-color: pink;
  margin-left: 20px;
  padding: 8px;
  &:hover {
    background: white;
    color: black;
  }
  user-select: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
`;
const SelectBox = styled.select`
  margin-left: 10px;
`;

// 레터 이미지
const Img = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: ${(props) => `url(${props.avatar})`};
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: 50%;
`;

export {
  BackgroundImg,
  ButtonWrap,
  CardWrap,
  Nickname,
  Contents,
  Span,
  SendButton,
  SelectBox,
  Img,
  Header,
};
