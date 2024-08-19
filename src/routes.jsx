import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Imoveis from "./pages/imoveis";
import Sobre from "./pages/sobre";

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/imoveis" element={<Imoveis />}></Route>
            <Route path="/sobre" element={<Sobre />}></Route>
        </Routes>
        </BrowserRouter>
    )
}