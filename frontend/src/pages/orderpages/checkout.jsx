import React from 'react'
import Navigationbar from "../../components/navbar";

function checkout() {
  return (
    <>
    <Navigationbar/>
  
    <section className='w-full'>

            <div className='pt-36 px-4 lg:px-20 container mx-auto'>

                    <div className='flex align-items-center text-base'>
                        <a href="/dashboard" className='text-black font-bold'>Dashboard</a>
                        &nbsp;
                        <a href="/neworder" className='text-slate-400 font-light'>/ Order</a>
                        &nbsp;
                        <span className='text-slate-400 font-light'>/ Checkout</span>
                    </div>


                    <div className='w-full lg:w-6/12 mx-auto'>

                            <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6 w-full border border-gray-200 rounded-xl mt-6'>

                                    <div class="flow-root">
                                    <ul role="list" class="-my-6 divide-y divide-gray-200">

                                

                                        <li class="flex py-6">
                                        <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img src="https://cdn.shopify.com/s/files/1/0584/6709/0582/files/Melon_Yacult_480x480.jpg?v=1678932278" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." class="h-full w-full object-cover object-center"/>
                                        </div>

                                        <div class="ml-4 flex flex-1 flex-col">
                                            <div>
                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                <a href="#">Medium Stuff Satchel</a>
                                                </h3>
                                                <p class="ml-4">$32.00</p>
                                            </div>
                                            <p class="mt-1 text-sm text-gray-500">Blue</p>
                                            </div>
                                            <div class="flex flex-1 items-end justify-between text-sm">
                                            <p class="text-gray-500">Qty 1</p>

                                            <div class="flex">
                                                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                            </div>
                                            </div>
                                        </div>
                                        </li>

                                        <li class="flex py-6">
                                        <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img src="https://cdn.shopify.com/s/files/1/0584/6709/0582/files/Melon_Yacult_480x480.jpg?v=1678932278" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." class="h-full w-full object-cover object-center"/>
                                        </div>

                                        <div class="ml-4 flex flex-1 flex-col">
                                            <div>
                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                <a href="#">Medium Stuff Satchel</a>
                                                </h3>
                                                <p class="ml-4">$32.00</p>
                                            </div>
                                            <p class="mt-1 text-sm text-gray-500">Blue</p>
                                            </div>
                                            <div class="flex flex-1 items-end justify-between text-sm">
                                            <p class="text-gray-500">Qty 1</p>

                                            <div class="flex">
                                                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                            </div>
                                            </div>
                                        </div>
                                        </li>

                                        <li class="flex py-6">
                                        <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img src="https://cdn.shopify.com/s/files/1/0584/6709/0582/files/Melon_Yacult_480x480.jpg?v=1678932278" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." class="h-full w-full object-cover object-center"/>
                                        </div>

                                        <div class="ml-4 flex flex-1 flex-col">
                                            <div>
                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                <a href="#">Medium Stuff Satchel</a>
                                                </h3>
                                                <p class="ml-4">$32.00</p>
                                            </div>
                                            <p class="mt-1 text-sm text-gray-500">Blue</p>
                                            </div>
                                            <div class="flex flex-1 items-end justify-between text-sm">
                                            <p class="text-gray-500">Qty 1</p>

                                            <div class="flex">
                                                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                            </div>
                                            </div>
                                        </div>
                                        </li>

                                    
                                    </ul>
                                    </div>

                                


                            </div>

                            <div className="px-4 py-6 sm:px-6">

                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>$262.00</p>
                                    </div>

                                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>

                                    <div className="mt-6">
                                    <a href="checkout" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Print Bill</a>
                                    </div>

                            </div>

                    </div>




            </div>



    </section>

    </>
  )
}

export default checkout
