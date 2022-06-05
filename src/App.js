import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Main from './component/Main';
import "./css/global-style.scss"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="global-style">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
