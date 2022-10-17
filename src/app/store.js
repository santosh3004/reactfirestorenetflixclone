import {configureStore} from "@reduxjs/toolkit";

import userReducer from "../features/userSlice";

const userStore= configureStore({
  reducer:{
    user:userReducer
  }
});

export default userStore;