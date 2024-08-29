import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Card} from "./components/Card"
import { SocialButton } from './components/SocialButton'
import './App.css'

import { RightSide } from './components/RightSide'
import { OtherScreen } from './components/OtherScreen'

function App() {
  return (
      <main>
        <Card/>
        <RightSide/>
      </main>

  )
}

export default App
