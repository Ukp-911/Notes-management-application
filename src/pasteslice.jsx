import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : [],
}
const pasteslice = createSlice({
    name: 'paste',
    initialState,
    reducers: {
        addpaste: (state, action) => {
            state.value.push(action.payload)
            localStorage.setItem('pastes',JSON.stringify(state.value))
            // localStorage.clear()
        },
        deletepaste: (state, action) => {

        },
        updatepaste: (state, action) => {

        },
    },
})
export const { addpaste, deletepaste, updatepaste } = pasteslice.actions
export default pasteslice.reducer