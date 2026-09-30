import CounterDisplay from './components/CounterDisplay'
import CounterControls from './components/CounterControls'
import StepInput from './components/StepInput'
import HistoryList from './components/HistoryList'

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Counter
        </h1>

        <CounterDisplay />

        <div className="space-y-6">
          <CounterControls />
          <StepInput />
        </div>

        <HistoryList />
      </div>
    </div>
  )
}

export default App