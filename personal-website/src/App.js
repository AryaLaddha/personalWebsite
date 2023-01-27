import './App.css';
import Navbar from './components/navbar/Navbar'
import Backgroundhome from './components/backgroundHome/BackgroundHome'
import Programming from './components/programmingLanguages/Programming'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Backgroundhome />
      <Programming />
    </div>
  );
}

export default App;
