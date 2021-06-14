import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Cart from './Cart'
import Home from './Home'
import styled from 'styled-components';
function App() {
  return (
    <div className="App">
        <Header />
        <Cart />
        <Home />
    </div>
  );
}

export default App;
