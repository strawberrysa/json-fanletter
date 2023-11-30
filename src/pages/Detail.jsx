import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import * as St from "../styled-components/StComponent";
import { setDeleteMsgState } from "../redux/modules/message";

function Detail() {
  const message = useSelector((state) => state.message);

  const { letterid } = useParams();
  const data = message.find((msg) => {
    return msg.id === letterid;
  });
  console.log(data);

  const navi = useNavigate();

  // 1.state를 만든다
  const [isEdit, setIsEdit] = useState(false);

  // 2. 수정 된 텍스트를 받을 state를 만든다
  const [editText, setEditText] = useState(data.contents);

  // 1-2. state변경 함수를 만든다
  const handleChangeIsEdit = () => {
    setIsEdit((prev) => !prev);
  };

  // 2-2. change 이벤트가 발생하는 요소의 value를 받아와 수정된 텍스트를 업데이트 한다.
  const handleChangeEditText = (e) => {
    setEditText(e.target.value);
  };

  // 3. 수정 버튼을 누르면 setMessage로 업데이트
  const editMsg = (editText) => {
    let target = message.find((msg) => msg.id === letterid);
    target.contents = editText;
    setIsEdit(false);
  };
  const dispatch = useDispatch();
  const deleteMsg = () => {
    let filtered = message.filter((msg) => msg.id !== letterid);
    dispatch(setDeleteMsgState(filtered));
    navi("/");
  };

  const deleteAlert = () => {
    window.confirm("정말 삭제하시겠습니까?") === true
      ? deleteMsg()
      : navi(`/detail/${letterid}`);
  };

  const goHome = () => {
    navi("/");
  };

  // const changeUpdate = () ={

  // }
  return (
    <div>
      {
        <>
          <St.Header>
            <St.Button onClick={goHome}>HOME</St.Button>
          </St.Header>
          <St.MessageWrap $detail={true}>
            <p>작성시간 {data.time.toString().slice(0, 25)}</p>
            <div>닉네임 {data.name}</div>

            {/* 2-3. 조건부 렌더 */}
            {/* isEdit이 true 라면 ? textarea를 보이게 아니라면 : 기존의 <p>내용 {data.contents}</p> 태그 요소가 보이게 */}
            {isEdit === true ? (
              <textarea
                value={editText}
                onChange={handleChangeEditText}
                cols="30"
                rows="5"
              ></textarea>
            ) : (
              <p>내용 {data.contents}</p>
            )}
            <p>누구에게 {data.sendWho}</p>

            {/* 3-2. isEdit이 true 라면 ? 수정확인 버튼 아니라면 : 수정 버튼 */}
            {isEdit === true ? (
              <St.Button
                onClick={() => {
                  editMsg(editText);
                }}
              >
                수정 확인
              </St.Button>
            ) : (
              // 1-3. 버튼을 클릭 시 isEdit state를 변경한다.
              <St.Button onClick={handleChangeIsEdit}>수정</St.Button>
            )}
            <St.Button onClick={deleteAlert}>삭제</St.Button>
          </St.MessageWrap>
        </>
      }
    </div>
  );
}

export default Detail;
