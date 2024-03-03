import 'react-scroll'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Details from './pages/Details';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Catalog/>}/>
            <Route path='catalog' element={<Catalog/>}/>
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
