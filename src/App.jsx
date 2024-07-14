
import './App.css';
import Productslist from './pages/Productslist';
import Header from './components/Header';
import Footer from './components/Footer';
import Singleview from './pages/Singleview';
import { Route, Routes } from 'react-router-dom';
import Pnf from './pages/Pnf';


function App() {
  return (
    <div className="App">
      <Header/>
   

<Routes>
  <Route path= '/' element = {<Productslist/>}> </Route>
  <Route path= '/view/:id' element= {<Singleview/>}> </Route>
  <Route path= '/*' element= {<Pnf></Pnf>}> </Route>
</Routes>

    
    <Footer/>
    </div>
  );
}

export default App;
