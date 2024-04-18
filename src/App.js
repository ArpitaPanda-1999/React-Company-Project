import Landing from "./BASICS/landingpage";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
       <HashRouter>
            <header>
                <Link to="/"></Link>
            </header>
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
       </HashRouter>
    );
}

export default App;
