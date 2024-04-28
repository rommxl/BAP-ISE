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
    // const[curentCategory,setCurrentCategory] = useState("1");
    // const categoryChange = (e) => setCurrentCategory (e.target.value)

    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [supplier, setSupplier] = useState('');
    const [labNumber, setLabNumber] = useState('');
    const [currentCategory, setCurrentCategory] = useState("1");

    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleDateChange = (e) => setDate(e.target.value);
    const handleSupplierChange = (e) => setSupplier(e.target.value);
    const handleLabNumberChange = (e) => setLabNumber(e.target.value);
    const categoryChange = (e) => setCurrentCategory(e.target.value);

    const handleClick = (e) => {
        // Accessing the values of the text fields
        console.log('Description:', description);
        console.log('Date:', date);
        console.log('Supplier:', supplier);
        console.log('Lab Number:', labNumber);
        console.log('Product type:', item_cat[currentCategory]);
        const searchJson = {
            description:description,
            date:date,
            supplier:supplier,
            labNumber:labNumber,
            currentCategory:item_cat[currentCategory]
        }
        // Perform filtering or any other action here
        e.preventDefault();
    };

    return (
        <div>
            <Box sx={boxStyle} className="flex justify-evenly p-4">
                <TextField id="description" label="Description" variant="outlined" value={description} onChange={handleDescriptionChange} />
                <TextField id="date" label="Date" variant="outlined" placeholder='MM/YYYY' value={date} onChange={handleDateChange} />
                <TextField id="supplier" label="Supplier" variant="outlined" value={supplier} onChange={handleSupplierChange} />
                <TextField id="labNumber" label="Lab number" variant="outlined" value={labNumber} onChange={handleLabNumberChange} />
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentCategory}
                    label="Product type"
                    onChange={categoryChange}
                >
                    {Object.keys(item_cat).map(MenuItemGen)}
                </Select>
                <Button variant='solid' onClick={handleClick}>Filter</Button>
            </Box>
        </div>
    );
}
