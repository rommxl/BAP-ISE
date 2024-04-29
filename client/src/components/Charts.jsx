import React, { useState } from 'react'
import { Box, Paper, Button } from '@mui/material'
import { PieChart } from '@mui/x-charts/PieChart';
import axios from 'axios'
import { server } from '../constants'

export default function Charts(props) {
    
    const [data,setData] = useState([])
    const [display,setDisplay] = useState("none")
    
    const boxStyle = {
        minHeight:"25rem",
        width:"100%",
        display:display
    }

    async function getData(){
        await axios
        .post(`${server}/visualize/`,props.dataframe)
        .then((res) =>{
            setData(res.data.avg_product_cost);
            setDisplay("flex")
            console.log(res.data)
        })
    }

    return (
    <div className='flex flex-col justify-center items-center space-y-5 p-5 bg-blue-100'>
        <Button variant='outlined' onClick={getData}>Visualise</Button>
        <Box className="justify-evenly" sx={boxStyle} component={Paper}>
            <PieChart
                series={[
                    {
                    data: data,
                    },
                ]}
                width={1100}
                height={400}
                title='Average product cost in filtered data'
            />
        </Box>
    </div>
    )
}
