import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // click the compose open the Mail Send dialog false = close true =open
  sendMessageIsOpen: false,
  // click mail in emaillist and go into the Mail page and show value
  selectedMail:null
};



export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    selectMail: (state,action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: state => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen = false;
    }
  }
    
  },

);

export const {selectMail,openSendMessage, closeSendMessage } = mailSlice.actions;


export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
