import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Blog from "./pages/Blog";
import Erro from "./pages/Erro";
import Produto from "./pages/Produto";
import Header from "./components/Header";



function RouterApp(){
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/sobre" element={<Sobre/>}  />
        <Route path="/blog" element={<Blog/>}  />
        <Route path="*" element={<Erro/>}  />
        <Route path="/produto/:id" element={<Produto/>}  />
        

      </Routes>

    </BrowserRouter>
  )


}

export default RouterApp;