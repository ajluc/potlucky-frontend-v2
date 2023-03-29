import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: { id: '6', email: 'aaahhh' }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value.id = action.payload.id
      state.value.email = action.payload.email
    }
  }
})

export const { update } = userSlice.actions

export default userSlice.reducer
