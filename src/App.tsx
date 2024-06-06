import AddTrial from './pages/AddTrial'
import './App.css'
import TrialProvider from './context/trialContext'

function App() {
  return (
    <>
      <TrialProvider>
        <AddTrial />
      </TrialProvider>
    </>
  )
}

export default App
