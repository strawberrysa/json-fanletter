import styled from "styled-components";
//----디테일페이지 헤더 시작
export const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
//-------------------------------------------------------
//헤더 백그라운드 시작

export const BackgroundImg = styled.div`
  background-image: url("/assets/newjeans_back.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 70vh;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ButtonWrap = styled.div`
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

export const CardWrap = styled.div`
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
export const Nickname = styled.div`
  margin-bottom: 10px;
  & textarea {
    width: 100%;
  }
  display: flex;
  align-items: center;
`;
export const Contents = styled.div`
  display: flex;
  & textarea {
    width: 100%;
  }
  margin-bottom: 10px;
`;
export const Span = styled.span`
  width: 50px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

export const SendButton = styled.button`
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
export const SelectBox = styled.select`
  margin-left: 10px;
`;

// 레터 이미지
export const Img = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: ${(props) => `url(${props.avatar})`};
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: 50%;
`;

//Message.jsx에 쓰는 컴포넌트
export const MessageWrap = styled.div`
  border-radius: 10px;
  padding: 15px;
  width: 300px;
  margin: 0 auto;
  background-color: #fcf6f5;
  font-size: 10px;
  margin-top: 10px;
  line-height: 2;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: ${(props) => props.$detail && `scale(1)`};
  }
`;

//Footer
export const Footerstyle = styled.footer`
  width: 100%;
  height: 90px;
  background-color: white;
  bottom: 0px;
  /* position: fixed; */
  border-top: 1px solid #c4c4c4;
  padding-top: 15px;
  color: #808080;
  font-size: 11px;
  margin-top: 30px;
  & p span {
    display: inline-block;
    margin-left: 20px;
  }

  & a {
    display: inline-block;
    margin: 0 20px 10px 20px;
    color: #808080;
    font-size: 11px;
  }

  & a:visited {
    color: #808080;
  }
`;

//버튼
export const Button = styled.button`
  font-size: 10px;
  border: 1px solid white;
  border-radius: 10px;
  width: 80px;
  padding: 5px;
  text-align: center;
  background: black;
  &:hover {
    background: white;
    color: black;
  }
  &:focus {
    background: ${(props) => (props.$bgColor ? "pink" : "black")};
  }
  color: white;
  user-select: none;
  cursor: pointer;
  margin: 5px;
`;

//백그라운드의 jsx의 타이틀
export const Title = styled.h1`
  margin-top: 8%;
  color: white;
  font-size: 1.5rem;
`;

//App.jsx 에 있는 Wrap
export const Wrap = styled.div`
  position: relative;
  width: 100%;
`;
