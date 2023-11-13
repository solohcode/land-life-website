import React from "react"

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
  return (
    <div className="w-full">
      hello techend website
    </div>
  );
}

export default App;
