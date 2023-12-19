import React from "react";
import "./App.css";
import BlogPost from "./views/BlogPost";
import Main from "./views/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog-post" element={<BlogPost />} />
      </Routes>
    </Router>
  );
};

export default App;
