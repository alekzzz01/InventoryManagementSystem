import React, { useState } from 'react';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Navigationbar from "../../components/navbar";
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';
import DatePicker from 'react-datepicker'; // Import the datepicker component
import 'react-datepicker/dist/react-datepicker.css'; // Datepicker styles

function Sales() {
  const [searchText, setSearchText] = useState('');
  const [startDate, setStartDate] = useState(null); // Start date state
  const [endDate, setEndDate] = useState(null); // End date state

   // Function to clear selected dates
   const clearDates = () => {
    setStartDate(null);
    setEndDate(null);
  };


  const columns = [
    {
      name: 'Model',
      selector: row => row.model,
      sortable: true,
    },
    {
      name: 'Order Number',
      selector: row => row.ordernumber,
      sortable: true,
    },
    {
      name: 'Category',
      selector: row => row.category,
      sortable: true,
    },
    {
      name: 'Quantity',
      selector: row => row.quantity,
      sortable: true,
    },
    {
      name: 'Date',
      selector: row => row.date,
      sortable: true,
    },
    {
      name: 'Action',
      cell: row => (
        <div className="flex flex-wrap gap-1">
          <a href='/' className="action-button bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" >
            View
          </a>
          <a href='/' className="action-button bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded" >
            Edit
          </a>
          <a href='/' className="action-button bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded" >
            Delete
          </a>
        </div>
      ),
    }
  ];

  const data = [
    {
      id: 1,
      model: 'John',
      ordernumber: 'john@gmail.com',
      category: 'Flava',
      quantity: '12',
      date: '2024-02-01',
    },
    {
      id: 2,
      model: 'John2',
      ordernumber: 'john2@gmail.com',
      category: 'Flava',
      quantity: '8',
      date: '2024-02-05',
    },
    // Add more data objects with date property...
  ];

  // Filter the data based on search text and date range
  const filteredData = data.filter(item =>
    (item.model.toLowerCase().includes(searchText.toLowerCase()) ||
    item.ordernumber.toLowerCase().includes(searchText.toLowerCase()) ||
    item.category.toLowerCase().includes(searchText.toLowerCase()) ||
    item.quantity.toString().toLowerCase().includes(searchText.toLowerCase())) &&
    (!startDate || new Date(item.date) >= startDate) &&
    (!endDate || new Date(item.date) <= endDate)
  );

  return (
    <>
      <Navigationbar />
      <section className='w-full'>
        <div className='pt-36 px-4 lg:px-20'>

          <div className='flex flex-wrap items-center justify-between gap-8'>

          <div className='flex align-items-center text-base'>
            <a href="/dashboard" className='text-black font-bold'>Dashboard</a>
            &nbsp;
            <span className='text-slate-400 font-light'>/ Sales</span>
          </div>



          <div className='flex flex-wrap items-center gap-3 text-black'>
                  <div>
                    <input
                      type='text'
                      placeholder='Search data here...'
                      className='w-full text-base py-2 px-4 border border-gray-300 rounded'
                      value={searchText}
                      onChange={e => setSearchText(e.target.value)}
                    />

                  </div>

                  <div>
                    <CSVLink data={filteredData} filename={"sales_data.csv"}>
                      <button className='action-button bg-blue-500 hover:bg-blue-700 text-white font-regular text-base py-2 px-4 rounded'>Export CSV</button>
                    </CSVLink>
                  </div>
                 
          </div>

            
          <div className='flex flex-wrap items-center gap-3 text-black'>

            <h1>Choose a date: </h1>

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start Date"
              className='text-base py-2 px-4 border border-gray-300 rounded'
            />

            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="End Date"
              className='text-base py-2 px-4 border border-gray-300 rounded'
            />

            <button className='action-button bg-red-500 hover:bg-red-700 text-white font-regular text-base py-2 px-4 rounded' onClick={clearDates}>Clear Dates</button>
          </div>


          


          </div>




          <div className='mt-6 border border-grey-200'>
            <DataTable
              title="Sales Table"
              columns={columns}
              data={filteredData}
              selectableRows
              pagination
              paginationPerPage={10}
              paginationRowsPerPageOptions={[10, 20, 30]}
              paginationComponentOptions={{
                rowsPerPageText: 'Rows per page:',
              }}
              highlightOnHover
              responsive
              paginationServer
              paginationTotalRows={filteredData.length}
            />
          </div>



        </div>




      </section>
    </>
  );
}

export default Sales;
