import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes"
import { StateProvider } from './context/state'
import { initialState, reducer } from './context/reducer'

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <AppRoutes/>
      </Router>
    </StateProvider>
  )
}

export default App;
