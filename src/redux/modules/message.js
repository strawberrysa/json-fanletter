//actionValue
const MSGSEND = "MSGSEND";
const MSGUPDATE = "MSGUPDATE";
const MSGDELETE = "MSGDELETE";

//actionCreator
export const sendMsg = (payload) => {
  return {
    type: MSGSEND,
    payload,
  };
};

export const updateMsg = () => {
  return {
    type: MSGUPDATE,
  };
};

export const setDeleteMsgState = (payload) => {
  return {
    type: MSGDELETE,
    payload,
  };
};

//state
const initialState = [];

//Reducer
const message = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case MSGSEND:
      return action.payload;
    case MSGUPDATE:
      return;
    case MSGDELETE:
      return action.payload;
    default:
      return state;
  }
};

export default message;
