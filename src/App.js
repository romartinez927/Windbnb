import './App.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Footer from './Componentes/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page404 from './Componentes/Page404/Page404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <ItemListContainer />} />
        <Route path="*" element={ <Page404/> }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
