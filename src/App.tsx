import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog';
import LoginAdmin from './pages/LoginAdmin';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Catalog/>}>
            <Route path='catalog' element={<Catalog/>}/>
            {/* <Route path='otherpages' element={<OtherPages/>}/> */
            /* <Route path='otherpages' element={<OtherPages/>}/> */
            /* <Route path='otherpages' element={<OtherPages/>}/> */
            /* <Route path='otherpages' element={<OtherPages/>}/> */
            }
          </Route>
          {/* <Route path='login' element={<LoginAdmin/>}/> */
          <Route path='login' element={<LoginAdmin/>}/>
          }
        </Routes>
      </BrowserRouter>
    </div>    
  )
}

export default App