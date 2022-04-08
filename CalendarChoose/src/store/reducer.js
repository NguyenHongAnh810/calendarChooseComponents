import { createSlice, configureStore } from '@reduxjs/toolkit'

import { createObjDateTime } from '../service/model'

const d = new Date()

const dateTimeSlice = createSlice({
  name: 'dateTime',
  initialState: {
    dateTimeNow: createObjDateTime(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes()),
    dateTimeChoose: createObjDateTime(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes()),
    dateTimeDisplay: createObjDateTime(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes())
  },
  reducers: {
    addDateTime: (state = initialState, action)=> {
        const cloneState = state
        cloneState[action.payload.name] = action.payload.data
        return cloneState
    }
  }
})

export const { addDateTime } = dateTimeSlice.actions
export default dateTimeSlice.reducer