import Box from '@mui/material/Box/Box';
import Typography from '@mui/material/Typography/Typography';

interface PriceBoxProps {
	value: string;
	title: string;
}

const PriceBox = ({ value, title }: PriceBoxProps) => {
	const color = title === 'BUY' ? 'green' : 'red';

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				cursor: 'pointer',
			}}>
			<Typography color={color} component='p' variant='h3'>
				{title}
			</Typography>
			<Typography color={color} component='p' variant='h3'>
				{value}
			</Typography>
		</Box>
	);
};

export default PriceBox;
