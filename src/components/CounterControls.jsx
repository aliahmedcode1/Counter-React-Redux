import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
  MIN_COUNT,
} from '../features/counter/counterSlice'

function CounterControls() {
  const dispatch = useDispatch()
  const step = useSelector((state) => state.counter.step)
  const canDecrement = useSelector((state) => state.counter.value > MIN_COUNT)

  return (
    <div className="space-y-3">
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => dispatch(decrement())}
          disabled={!canDecrement}
          className="flex-1 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 active:scale-95 transition disabled:bg-slate-300 disabled:cursor-not-allowed disabled:hover:bg-slate-300"
        >
          − {step}
        </button>
        <button
          type="button"
          onClick={() => dispatch(increment())}
          className="flex-1 py-3 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 active:scale-95 transition"
        >
          + {step}
        </button>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => dispatch(incrementByAmount(10))}
          className="flex-1 py-2 rounded-lg bg-slate-200 text-slate-800 font-semibold hover:bg-slate-300 transition"
        >
          +10
        </button>
        <button
          type="button"
          onClick={() => dispatch(incrementByAmount(-10))}
          className="flex-1 py-2 rounded-lg bg-slate-200 text-slate-800 font-semibold hover:bg-slate-300 transition"
        >
          −10
        </button>
        <button
          type="button"
          onClick={() => dispatch(reset())}
          className="flex-1 py-2 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default memo(CounterControls)