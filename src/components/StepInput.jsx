import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStep, MAX_STEP } from '../features/counter/counterSlice'

function StepInput() {
  const dispatch = useDispatch()
  const step = useSelector((state) => state.counter.step)

  return (
    <div>
      <label htmlFor="step" className="block text-sm font-medium text-slate-600 mb-2">
        Step size (1 – {MAX_STEP})
      </label>
      <input
        id="step"
        type="number"
        min={1}
        max={MAX_STEP}
        value={step}
        onChange={(e) => dispatch(setStep(e.target.value))}
        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  )
}

export default memo(StepInput)