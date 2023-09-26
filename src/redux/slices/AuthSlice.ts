import { IAuth, IUser } from '../../@types/auth';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import axios from 'axios';
import { AUTH_API } from '../../config/api';
import { showDialog } from '../../utils';

const initialState: IAuth = {
  isAuth: false,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  loading: false,
  error: '',
};

export const authSlice: any = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    authorize: (state, action: PayloadAction<IUser>) => {
      state.isAuth = true;
      state.user = action.payload;
      localStorage.setItem('isAuth', 'true');

      state.loading = false;
      state.error = '';
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      };
      localStorage.setItem('isAuth', 'false');
      state.loading = false;
      state.error = '';
    },
  },
});

export const { setLoading, setError, authorize, logout } = authSlice.actions;

export const signUp = (body: IUser) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.post(AUTH_API, body);
    dispatch(authorize(data));
    showDialog('success', 'Sign up successfully', 'success');
  } catch (error: any) {
    dispatch(setError(error.message));
  }
};
export const login = (body: IUser | null) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  dispatch(authorize(body));
};
export const signOut = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  dispatch(logout());
  showDialog('success', 'Logout successfully', 'success');
};

export default authSlice.reducer;
