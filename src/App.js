import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div >
      <Header/>
      <Outlet/>
      <h1>footer</h1>
    </div>
  );
}

export default App;
