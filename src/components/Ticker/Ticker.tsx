import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../core/store';
import { changeInstrument } from '../../core/store/TradingSlice';
import FormControl from '@mui/material/FormControl/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select/Select';
import Typography from '@mui/material/Typography/Typography';
import Box from '@mui/material/Box/Box';
import moment from 'moment';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import CurrencyData from '../../shared/interfaces/currencyData.interface';

interface TickerProps {
	currenciesData: CurrencyData[];
}

const Ticker = ({ currenciesData }: TickerProps) => {
	const now = moment().format('HH:mm:ss');
	const [time, setTime] = useState<string>(now);
	const instrument = useAppSelector((state) => state.trading.instrument);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const timeout = setInterval(() => {
			const now = moment().format('HH:mm:ss');

			setTime(now);
		}, 1000);

		return () => {
			clearInterval(timeout);
		};
	}, []);

	const handleChange = (e: SelectChangeEvent) => {
		dispatch(changeInstrument(e.target.value as string));
	};

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				p: 3,
			}}>
			<Typography component='h3' variant='h3'>
				{time}
			</Typography>

			<Box sx={{ minWidth: 120, mt: 2 }}>
				<FormControl fullWidth>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={instrument}
						displayEmpty
						onChange={handleChange}>
						<MenuItem value=''>
							<em>None</em>
						</MenuItem>
						{currenciesData.map((item) => {
							return (
								<MenuItem key={item.id} value={item.name}>
									{item.name}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
			</Box>
		</Box>
	);
};

export default Ticker;
