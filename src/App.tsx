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
import Jadwal from './pages/Jadwal';
import { DashboardAdmin } from './pages/DashboardAdmin';
import RatingPage from './pages/Rating'
import Pemesanan from './pages/Pemesanan';
import AddAcara from './pages/AddAcara';
import AddKunjungan from './pages/AddKunjungan';
import EditAcara from './pages/EditAcara';
import EditKunjungan from './pages/EditKunjungan';

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
            <Route path='dashboard' element={<DashboardAdmin/>}/>
            <Route path='jadwal' element={<Jadwal/>}/>
            <Route path='addacara' element={<AddAcara/>}/>
            <Route path='editacara' element={<EditAcara/>}/>
            <Route path='addkunjungan' element={<AddKunjungan/>}/> 
            <Route path='editkunjungan' element={<EditKunjungan/>}/>
            <Route path='rating' element={<RatingPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>    
  )
}
export default App
