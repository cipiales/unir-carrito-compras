import logo from './logo.svg';
import './App.css';
import Header from './components/common/header/Header';
import Router from './Router';

function App() {
  return (
    <div>
    <Header />
      <div className="container">        
    <Router/>
      </div>
    </div>
   
  );
}
export default App;
