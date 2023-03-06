import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Top from "./topPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Top />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
