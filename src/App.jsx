import React from "react";
import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import ItemlistContainer from "./components/ItemListContainer.jsx";
function App() {
  return (
      <div className ="container-fluid">
        <Navbar />
        <ItemlistContainer greeting={"Estamos armando la pagina!"}/>
        <Footer />
       </div>
  )
}

export default App;
