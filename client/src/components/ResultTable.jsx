import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(srno) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function ResultTable(props) {

    const data = props.tableData;
    console.log("Table data");
    console.log(data)

  return (
    <TableContainer component={Paper} sx={{display:props.display}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sr. no.</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Qty</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Supplier</StyledTableCell>
            <StyledTableCell align="right">Main</StyledTableCell>
            <StyledTableCell align="right">Lab</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Product Type</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(data['Sr']).map((srno) => (
            <StyledTableRow key={srno}>
              <StyledTableCell component="th" scope="row">
                {data['Sr'][srno]}
              </StyledTableCell>
              <StyledTableCell align="right">{data['Description'][srno]}</StyledTableCell>
              <StyledTableCell align="right">{data['Qty'][srno]}</StyledTableCell>
              <StyledTableCell align="right">{data['Date'][srno]}</StyledTableCell>
              <StyledTableCell align="right">{data['Supplier'][srno]}</StyledTableCell>
              <StyledTableCell align="right">{data['Main'][srno]}</StyledTableCell>
              <StyledTableCell align="right">{data['Lab'][srno]}</StyledTableCell>
              <StyledTableCell align="right">{data['Amount'][srno]}</StyledTableCell>
              <StyledTableCell align="right">{data['Product Type'][srno]}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
