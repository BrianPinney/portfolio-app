
import './App.css';
import Photos from './components/Photos';
import AboutMe from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Photos/>
        <AboutMe/>
      </header>
    </div>
  );
}

export default App;
