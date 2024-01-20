import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
