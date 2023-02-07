import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componentes/Header/Header"
import Footer from "./Componentes/Footer/Footer"
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer"
import { WindProvider } from './context/WindProvider';

function App() {
  return (
    <BrowserRouter>
        <WindProvider>
            <Header />
            <Routes>
                <Route path="/" element={ <ItemListContainer /> }/>
                <Route path="/city/:cityid" element={ <ItemListContainer /> }/>
            </Routes>
            <Footer />
        </WindProvider>
    </BrowserRouter>
  )
}

export default App;
