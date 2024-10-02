import './App.css';
import Header from './components/header/Header';
import Home from './screens/home/Home';
import Project from './screens/project/Project';
import About from './screens/about/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex flex-col relative min-h-screen bg-[url('./assets/images/jpg/sea-1850228_1920.jpg')] bg-cover bg-center overflow-auto scroll-div">

        <Header/>
      <div className='backdrop-blur-lg overflow-auto'>
        <Routes>
          <Route path="/portafolio" element={<Home/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
      </div>
    </Router>
  );
}
export default App;
