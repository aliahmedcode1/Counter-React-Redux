import { createSlice } from '@reduxjs/toolkit'

export const MIN_COUNT = 1
export const MAX_STEP = 1000
export const HISTORY_LIMIT = 20

const initialState = {
  value: 10,
  step: 1,
  history: [],
}

function record(state) {
  state.history.unshift(state.value)
  if (state.history.length > HISTORY_LIMIT) {
    state.history.length = HISTORY_LIMIT
  }
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value = Math.max(MIN_COUNT, state.value + state.step)
      record(state)
    },
    decrement(state) {
      state.value = Math.max(MIN_COUNT, state.value - state.step)
      record(state)
    },
    incrementByAmount(state, action) {
      const amount = Number(action.payload)
      if (!Number.isFinite(amount)) return
      state.value = Math.max(MIN_COUNT, state.value + amount)
      record(state)
    },
    setStep(state, action) {
      const raw = Number(action.payload)
      if (!Number.isFinite(raw) || raw < 1) return
      state.step = Math.min(MAX_STEP, Math.round(raw))
    },
    reset(state) {
      state.value = initialState.value
      state.step = initialState.step
      state.history = []
    },
    clearHistory(state) {
      state.history = []
    },
  },
})

export const {
  increment,
  decrement,
  incrementByAmount,
  setStep,
  reset,
  clearHistory,
} = counterSlice.actions

export default counterSlice.reducer