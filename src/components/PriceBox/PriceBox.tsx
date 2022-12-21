import { useState } from 'react';
import Box from '@mui/material/Box/Box';
import Typography from '@mui/material/Typography/Typography';
import ModalDialog from '../ModalDialog/ModalDialog';

interface PriceBoxProps {
	price: string;
	title: string;
}

const PriceBox = ({ price, title }: PriceBoxProps) => {
	const color = title === 'Buy' ? 'green' : 'red';

	const [isModalOpened, setModalOpened] = useState<boolean>(false);

	const onClose = () => {
		setModalOpened(false);
	};

	const onOpen = () => {
		setModalOpened(true);
	};

	return (
		<>
			<Box
				onClick={onOpen}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					cursor: 'pointer',
				}}>
				<Typography
					sx={{ textTransform: 'uppercase' }}
					color={color}
					component='p'
					variant='h3'>
					{title}
				</Typography>

				<Typography
					sx={{ textTransform: 'uppercase' }}
					color={color}
					component='p'
					variant='h3'>
					{price}
				</Typography>
			</Box>

			<ModalDialog
				price={price}
				open={isModalOpened}
				handleClose={onClose}
				title={title}
			/>
		</>
	);
};

export default PriceBox;
