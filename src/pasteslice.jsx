import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
}
const pasteslice = createSlice({
    name:'paste',
    initialState,
    reducers:{
        addpaste:(state,action)=>{

        },
        deletepaste:(state,action)=>{

        },
        updatepaste:(state,action)=>{

        },
    },
})
export const {addpaste,deletepaste,updatepaste}=pasteslice.actions
export default pasteslice.reducer