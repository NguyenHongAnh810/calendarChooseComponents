import { configureStore } from '@reduxjs/toolkit'
import dateTimeSlice from './reducer'

export const store = configureStore({
  reducer: dateTimeSlice
})

store.subscribe(() => console.log(store))
