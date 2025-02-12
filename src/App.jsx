import { Hero, Projects, Technologies, Contact } from './sections/index'
import { Nav } from './components/index'

function App() {
  return (
    <main>
      <Nav/>
      <Hero/>
      <Projects/>
      <Technologies/>
      <Contact/>
    </main>
  )
}

export default App
