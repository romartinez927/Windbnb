import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componentes/Header/Header"
import Footer from "./Componentes/Footer/Footer"
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer"
import { WindProvider } from './context/WindProvider';
import Filtros from './Componentes/Filtros/Filtros';

function App() {
  return (
    <BrowserRouter>
        <WindProvider>
            <Header />
            <Routes>
                <Route path="/" element={ <ItemListContainer /> }/>
                <Route path="/city/:cityid" element={ <ItemListContainer /> }/>
                <Route path="/filtros" element={ <Filtros/> } />
            </Routes>
            <Footer />
        </WindProvider>
    </BrowserRouter>
  )
}

export default App;
