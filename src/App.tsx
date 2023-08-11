import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
