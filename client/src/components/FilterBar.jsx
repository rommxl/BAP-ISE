import React, { useState } from 'react'
import { Box,TextField, Select, MenuItem,Button } from '@mui/material'

import { item_cat } from '../constants';


function MenuItemGen(key){

    return(
        <MenuItem key={key} value={key}>{item_cat[key]}</MenuItem>
    )
}

function handleClick(e){
    console.log(e.target.parentNode);
    e.preventDefault();
}


export default function FilterBar() {

    const boxStyle = {
        width:"100vw",
        minHeight:"5rem",
        backgroundColor:"red"
    }
    const[curentCategory,setCurrentCategory] = useState("1");
    const categoryChange = (e) => setCurrentCategory (e.target.value)

  return (
    <div>
      <Box sx={boxStyle} className="flex justify-evenly p-4">
        <TextField id="Description" label="Description" variant="outlined" />
        <TextField id="Date" label="Date" variant="outlined" />
        <TextField id="Supplier" label="Supplier" variant="outlined" />
        <TextField id="Lab number" label="Lab number" variant="outlined" />
        <Select
            labelId="demo-simple-select-label"
            id="category"
            value={curentCategory}
            label="Product type"
            onChange={categoryChange}
        >
        {Object.keys(item_cat).map(MenuItemGen)}
        </Select>
        <Button variant='solid' onClick={handleClick}>Filter</Button>
      </Box>
    </div>
  )
}
