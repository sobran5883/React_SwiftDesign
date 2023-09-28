import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import WhySwiftTransport from './routes/home/Home'
import Fleet from './routes/fleet/Fleet'
import Company_policy from './routes/companyPolices/CompanyPolices'
import AboutUs from './routes/aboutUs/AboutUs'
import ContactUs from './routes/contactUs/ContactUs'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<WhySwiftTransport/>}/>
            <Route path='/fleet' element={<Fleet/>}/>
            <Route path='/company_policy' element={<Company_policy/>}/>
            <Route path='/about_us' element={<AboutUs/>}/>
            <Route path='/contactUs' element={<ContactUs/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
