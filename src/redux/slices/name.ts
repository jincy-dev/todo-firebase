import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Name } from "../../types";

const initialState: { names: string, title:string } = {
  names: "",
  title:"",
};

const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers:{
    addName:(state, actions:PayloadAction<string>)=>{
        state.names=actions.payload;
    },
    addTitle:(state, actions:PayloadAction<string>)=>{
      state.title=actions.payload;
    }
  }
});

export const {addName, addTitle}=nameSlice.actions;

export default nameSlice.reducer;
