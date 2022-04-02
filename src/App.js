import logo from './logo.svg';
import './App.css';
import NavbarMenu from './components/Nav';
import Header from './components/Home';
import About from './components/About';
import Skills from './components/Skills';


function App() {
  return (
    <>
      <NavbarMenu />
      <Header />
      <About />
      <Skills />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
