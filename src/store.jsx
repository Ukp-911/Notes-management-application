import { configureStore } from '@reduxjs/toolkit'
import paste from './pasteslice.jsx'
const store = configureStore({
    reducer:{
        paste
    },
});

export default store