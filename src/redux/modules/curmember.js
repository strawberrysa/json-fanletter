import { createSlice } from "@reduxjs/toolkit";
//action.items
// const CHANGEMEMBER = "CHANGEMEMBER";

// export const changeMember = (payload) => {
//   //반드시 객체로 return 해줘야함!
//   return {
//     type: CHANGEMEMBER,
//     payload,
//   };
// };

const initialState = "모두🐰";

//reducers
// const curMember = (state = initialState, action) => {
//   switch (action.type) {
//     case CHANGEMEMBER:
//       return action.payload;
//     default:
//       return state;
//   }
// };

//
// export default curMember;

const curMemberSlice = createSlice({
  name: "curMember",
  initialState,
  reducers: {
    changeMember(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { changeMember } = curMemberSlice.actions;
export default curMemberSlice.reducer;
