import { Route, Routes } from 'react-router-dom';
import Home from 'src/pages/Home/Home';
import SearchPage from 'src/pages/SearchPage/SearchPage';
import ComingSoon from './pages/ComingSoon/ComingSoon';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
