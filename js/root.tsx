import React from "react";
import { createRoot } from "react-dom/client";
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

createRoot(document.getElementById("root")!).render(<App />);
