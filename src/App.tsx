import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog';
import LandingPage from './pages/LandingPage';
import TicketReservation from './pages/TicketReservation';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
            <Route path='catalog' element={<Catalog/>}/>
            <Route path='ticketreservation' element={<TicketReservation/>}/>
            {/* <Route path='otherpages' element={<OtherPages/>}/> */
            /* <Route path='otherpages' element={<OtherPages/>}/> */
            /* <Route path='otherpages' element={<OtherPages/>}/> */
            /* <Route path='otherpages' element={<OtherPages/>}/> */
            /* <Route path='otherpages' element={<OtherPages/>}/> */
            }
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>    
  )
}

export default App