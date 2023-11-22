import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppFooter from "./components/shared/AppFooter";
import AppHeader from "./components/shared/AppHeader";

const About = lazy(() => import("./pages/About"));
// const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import("./pages/Home"));
const SingleExhibition = lazy(() => import("./pages/SingleExhibition"));

function App() {
  return (
    <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
      <Router>
        <AppHeader />
        <Suspense fallback={""}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exhibition/:name" element={<SingleExhibition />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="contact" element={<Contact />} /> */}
          </Routes>
        </Suspense>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
