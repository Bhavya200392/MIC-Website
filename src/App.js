import './App.css';
import './index.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import Department from './Department';
function App() {
  return (
    <>
    {/* <BrowserRouter>  That included in index.js no worry*/}
      <Routes>
        <Route path="/" element={<><Department/></>}/>
      </Routes>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;