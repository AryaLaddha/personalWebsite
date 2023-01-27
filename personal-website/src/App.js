import './App.css';
import Navbar from './components/navbar/Navbar'
import Backgroundhome from './components/backgroundHome/BackgroundHome'
import Programming from './components/programmingLanguages/Programming'
import About from './components/about/About'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Backgroundhome />
      <Programming />
      <About />
    </div>
  );
}

export default App;
