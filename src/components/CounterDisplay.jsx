import { memo } from 'react'
import { useSelector } from 'react-redux'

function CounterDisplay() {
  const value = useSelector((state) => state.counter.value)

  return (
    <p className="text-6xl font-bold text-center text-indigo-600 mb-8 tabular-nums">
      {value}
    </p>
  )
}

export default memo(CounterDisplay)