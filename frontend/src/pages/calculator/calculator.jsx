import React, { useState } from 'react';
import Navigationbar from "../../components/navbar";

function Calculator() {
  const [display, setDisplay] = useState(""); // State to hold the display value

  // Function to handle button clicks
  const handleClick = (value) => {
    if (value === "=") {
      // Evaluate the expression when "=" is clicked
      try {
        setDisplay(eval(display));
      } catch (error) {
        setDisplay("Error");
      }
    } else if (value === "C") {
      // Clear the display when "C" is clicked
      setDisplay("");
    } else {
      // Append the clicked value to the display
      setDisplay(display + value);
    }
  };

  return (
    <> 
      <Navigationbar/>

      <section className='w-full'>
        <div className='pt-36 px-4 lg:px-20 container mx-auto'>
          <div class="bg-white shadow-lg rounded-lg p-6 w-1/4 mx-auto text-black">

            <h1 className='font-bold text-3xl mb-4 text-center'>CALCULATOR</h1>

            <div class="mb-4">
              <input type="text" readonly class="w-full bg-gray-100 text-right text-xl px-2 py-3 rounded-lg focus:outline-none"
                value={display}
                readOnly/>
            </div>

            <div class="grid grid-cols-4 gap-4">
              {/* Buttons for numbers and operators */}
              <button class="bg-gray-200 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none text-black"  onClick={() => handleClick("7")}>7</button>
              <button class="bg-gray-200 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none text-black"  onClick={() => handleClick("8")}>8</button>
              <button class="bg-gray-200 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none text-black"  onClick={() => handleClick("9")}>9</button>
              <button class="bg-yellow-500 text-xl font-bold text-white px-4 py-2 rounded-lg focus:outline-none"  onClick={() => handleClick("/")}>/</button>
              <button class="bg-gray-200 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none text-black"  onClick={() => handleClick("4")}>4</button>
              <button class="bg-gray-200 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none text-black"  onClick={() => handleClick("5")}>5</button>
              <button class="bg-gray-200 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none text-black"  onClick={() => handleClick("6")}>6</button>
              <button class="bg-yellow-500 text-xl font-bold text-white px-4 py-2 rounded-lg focus:outline-none"  onClick={() => handleClick("*")}>*</button>
              <button class="bg-gray-200 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none text-black"  onClick={() => handleClick("1")}>1</button>
              <button class="bg-gray-200 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none text-black"  onClick={() => handleClick("2")}>2</button>
              <button class="bg-gray-200 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none text-black"  onClick={() => handleClick("3")}>3</button>
              <button class="bg-yellow-500 text-xl font-bold text-white px-4 py-2 rounded-lg focus:outline-none"  onClick={() => handleClick("-")} >-</button>
              <button class="bg-gray-200 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none text-black"  onClick={() => handleClick("0")}>0</button>
              <button class="bg-gray-200 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none text-black"  onClick={() => handleClick(".")}>.</button>
              <button class="bg-yellow-500 text-xl font-bold text-white px-4 py-2 rounded-lg focus:outline-none" onClick={() => handleClick("=")}>=</button>
              <button class="bg-yellow-500 text-xl font-bold text-white px-4 py-2 rounded-lg focus:outline-none"  onClick={() => handleClick("+")}>+</button>
              
              {/* Clear button */}
              <button class="bg-red-500 text-xl font-bold text-white px-4 py-2 rounded-lg focus:outline-none"  onClick={() => handleClick("C")}>C</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Calculator;
