import { useState, ChangeEvent } from 'react';
import { addOrder } from '../../core/store/TradingSlice';
import { useAppDispatch, useAppSelector } from '../../core/store';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import Modal from '@mui/material/Modal/Modal';
import TextField from '@mui/material/TextField/TextField';
import Typography from '@mui/material/Typography/Typography';
import OrderData from '../../shared/interfaces/order.interface';
import moment from 'moment';

interface ModalDialogProps {
	open: boolean;
	handleClose: () => void;
	price: string;
	title: string;
}

const ModalDialog = ({ open, handleClose, price, title }: ModalDialogProps) => {
	const [volume, setVolume] = useState<string>('');
	const [error, setError] = useState<boolean>(false);
	const orders = useAppSelector((state) => state.trading.orders);
	const instrument = useAppSelector((state) => state.trading.instrument);
	const dispatch = useAppDispatch();

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const target = e.target;

		setVolume(target.value);
	};

	const onSubmit = () => {
		if (!isNaN(+volume) && volume.length > 0) {
			const timestamp = moment().format('YYYY.MM.DD HH:mm:ss');
			const id = Math.max(...orders.map((order) => order.id), 0) + 1;

			const newOrder: OrderData = {
				side: title,
				price,
				instrument,
				volume,
				timestamp,
				id,
			};

			setError(false);
			dispatch(addOrder(newOrder));
		} else {
			setError(true);
		}
	};

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	const color = title === 'Buy' ? 'green' : 'red';

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'>
			<Box sx={style}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						mb: 1,
					}}>
					<Typography
						id='modal-modal-title'
						variant='body1'
						component='h3'>
						Make order
					</Typography>

					<CloseIcon
						sx={{ cursor: 'pointer' }}
						onClick={handleClose}
					/>
				</Box>

				<hr />

				<Typography
					id='modal-modal-description'
					variant='h6'
					component='h2'
					sx={{ mt: 2, textAlign: 'center' }}>
					<span style={{ color: color, textTransform: 'uppercase' }}>
						{title}{' '}
					</span>
					{price + ' ' + instrument}
				</Typography>

				<TextField
					id='outlined-basic'
					label='Volume'
					variant='outlined'
					error={error}
					value={volume}
					onChange={onChange}
					sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
				/>
				<Box
					sx={{
						mt: 2,
						display: 'flex',
						justifyContent: 'space-between',
					}}>
					<Button
						onClick={handleClose}
						sx={{ width: '100px' }}
						variant='contained'
						color='error'>
						Cancel
					</Button>
					<Button
						onClick={onSubmit}
						sx={{ width: '100px' }}
						variant='contained'
						color='success'>
						OK
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};

export default ModalDialog;
