import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog';
import LoginAdmin from './pages/LoginAdmin';
import LandingPage from './pages/LandingPage';
import TicketReservation from './pages/TicketReservation';
import HelpPage from './pages/help';
import ListTiket from './pages/view_ticket'
import Details from './pages/Details';
import DetailPemesanan from './pages/DetailPemesanan';
import Sidebar from './components/base/Sidebar';
import { DashboardAdmin } from './pages/DashboardAdmin';
import ProtectedRoute from './components/base/ProtectedRoute'

import Pemesanan from './pages/Pemesanan';
import Notification from './pages/Notification';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
            <Route path='catalog' element={<Catalog/>}/>
            <Route path='ticketreservation' element={<TicketReservation/>}/>
            <Route path='helppage' element={<HelpPage/>}/>
            <Route path='listtiket' element={<ListTiket/>}/>
            <Route path='pemesanan' element={<Pemesanan/>}/>
            <Route path='details' element={<Details/>}/>
            <Route path='detailpemesanan' element={<DetailPemesanan/>}/>
            <Route path='login' element={<LoginAdmin/>}/>
            <Route path='dashboard' element={<ProtectedRoute><DashboardAdmin/></ProtectedRoute>}/>
            <Route path='notification' element={<Notification/>}/>
        </Routes>
      </BrowserRouter>
    </div>    
  )
}
export default App
