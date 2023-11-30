import React from "react";
import * as St from "../styled-components/StComponent";
function Footer() {
  return (
    <St.Footerstyle>
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
    </St.Footerstyle>
  );
}

export default Footer;
