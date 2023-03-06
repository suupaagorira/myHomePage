import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNavbar from "./navbar";
import Top from "./topPage";
import About from "./about";

function App() {
    return (
        <Router>
            <div>
                <TopNavbar />
                <Routes>
                    <Route path="/top" element={<Top />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

render(<App />, document.getElementById("root"));
