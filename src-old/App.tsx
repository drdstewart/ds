import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import TopBar from "./core/top-bar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Resume from "./pages/resume";

const App = () => {
  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route path="/" element={<About />} />
          {/* <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
