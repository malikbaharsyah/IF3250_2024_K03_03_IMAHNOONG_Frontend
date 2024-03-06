import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog';
import TicketReservation from './pages/TicketReservation';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='catalog' element={<Catalog/>}/>
            <Route path='ticketreservation' element={<TicketReservation/>}/>
            {/* <Route path='otherpages' element={<OtherPages/>}/> */
            /* <Route path='otherpages' element={<OtherPages/>}/> */
            /* <Route path='otherpages' element={<OtherPages/>}/> */
            /* <Route path='otherpages' element={<OtherPages/>}/> */
            /* <Route path='otherpages' element={<OtherPages/>}/> */
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </div>    
  )
}

export default App