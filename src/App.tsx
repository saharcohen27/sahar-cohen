import React from "react";

import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import Banner from "./components/Banner.tsx";
function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Banner>
        <code>{"<div>"}</code>
        <b>Don't</b> ask me how to center a div.
        <code>{"</div>"}</code>
      </Banner>
      <ProjectsPage />
      <Footer />
    </div>
  );
}

export default App;
