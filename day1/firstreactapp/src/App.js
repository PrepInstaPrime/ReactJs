import './App.css';
import Home from './Home.jsx'
function App() {
  return (
    <div className="App">
      Hello world
      <Home author="PMA class" year={2024}/>  
      <Home author="Arpita" year={2025}/>
      <h1 id="detail">this is style testing</h1>
      {/* props are properties same as attributes in html */}
    </div>
  );
}

export default App;
