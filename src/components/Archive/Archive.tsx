import { useAppSelector } from '../../core/store';
import Paper from '@mui/material/Paper/Paper';
import Table from '@mui/material/Table/Table';
import TableBody from '@mui/material/TableBody/TableBody';
import TableCell from '@mui/material/TableCell/TableCell';
import TableContainer from '@mui/material/TableContainer/TableContainer';
import TableHead from '@mui/material/TableHead/TableHead';
import TableRow from '@mui/material/TableRow/TableRow';

const Archive = () => {
	const orders = useAppSelector((state) => state.trading.orders);

	const cells = ['Side', 'Price', 'Instrument', 'Volume', 'Timestamp'];

	return (
		<TableContainer sx={{ padding: '0px' }} component={Paper}>
			<Table aria-label='simple table'>
				<TableHead>
					<TableRow>
						{cells.map((cell, i) => (
							<TableCell key={i} align='right'>
								{cell}
							</TableCell>
						))}
					</TableRow>
				</TableHead>

				<TableBody>
					{orders.map((order) => (
						<TableRow
							key={order.timestamp}
							sx={{
								'&:last-child td, &:last-child th': {
									border: 0,
								},
							}}>
							<TableCell
								sx={{
									color:
										order.side === 'Buy' ? 'green' : 'red',
								}}
								align='right'>
								{order.side}
							</TableCell>

							<TableCell align='right'>{order.price}</TableCell>

							<TableCell align='right'>
								{order.instrument}
							</TableCell>

							<TableCell align='right'>{order.volume}</TableCell>

							<TableCell align='right'>
								{order.timestamp}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default Archive;
