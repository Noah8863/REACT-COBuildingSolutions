import React from 'react'
import Paper from '@mui/material/Paper';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import img from '../images/lumberPicture2.jpeg'

const columns = [
    { name: 'product', title: 'Product' },
    { name: 'size', title: 'Available Sizes' },
];
const rows = [
    { product: 'Lumber', size: '2 x 4" - 2 x 12" and ' + "8' - 20' " },
    { product: 'OSB', size: '15/32, 7/16, 19/32, 23/32, T & G' },
    { product: 'Plywood', size: '1/2, 5/8, 3/4' },

];


function lumber() {
    
    return (
        <main>
            <img className="lumberPic" src={img} />
        <Paper className="gridStyle">
            <Grid className="gridStyle"
                rows={rows}
                columns={columns}
            >
                <Table />
                <TableHeaderRow />
            </Grid>
        </Paper>
        </main>
    )
}

export default lumber;