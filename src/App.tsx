import './App.css'
import Application from './components/Application'
import FAQ from './components/FAQ'
import Feature from './components/Feature'
import Services from './components/Services'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Onboard from './components/Onboard'
import Pricing from './components/Pricing'

function App() {

  return (
    <div
      className="min-h-dvh relative overflow-hidden"
    >
      <div className='absolute inset-0 h-dvh w-screen -z-10 bg-[radial-gradient(125%_125%_at_50%_0,#F6CECE8C,#fff)] blur-xl' />
      <Navbar />
      <div className='flex flex-col w-full mx-auto max-w-[75%] gap-y-32'>
        <Hero />
        <Onboard />
        <Feature />
        <Services />
        <Pricing />
        <Application />
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default App