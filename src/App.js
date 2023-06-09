import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}> </Route>
        <Route path="/about" element={<About/>}> </Route>
        <Route path="/cocktail/:id" element={<SingleCocktail/>}></Route>
        <Route path="*" element={<Error/>}> </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
