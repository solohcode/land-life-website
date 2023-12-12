import React from "react"
import HomePage from "./pages/home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PortfolioPage from "./pages/portfolio"

function App() {

  window.addEventListener("scroll", () => {
    const scrollHeight = Math.ceil(window.scrollY)
    const bodyHeight = document.body.offsetHeight
    const menu = document.getElementById("navbar")?.classList
    if(scrollHeight >= 130 && bodyHeight >= 1200){
      menu?.add("fixed")
    }else {
      menu?.remove("fixed")
    }
  })

  const routes = [
    {
      path: "/",
      component: <HomePage />,
    },
    {
      path: "/portfolio",
      component: <PortfolioPage />,
    },
  ]
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={component}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
