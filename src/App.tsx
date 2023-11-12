import { Route, Routes } from 'react-router-dom';
import Home from 'src/pages/Home/Home';
import SearchPage from 'src/pages/SearchPage/SearchPage';

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
