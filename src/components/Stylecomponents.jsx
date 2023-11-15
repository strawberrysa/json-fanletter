import styled from 'styled-components';

const Background = styled.div`
  background-image: url('./img/newjeans_back.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height:80vh;
  display: flex;
  justify-content:center;
  position:relative;

`

const ButtonWrap = styled.div`
    border-radius: 10px;
    list-style: none;
    padding: 15px;
    width: 500px;
    height:80px;
    margin:0 auto;
    display: flex;
    position:absolute;
    bottom:0;
`
const CardWrap = styled.div`
    border-radius: 10px;
    padding: 15px;
    width: 500px;
    height:200px;
    margin:0 auto;
    background-color:darkgrey;
    font-size:10px;
`
const Nickname = styled.div`
    width: 500px;
    height:20px;
    display: flex;

`
const Contents = styled.div`
    width: 500px;
    height:80px;
    display: flex;
    margin-top:10px;

`

const Span = styled.span`
    width: 50px;
    display: inline-block;
    padding:6px;
    text-align:center;
    justify-content:center;
`
const Input = styled.input`
    width:80%;
`

export { Background, ButtonWrap, CardWrap, Nickname, Contents, Span, Input };