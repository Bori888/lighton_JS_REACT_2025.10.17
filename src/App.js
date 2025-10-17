import './App.css';
import Jatekter from './components/Jatekter';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from "react";

function App() {


const [lista, setLista] = useState(['blue', 'blue', 'blue', 'blue', 'blue', 'blue','blue', 'blue', 'blue']);



  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <article className="article">
        <Jatekter lista={lista}/>
      </article>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
