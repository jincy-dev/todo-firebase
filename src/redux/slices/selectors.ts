import { RootState } from "../store";

export const selectName=(state:RootState)=>state.name.names;
export const selectTitle=(state:RootState)=>state.name.title;