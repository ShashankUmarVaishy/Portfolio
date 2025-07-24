import{BrowserRouter }from 'react-router-dom';
import{About, Contact,Experience,Hero, Navbar,Tech, Works, StarsCanvas }from './components'
const App =() =>{

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#050816] flex flex-col ">
        <div className="bg-[url(./assets/herobg.png)] bg-cover bg-no-repeat bg-center h-fit w-full">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0 ">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
