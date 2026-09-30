import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearHistory } from '../features/counter/counterSlice'

function HistoryList() {
  const dispatch = useDispatch()
  const history = useSelector((state) => state.counter.history)

  return (
    <div className="mt-8 pt-6 border-t border-slate-200">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-slate-600">
          History ({history.length})
        </h2>
        {history.length > 0 && (
          <button
            type="button"
            onClick={() => dispatch(clearHistory())}
            className="text-xs text-slate-500 hover:text-slate-700 underline"
          >
            Clear
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="text-sm text-slate-400 text-center py-2">No history yet</p>
      ) : (
        <ul className="max-h-32 overflow-y-auto space-y-1">
          {history.map((item, index) => (
            <li
              key={index}
              className="flex justify-between text-sm px-3 py-1.5 rounded-md bg-slate-50 text-slate-600"
            >
              <span>#{index + 1}</span>
              <span className="font-semibold tabular-nums">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default memo(HistoryList)