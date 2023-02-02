import { Route, Routes, Link } from "react-router-dom";
import Profiles from "./Profiles";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/about?detail=false">false query</Link>
        </li>
        <li>
          <Link to="/about?detail=true">true query</Link>
        </li>
      </ul>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles" element={<Profiles />} />
      </Routes>
    </div>
  );
};

export default App;
