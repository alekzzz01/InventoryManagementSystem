import React, { useMemo } from 'react'
import 'tailwindcss/tailwind.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from 'react-redux';
import { themeSettings } from 'theme';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Navigationbar from "./components/navbar";


import Dashboard from "./pages/dashboard";

function App() {

  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo (() => createTheme(themeSettings(mode)), [mode]);




  return (
    
    <div className='app'>
    <BrowserRouter>
    <Navigationbar/>
      <ThemeProvider theme={theme}>
              <CssBaseline />
              <Routes>

              <Route path='/' element={<Dashboard/>} />
              <Route path='/dashboard' element={<Dashboard/>}></Route>
                  

              
              </Routes>
              

      </ThemeProvider>
    </BrowserRouter>
       

    </div>
  )
}

export default App
