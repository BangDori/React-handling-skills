import { Route, Routes, Link } from "react-router-dom";
import Profile from "./Profile";
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
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
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
        <Route path="/" element={<Home />} exact />
        <Route path="/*" element={<About />} exact />
        <Route path="/profile/:username" element={<Profile />} exact />
      </Routes>
    </div>
  );
};

export default App;
