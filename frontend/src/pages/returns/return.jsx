import React from 'react'
import Navigationbar from "../../components/navbar";


function returnpage() {
  return (
    <>
    <Navigationbar/>

    
    <section className='w-full'>


      <div className='pt-36 px-4 lg:px-20 container mx-auto'>

          <div className='flex align-items-center text-base'>
              <a href="/dashboard" className='text-black font-bold'>Dashboard</a>
              &nbsp;
              <span className='text-slate-400 font-light'>/ Return</span>
          </div>

        </div>



    </section>



    </>
  )
}

export default returnpage
