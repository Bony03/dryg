import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { $authHost } from '../API/index'
export const loginFetch = createAsyncThunk(
  'user/loginFetch',
  async function ({ email, password }) {
    const response = await $authHost.post('api/login', { email, password })
    console.log(response)
    return response.data
  }
)

const authSlice = createSlice({
  name: 'user',
  initialState: {
    inputs: {
      email: '',
      password: '',
    },
    user: {},
    isAuth: false,
    status: null,
  },
  reducers: {
    setEmail(state, action) {
      state.inputs.email = action.payload
    },
    setPassword(state, action) {
      state.inputs.password = action.payload
    },
  },
  extraReducers: {
    [loginFetch.pending]: (state) => {
      state.status = 'loading'
    },
    [loginFetch.fulfilled]: (state, action) => {
      console.log(localStorage.getItem('token'))
      state.status = 'resolved'
      state.user = action.payload.user
      state.isAuth = true
    },
    [loginFetch.rejected]: (state, action) => {},
  },
})

export const { setEmail, setPassword } = authSlice.actions

export default authSlice.reducer
