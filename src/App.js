import './App.css';
import Jatekter from './components/Jatekter';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from "react";

function App() {
let sz1 = { backgroundColor: 'blue' };
let sz2 = { backgroundColor: 'green' };

const [lista, setLista] = useState([sz1, sz2, sz1, sz2, sz1, sz2, sz1, sz2, sz1]);



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
