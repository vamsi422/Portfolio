import { Home, About, Projects, Contact } from './pages'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
     <div className="bg-gray-50 text-gray-900">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App