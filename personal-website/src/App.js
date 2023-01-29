import './App.css';
import Navbar from './components/navbar/Navbar'
import Programming from './components/programmingLanguages/Programming'
import ResumeLine from './components/resume/ResumeLine'
import ParentComponent from './components/parentComponent/ParentComponent'


function App() {
  return (
    <div className="App">
      <ResumeLine />
      <Programming />
      <Navbar />
      <ParentComponent />
    </div>
  );
}

export default App;
