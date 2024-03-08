import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog';
import LoginAdmin from './pages/LoginAdmin';
import LandingPage from './pages/LandingPage';
import TicketReservation from './pages/TicketReservation';
import Details from './pages/Details';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
            <Route path='catalog' element={<Catalog/>}/>
            <Route path='ticketreservation' element={<TicketReservation/>}/>
            <Route path='details' element={<Details/>}/>
            {/* <Route path='otherpages' element={<OtherPages/>}/> */
            /* <Route path='otherpages' element={<OtherPages/>}/> */
            /* <Route path='otherpages' element={<OtherPages/>}/> */
            /* <Route path='otherpages' element={<OtherPages/>}/> */
            }
          {/* <Route path='login' element={<LoginAdmin/>}/> */
          <Route path='login' element={<LoginAdmin/>}/>
          }
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>    
  )
}
export default App
