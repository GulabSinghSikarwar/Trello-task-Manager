import { useEffect } from 'react';
import './App.css';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router';
import Header from './component/utilsComponent/Header';

function App() {
  const navigate = useNavigate();


  useEffect(() => {
    navigate('/home')
  }, [])
  return (
    <div className="App">
      <Header/>
      <Outlet />

    </div>
  );
}

export default App;
