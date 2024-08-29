import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Card} from "./components/Card"
import { SocialButton } from './components/SocialButton'
import './App.css'

import { RightSide } from './components/RightSide'

function App() {
  const [count, setCount] = useState(0)

  return (
      <main>
        <Card/>
        <RightSide/>
      </main>

  )
}

export default App
