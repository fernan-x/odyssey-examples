import Checkout from "./components/Checkout"
import { DependenciesProvider } from "./contexts/dependencies"

function App() {

  return (
    <DependenciesProvider>
      <h1>Dependency injection</h1>
      <Checkout />
    </DependenciesProvider>
  )
}

export default App
