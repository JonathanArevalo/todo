import { useState } from 'react'
import { Header } from './Header'
import { SectionPeticion } from './SectionPeticion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <h2 className='titleEmpresa'> Indra</h2>
      <SectionPeticion/>
      
      <footer className="read-the-docs">
        Click on the Vite and React logos to learn more
      </footer>
    </>
  )
}

export default App
