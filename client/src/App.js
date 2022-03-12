import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useScrollToTop } from './utils';
import NavBar from './components/nav/NavBar';
import Home from './components/home/Home';
import './App.css';

function App() {
  useScrollToTop();

  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route exact path="/machining">
            <Services />
          </Route> */}
          <Route path={'*'} element={<Navigate to="/" />} />
        </Routes>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
