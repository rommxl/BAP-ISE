import React, { useState } from 'react'
import FilterBar from '../components/FilterBar'
import ResultTable from '../components/ResultTable'
import Charts from '../components/Charts'

export default function Dashboard() {

  const [tableData, setTableData] = useState({'Sr': {0: 1, 1: 2, 2: 3, 3: 4, 4: 5},
  'Description': {0: 'Epson Dot Matrix Printer',
   1: 'Windows Vista Business Upgrade',
   2: 'MS Visio Professional',
   3: 'Windows Vista Business Upgrade',
   4: 'Turbo Assembler TASM'},
  'Qty': {0: 2.0, 1: 50.0, 2: 1.0, 3: 1.0, 4: 2.0},
  'Date': {0: '31/01/2007',
   1: '06/03/2007',
   2: '02/03/2007',
   3: '05/02/2007',
   4: '05/03/2007'},
  'Supplier': {0: 'RNT', 1: 'RNT', 2: 'LDS', 3: 'LDS', 4: 'LDS'},
  'Main': {0: 8, 1: 9, 2: 12, 3: 13, 4: 14},
  'Lab': {0: 3.0, 1: 10.0, 2: 3.0, 3: 4.0, 4: 6.0},
  'Amount': {0: 17300.0, 1: 143500.0, 2: 4750.0, 3: 21381.0, 4: 5512.0},
  'Product Type': {0: 'Printer',
   1: 'Upgrade',
   2: 'Software',
   3: 'Software',
   4: 'Software'},
  'Remarks': {0: 'Installed in FE Lab',
   1: 'Kept in software cupboard for entire college',
   2: 'HOD Cabin Cupboard',
   3: 'HOD Cabin Cupboard',
   4: 'HOD Cabin Cupboard'}});
   
   const [display,setDisplay] = useState("none")

  return (
    <div className='w-full min-h-screen bg-blue-900'>
        <FilterBar setTableData={setTableData} setDisplay={setDisplay}/>
        <ResultTable tableData={tableData} display={display}/>
        <Charts dataframe={tableData}/>
    </div>
  )
}
