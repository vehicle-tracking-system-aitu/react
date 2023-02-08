import SidebarComponent from "./components/sidebar/SidebarComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginComponent from "./components/login/LoginComponent";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SidebarComponent/>} />
                <Route path='/login' element={<LoginComponent/>} />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
