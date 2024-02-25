import React, { useState } from 'react';
import Navigationbar from "../../components/navbar";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';


function NewOrder() {

  const [openDropdown, setOpenDropdown] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
      setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
      if (quantity > 1) {
          setQuantity(quantity - 1);
      }
  };

  const handleCloseDropdown = () => {
    setOpenDropdown(false);
  };

  const handleToggleCart = () => {
    setOpenCart(!openCart);
  };

  const handleCloseCart = () => {
    setOpenCart(false);
  };



  return (
    <> 
      <Navigationbar/>
      
      <section className='w-full'>

        <div className='pt-36 px-4 lg:px-20 container mx-auto'>
  
          <div className='flex align-items-center text-base'>
              <a href="/dashboard" className='text-black font-bold'>Dashboard</a>
              &nbsp;
              <span className='text-slate-400 font-light'>/ Order</span>
          </div>
  
          <div className='flex align-items-center justify-between gap-3 text-base mt-6'>

            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className='block md:hidden bg-white border rounded-lg py-2 px-3 shadow-sm focus:outline-none focus:border-indigo-500 text-black relative'
            >
              Menu
            </button>

            <div id="dropdownMenu" style={{ boxShadow: '0 0 20px #00000014' }} className={`bg-white rounded-3xl text-black py-4 px-5 w-full flex flex-wrap items-center gap-6 absolute md:static md:z-auto z-50 left-0 ${openDropdown ? 'top-64' : 'top-[-490px]'} `}>


                    <label for="availability" class="text-slate-400">Filter:</label>

                    <select id="availability" name="availability" class="border rounded-lg py-2 px-3 bg-white shadow-sm focus:outline-none focus:border-indigo-500 w-full sm:w-auto">
                        <option value="">Select Availability</option>
                        <option value="available">Available</option>
                        <option value="not-available">Not Available</option>
                    </select>

                    <select id="brands" name="brands" class="border rounded-lg py-2 px-3 bg-white shadow-sm focus:outline-none focus:border-indigo-500 w-full sm:w-auto mt-4 sm:mt-0">
                        <option value="">Select Brand</option>
                        <option value="flava">Flava</option>
                        <option value="relx">Relx</option>
                    </select>

                    <select id="flavor" name="flavor" class="border rounded-lg py-2 px-3 bg-white shadow-sm focus:outline-none focus:border-indigo-500 w-full sm:w-auto mt-4 sm:mt-0">
                        <option value="">Select Flavor</option>
                        <option value="flavor1">Flavor 1</option>
                        <option value="flavor2">Flavor 2</option>
                    </select>

                    <button
                      onClick={handleCloseDropdown}
                      className='block md:hidden bg-red-400 border rounded-lg py-2 px-3 shadow-sm focus:outline-none  text-white relative'>
                      Close
                    </button>

                </div>


            
  
                <div className='py-4 px-5 bg-indigo-600 rounded-3xl flex items-center gap-2 cursor-pointer' onClick={handleToggleCart}>
                  <LocalMallOutlinedIcon />
                  <button>Cart</button>
                  <p className='rounded-full py-1 px-3 bg-white text-black text-base hidden'>3</p>
                </div>


          </div>


          

          <div className='mt-6'>

                  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5'>

                 
                          <div className='relative product-image rounded-lg border border-gray-400 p-4'>

                            <img src="https://cdn.shopify.com/s/files/1/0584/6709/0582/files/Melon_Yacult_480x480.jpg?v=1678932278" alt="Product Image" className="w-full h-auto" />

                            <div className="mt-2 mb-4 block text-center">
                                <h3 className="text-lg font-semibold text-black">Flava OxBar</h3>
                                <p className="text-sm text-gray-600">₱ 500.00</p>
                            </div>


                            <button className='py-2 px-4 bg-indigo-600 hover:bg-indigo-700 transition-all ease-in duration-200 w-full rounded-sm'>Add to Cart</button>

                          </div>


                          <div className='relative'>
                              
                                <input type="checkbox" className="absolute top-0 left-0 mt-4 ml-4" />
                        
                                <img src="https://cdn.shopify.com/s/files/1/0584/6709/0582/files/Melon_Yacult_480x480.jpg?v=1678932278" alt="Product Image" className="w-full h-auto rounded-md border border-slate-400" />

                                <div className="mt-2 p-4 block">
                                    <h3 className="text-lg font-semibold text-black">Product Name</h3>
                                    <p className="text-sm text-gray-600">$500.00</p>
                                </div>
                          </div>





                  </div>
                






          </div>


        </div>

      {/* Cart component */}
    
        <div className={`${openCart ? 'fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ease-in-out' : 'hidden'}`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
 
              <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  
                  
                    <div className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                          <div className="flex items-start justify-between">
                            <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                            <div className="ml-3 flex h-7 items-center">
                            <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500" onClick={handleCloseCart}>
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Close panel</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          </div>

                          <div class="mt-8">
                            <div class="flow-root">
                              <ul role="list" class="-my-6 divide-y divide-gray-200">

                              <li className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img src="https://cdn.shopify.com/s/files/1/0584/6709/0582/files/Melon_Yacult_480x480.jpg?v=1678932278" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    <a href="#">Flava Oxbar</a>
                                                </h3>
                                                <p className="ml-4">₱ 500.00</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">Flava</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <div className="flex items-center gap-2">
                                                <button type="button" className="mr-1 bg-gray-200 text-gray-600 px-2 py-1 rounded-full focus:outline-none" onClick={decreaseQty}>-</button>
                                                <p className="text-gray-500">Qty {quantity}</p>
                                                <button type="button" className="ml-1 bg-gray-200 text-gray-600 px-2 py-1 rounded-full focus:outline-none" onClick={increaseQty}>+</button>
                                            </div>
                                            <div className="flex">
                                                <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                 </li>


                                

                              
                              </ul>
                            </div>
                          </div>


                        </div>

                        <div class="border-t border-gray-200 px-4 py-6 sm:px-6">

                          <div class="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>₱ 500.00</p>
                          </div>

                          <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>

                          <div class="mt-6">
                            <a href="checkout" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      



      </section>
    </>
  )
}

export default NewOrder;
