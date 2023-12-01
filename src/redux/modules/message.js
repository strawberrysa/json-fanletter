import { createSlice } from "@reduxjs/toolkit";

//actionValue
// const MSGSEND = "MSGSEND";
// const MSGUPDATE = "MSGUPDATE";
// const MSGDELETE = "MSGDELETE";

//actionCreator
// export const sendMsg = (payload) => {
//   return {
//     type: MSGSEND,
//     payload,
//   };
// };

// export const updateMsg = () => {
//   return {
//     type: MSGUPDATE,
//   };
// };

// export const setDeleteMsgState = (payload) => {
//   return {
//     type: MSGDELETE,
//     payload,
//   };
// };

//initial state
const initialState = [];

//reducer
// const message = (state = initialState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case MSGSEND:
//       return action.payload;
//     case MSGUPDATE:
//       return;
//     case MSGDELETE:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export default message;

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    sendMsg(state, action) {
      return [...state, action.payload];
    },
    updateMsg(state, action) {
      //console.log(action);
      state[action.payload.index].contents = action.payload.contents;
      return state;
    },
    setDeleteMsgState(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { sendMsg, updateMsg, setDeleteMsgState } = messageSlice.actions;
export default messageSlice.reducer;
