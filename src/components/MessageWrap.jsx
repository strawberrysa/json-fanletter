// MessageWrap.js 파일
import styled from "styled-components";

const MessageWrap = styled.div`
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

export { MessageWrap };
