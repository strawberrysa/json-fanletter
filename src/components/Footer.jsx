import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Footerstyle>
      <nav>
        <a href="https://codefieldsforever.tistory.com/" target="_blank">
          Blog
        </a>{" "}
        |
        <a href="https://github.com/strawberrysa/fanpage" target="_blank">
          Github
        </a>
      </nav>
      <p>
        <span>저자 : seoapark</span>
        <br />
        <span>이메일 : sapark0418@gmail.com</span>
        <br />
        <span>Copyright 2023. seoapark. All Rights Reserved.</span>
      </p>
    </Footerstyle>
  );
}

export default Footer;

const Footerstyle = styled.footer`
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
