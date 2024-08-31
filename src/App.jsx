import {Card} from "./components/CardComponents/Card"
import './styles/App.css'
import { ScrollableContent } from './components/ScrollableContent/ScrollableContent'
import { NavigationSection } from "./components/CardComponents/NavigationSection"

function App() {
  return (
    <div id="appContainer">
      <main>
        <Card/>
        <ScrollableContent/>
      </main>
      <NavigationSection />
    </div>
  )
}

export default App
