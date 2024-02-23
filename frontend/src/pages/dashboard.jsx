import React from 'react'
import { Typography } from '@mui/material';

function dashboard() {
  return (
    
    <section className='w-full h-screen grid content-center'>
                    <div class="mt-16 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 px-8 lg:px-48 py-24">

                          
                            <a href='/page1' className='bg-violet-200 text-black p-4 lg:p-6 text-center rounded'>
                            <Typography variant="h3">NEW ORDER</Typography>
                            </a>

                            <a href='/page1' className='bg-rose-200 text-black p-4 lg:p-6 text-center rounded'>
                            <Typography variant="h3">STOCK LEVEL WARNING</Typography>
                            </a>

                            <a href='/page1' className='bg-slate-200 text-black p-4 lg:p-6 text-center rounded'>
                            <Typography variant="h3">CALCULATOR</Typography>
                            </a>

                            <a href='/page1' className='bg-indigo-200 text-black p-4 lg:p-6 text-center rounded'>
                            <Typography variant="h3">RETURN</Typography>
                            </a>

                            <a href='/page1' className='bg-amber-200 text-black p-4 lg:p-6 text-center rounded'>
                            <Typography variant="h3">WHOLE SALE PURCHASE</Typography>
                            </a>

                            <a href='/page1' className='bg-slate-200 text-black p-4 lg:p-6 text-center rounded'>
                            <Typography variant="h3"> </Typography>
                            </a>

                            <a href='/page1' className='bg-blue-200 text-black p-4 lg:p-6 text-center rounded'>
                            <Typography variant="h3">SALES</Typography>
                            </a>

                            <a href='/page1' className='bg-sky-200 text-black p-4 lg:p-6 text-center rounded'>
                            <Typography variant="h3">INVENTORY</Typography>
                            </a>

                            <a href='/page1' className='bg-cyan-200 text-black p-4 lg:p-6 text-center rounded'>
                            <Typography variant="h3">REPORTS</Typography>
                            </a>

                    </div>
    </section>
    
  );
}

export default dashboard;
