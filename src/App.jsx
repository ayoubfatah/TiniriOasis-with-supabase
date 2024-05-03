
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Bookings from "./pages/Bookings"
import Cabins from "./pages/Cabins"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"
import Settings from "./pages/Settings"
import Users from "./pages/Users"
import Account from "./pages/Account"
import GlobalStyles from "./styles/GlobalStyles"
import AppLayout from "./ui/AppLayout"
function App() {
  return (
    <>
  <GlobalStyles></GlobalStyles>
  <BrowserRouter>
  <Routes>
    <Route  element={<AppLayout/>} >  
    <Route  index element={<Navigate replace to="/dashboard"/>}  />
    <Route path="/dashboard" element={<Dashboard/>}  />
    <Route path="/bookings" element={<Bookings/>}  />
    <Route path="/cabins" element={<Cabins/>}  />
    <Route path="/Settings" element={<Settings/>}  />
    <Route path="/Users" element={<Users/>}  />
    <Route path="/Account" element={<Account/>}  />
    </Route>
    <Route path="/Login" element={<Login/>}  />
    <Route path="*" element={<PageNotFound/>}  />
  </Routes>
  </BrowserRouter>
  
    </>
  )
}

export default App
