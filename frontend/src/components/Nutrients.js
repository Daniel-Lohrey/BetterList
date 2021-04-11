import React, {useEffect, useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useParams} from "react-router";
import {getUserProductsById} from "../service/ApiService";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#EAE0D5",
        color: "theme.palette.common.black",
    },
    body: {
        fontSize: 14,
        backgroundColor: "Background"
    },
}))(TableCell);


const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
    TableHead:{
        display: "flex",
        justifyContent: "space-around",
    }
});

export default function Nutrients() {
    const classes = useStyles();
    const [nutrimentsData, setNutrimentsData] = useState([])
    const {id} = useParams();


    useEffect(() => {
        getUserProductsById(id)
            .then((response)=>{
                setNutrimentsData(response.nutriments)
            })
            .catch((error) => console.error(error))
    }, [id])

    return (
        <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell >Calories</StyledTableCell>
                        <StyledTableCell >Fat&nbsp;(g)</StyledTableCell>
                        <StyledTableCell >Carbs&nbsp;(g)</StyledTableCell>
                        <StyledTableCell >Protein&nbsp;(g)</StyledTableCell>
                    </TableRow>
                </TableHead>
                            <StyledTableCell >{nutrimentsData.energy_serving}</StyledTableCell>
                            <StyledTableCell >{nutrimentsData.fat_serving}</StyledTableCell>
                            <StyledTableCell >{nutrimentsData.carbohydrates_value}</StyledTableCell>
                            <StyledTableCell >{nutrimentsData.proteins}</StyledTableCell>
            </Table>
        </TableContainer>
    )
}




