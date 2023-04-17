import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import Footer from './components/footer'
import Pdf from './components/pdf'
import Navbar2 from './components/navbar'
import Pdf2 from './components/mathspdf_11th'
import Pdf3 from './components/pdf3'



import{
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";




function App() {

return (
  <>
  
   

   <Router>
   <Navbar2/>
   
   <Routes>
    <Route path='/' element={<Search/>}/>
   <Route path='/pdf' element={<Pdf/>}/>
   <Route path ='/mathspdf_11th' element={<Pdf2/>}/>
   <Route path ='/pdf3' element={<Pdf3/>}/>
   
   
    
    </Routes>
    <Footer/>
    
    </Router>

   
  </>
  );
}

export default App;