import { useEffect, useState } from 'react';
import './App.css';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router';
import Header from './component/utilsComponent/Header';
import { useLocation } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [count, setCount] = useState(0);
  useEffect(() => {
    navigate('/home')
  }, [])
  useEffect(() => {
    // execute on location change
    setCount(count + 1);
    const token = localStorage.getItem('token')
    if (token) {

      navigate('/home')
    } else {
      navigate('/login')
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      <Outlet />

    </div>
  );
}

export default App;
