import Paper from '@mui/material/Paper/Paper';
import Table from '@mui/material/Table/Table';
import TableBody from '@mui/material/TableBody/TableBody';
import TableCell from '@mui/material/TableCell/TableCell';
import TableContainer from '@mui/material/TableContainer/TableContainer';
import TableHead from '@mui/material/TableHead/TableHead';
import TableRow from '@mui/material/TableRow/TableRow';

const Archive = () => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Dessert (100g serving)</TableCell>
						<TableCell align='right'>Calories</TableCell>
						<TableCell align='right'>Fat&nbsp;(g)</TableCell>
						<TableCell align='right'>Carbs&nbsp;(g)</TableCell>
						<TableCell align='right'>Protein&nbsp;(g)</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{/* {rows.map((row) => (
						<TableRow
							key={row.name}
							sx={{
								'&:last-child td, &:last-child th': {
									border: 0,
								},
							}}>
							<TableCell component='th' scope='row'>
								{row.name}
							</TableCell>
							<TableCell align='right'>{row.calories}</TableCell>
							<TableCell align='right'>{row.fat}</TableCell>
							<TableCell align='right'>{row.carbs}</TableCell>
							<TableCell align='right'>{row.protein}</TableCell>
						</TableRow>
					))} */}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default Archive;
