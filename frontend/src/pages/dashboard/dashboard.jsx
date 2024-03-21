import React from 'react'
import { Typography } from '@mui/material';
import Navigationbar from "../../components/navbar";

function dashboard() {
  return (
      
    <>
     <Navigationbar/>
    <section className='w-full h-screen grid content-center'>
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-8 lg:px-12 xl:px-96 py-24">

                          
                            <a href='/neworder' className='bg-violet-200 text-black p-4 md:p-6 lg:p-6 text-center rounded'>
                            <Typography variant="h3">NEW ORDER</Typography>
                            </a>

                            <a href='/stockwarning' className='bg-rose-200 text-black p-4 md:p-6 lg:p-6 text-center rounded'>
                            <Typography variant="h3">STOCK LEVEL WARNING</Typography>
                            </a>

                            <a href='/calculator' className='bg-slate-200 text-black p-4 md:p-6 lg:p-6 text-center rounded'>
                            <Typography variant="h3">CALCULATOR</Typography>
                            </a>

                            <a href='/return' className='bg-indigo-200 text-black p-4 md:p-6 lg:p-6 text-center rounded'>
                            <Typography variant="h3">RETURN</Typography>
                            </a>

                            <a href='/wholesale' className='bg-amber-200 text-black p-4 md:p-6 lg:p-6 text-center rounded'>
                            <Typography variant="h3">WHOLE SALE PURCHASE</Typography>
                            </a>

                            <a href='/' className='bg-slate-200 text-black p-4 md:p-6 lg:p-6 text-center rounded'>
                            <Typography variant="h3"> </Typography>
                            </a>

                            <a href='/sales' className='bg-blue-200 text-black p-4 md:p-6 lg:p-6 text-center rounded'>
                            <Typography variant="h3">SALES</Typography>
                            </a>

                            <a href='/inventory' className='bg-sky-200 text-black p-4 md:p-6 lg:p-6 text-center rounded'>
                            <Typography variant="h3">INVENTORY</Typography>
                            </a>

                            <a href='/reports' className='bg-cyan-200 text-black p-4 md:p-6 lg:p-6 text-center rounded'>
                            <Typography variant="h3">REPORTS</Typography>
                            </a>

                    </div>
    </section>
    </>
  );
}

export default dashboard;
