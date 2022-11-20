import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState.auth';
import {
  logInThunk,
  logOutThunk,
  refreshUserThunk,
  signUpThunk,
} from './thunk.auth';

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  extraReducers: builder => {
    builder.addCase(signUpThunk.pending, state => {});
    builder.addCase(signUpThunk.fulfilled, (state, action) => {
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sid = action.payload.sid;
      state.user = { ...action.payload.user };
      state.isAuth = true;
    });
    builder.addCase(signUpThunk.rejected, (state, action) => {
      state.error = action.payload;
    });
    /*<----------------------------------------------->*/

    builder.addCase(logInThunk.pending, state => {});
    builder.addCase(logInThunk.fulfilled, (state, action) => {
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sid = action.payload.sid;
      state.user = { ...action.payload.user };
      state.isAuth = true;
    });
    builder.addCase(logInThunk.rejected, (state, action) => {
      state.error = action.payload;
    });
    /*<----------------------------------------------->*/

    builder.addCase(refreshUserThunk.pending, state => {
      state.isFetched = false;
    });
    builder.addCase(refreshUserThunk.fulfilled, (state, action) => {
      state.token = action.payload.newAccessToken;
      state.refreshToken = action.payload.newRefreshToken;
      state.sid = action.payload.sid;

      state.isAuth = true;
      state.isFetched = true;
    });
    builder.addCase(refreshUserThunk.rejected, (state, action) => {
      state.error = action.payload;
      state.isFetched = false;
    });
    /*<----------------------------------------------->*/

    builder.addCase(logOutThunk.pending, state => {});
    builder.addCase(logOutThunk.fulfilled, state => {
      state.token = '';
      state.refreshToken = '';
      state.sid = '';
      state.isAuth = false;
      state.user = {};
    });
    builder.addCase(logOutThunk.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const authReduser = authSlice.reducer;
