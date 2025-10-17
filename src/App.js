import './App.css';
import Jatekter from './components/Jatekter';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <article className="article">
        <Jatekter />
      </article>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
