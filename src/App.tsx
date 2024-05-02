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
import PemesananAdmin from './pages/PemesananAdmin';
import AddAcara from './pages/AddAcara';
import AddKunjungan from './pages/AddKunjungan';
import EditAcara from './pages/EditAcara';
import EditKunjungan from './pages/EditKunjungan';
import Profile from './pages/EditProfil';
import TicketRequest from './pages/TicketRequest';
import SideNavBar from './components/base/SideNavBar';
import AdminPage from './pages/AdminPage';
import EditProfil from './pages/EditProfil';
import Rating1 from './pages/Rating1';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
            <Route path='catalog' element={<Catalog/>}/>
            <Route path='ticketreservation' element={<TicketReservation/>}/>
            <Route path='ticketrequest' element={<TicketRequest/>}/>
            <Route path='helppage' element={<HelpPage/>}/>
            <Route path='listtiket' element={<ListTiket/>}/>
            <Route path='details' element={<Details/>}/>
            <Route path='login' element={<LoginAdmin/>}/>
            <Route path='rating1' element={<Rating1/>}/>
        </Routes>
        <Sidebar>
          <Routes>
            <Route path='pemesanan' element={<PemesananAdmin/>}/>
            <Route path='detailpemesanan' element={<DetailPemesanan/>}/>
            <Route path='dashboard' element={<DashboardAdmin/>}/>
            <Route path='jadwal' element={<Jadwal/>}/>
            <Route path='addacara' element={<AddAcara/>}/>
            <Route path='editacara' element={<EditAcara/>}/>
            <Route path='addkunjungan' element={<AddKunjungan/>}/> 
            <Route path='editkunjungan' element={<EditKunjungan/>}/>
            <Route path='rating' element={<RatingPage/>}/>
            <Route path='profile' element={<EditProfil/>}/>
            {/* <Route path='sidenavbar' element={<SideNavBar/>}/>
            <Route path='adminpage' element={<AdminPage/>}/> */}
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>    
  )
}
export default App
