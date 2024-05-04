
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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

//this sets up the client for the app 
const queryClient = new QueryClient({
defaultOptions:{ 
 queries:{
  // staleTime: 10 * 1000, //amount of time that the data will stay valid in the cash 
  staleTime: 0 
 }

},
})


function App() {


  return (
<QueryClientProvider client={queryClient}>
  <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
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
  </QueryClientProvider>
  )
}

export default App
 