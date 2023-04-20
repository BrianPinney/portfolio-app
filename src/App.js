import './App.css'
import About from './components/About';
import Quote from './components/Quote';
import PicCarousel from './components/PicCarousel';
import Grid from './components/Grid';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css"
import ScrollButton from './components/ScrollTop';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <About />
        <Quote />
        <PicCarousel />
        <Grid />
        <ScrollButton />
        <Footer />
      </header>
    </div>
  );
}

export default App;
