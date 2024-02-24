import React, { useMemo } from 'react'
import 'tailwindcss/tailwind.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from 'react-redux';
import { themeSettings } from 'theme';
import { BrowserRouter, Route, Routes} from 'react-router-dom';



import SignInPage from "./auth_pages/sign-in";
import SignUpPage from "./auth_pages/sign-up";


import Dashboard from "./pages/dashboard/dashboard";
import NewOrder from "./pages/orderpages/neworder";
import Checkout from "./pages/orderpages/checkout";
import StockLevelPage from "./pages/stockwarning/stockwarning";
import CalculatorPage from "./pages/calculator/calculator";
import ReturnPage from "./pages/returns/return";
import WholeSalePage from "./pages/wholesale/wholesale";
import SalesPage from "./pages/sales/sales";
import InventoryPage from "./pages/inventory/inventory";
import ReportsPage from "./pages/reportpage/reports";

function App() {

  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo (() => createTheme(themeSettings(mode)), [mode]);




  return (
    
    <div className='app'>
    <BrowserRouter>
    
      <ThemeProvider theme={theme}>
              <CssBaseline />
              <Routes>

              <Route path='/signin' element={<SignInPage/>}></Route>
              <Route path='/signup' element={<SignUpPage/>}></Route>

              <Route path='/' element={<Dashboard/>} />
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/neworder' element={<NewOrder/>}></Route>
              <Route path='/checkout' element={<Checkout/>}></Route>
              <Route path='/stockwarning' element={<StockLevelPage/>}></Route>
              <Route path='/calculator' element={<CalculatorPage/>}></Route>
              <Route path='/return' element={<ReturnPage/>}></Route>
              <Route path='/wholesale' element={<WholeSalePage/>}></Route>
              <Route path='/sales' element={<SalesPage/>}></Route>
              <Route path='/inventory' element={<InventoryPage/>}></Route>
              <Route path='/reports' element={<ReportsPage/>}></Route>
              
                  

              
              </Routes>
              

      </ThemeProvider>
    </BrowserRouter>
       

    </div>
  )
}

export default App
