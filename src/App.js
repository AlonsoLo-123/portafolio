import './App.css';
import Header from './components/header/Header';
import Home from './screens/home/Home';

function App() {
  return (
      <div className=" flex flex-col min-h-screen bg-[url('./assets/images/jpeg/Entrada.jpeg')] bg-cover bg-center">
        <Header/>
        <Home/>
      </div>
  );
}
export default App;
