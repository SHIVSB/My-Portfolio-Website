import React, { Suspense, Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shivanshu from "./components/shivanshu";
import About from './components/about';
import Work from "./components/work";
import Skills from "./components/skills";
import ReactDOM from 'react-dom';
class App extends Component {
  render() {
    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <Suspense fallback={<div></div>}>
                            <Shivanshu/>
                        </Suspense>
                    }
                />

                <Route
                    exact
                    path="/aboutme"
                    element={
                        <Suspense fallback={<div></div>}>
                            <About />
                        </Suspense>
                    }
                />

                <Route
                    exact
                    path="/work"
                    element={
                        <Suspense fallback={<div></div>}>
                            <Work />
                        </Suspense>
                    }
                />

                <Route
                    exact
                    path="/skills"
                    element={
                        <Suspense fallback={<div></div>}>
                            <Skills />
                        </Suspense>
                    }
                />
            </Routes>
        </Router>
    );
  }
}

export default App;