import { SyntheticEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box/Box';
import Tab from '@mui/material/Tab/Tab';
import Tabs from '@mui/material/Tabs/Tabs';
import TabPanel from '../components/TabPanel/TabPanel';
import Ticker from '../components/Ticker/Ticker';
import CurrencyData from '../shared/interfaces/currencyData.interface';
import PriceBox from '../components/PriceBox/PriceBox';
import OrderData from '../shared/interfaces/order.interface';
import Archive from '../components/Archive/Archive';

const MainPage = () => {
	const [tab, setTab] = useState<number>(0);
	const [buyValue, setBuyValue] = useState<string>('0');
	const [sellValue, setSellValue] = useState<string>('0');
	const [instrument, setInstrument] = useState<string>('');
	const [orders, setOrders] = useState<OrderData[]>([]);

	const currenciesData: CurrencyData[] = [
		{
			name: 'EUR/USD',
			id: 1,
		},
		{
			name: 'AUD/USD',
			id: 2,
		},
		{
			name: '	USD/RUB',
			id: 3,
		},
		{
			name: '	EUR/RUB',
			id: 4,
		},
	];

	const randomValues = () => {
		const buyValue = (Math.random() * (2 - 0)).toFixed(4);
		const sellValue = (
			+buyValue -
			(Math.random() * (0.03 - 0.003) + 0.003)
		).toFixed(4);

		setBuyValue(buyValue);

		setSellValue(String(sellValue));
	};

	useEffect(() => {
		randomValues();
	}, [instrument]);

	useEffect(() => {
		const timeout = setInterval(() => {
			randomValues();
		}, 500000);

		return () => {
			clearInterval(timeout);
		};
	}, []);

	const handleChange = (e: SyntheticEvent, newValue: number) => {
		setTab(newValue);
	};

	const addOrder = (order: OrderData) => {
		setOrders([...orders, order]);
	};

	return (
		<>
			<Box sx={{ width: '100%' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs
						value={tab}
						onChange={handleChange}
						aria-label='basic tabs example'>
						<Tab label='Trading' />

						<Tab label='Archive' />
					</Tabs>
				</Box>

				<TabPanel value={tab} index={0}>
					<Ticker
						currenciesData={currenciesData}
						instrument={instrument}
						setInstrument={setInstrument}
					/>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							paddingLeft: 10,
							paddingRight: 10,
							mt: 4,
						}}>
						{instrument ? (
							<>
								<PriceBox
									title='Buy'
									price={buyValue}
									instrument={instrument}
									addOrder={addOrder}
								/>
								<PriceBox
									title='Sell'
									price={sellValue}
									instrument={instrument}
									addOrder={addOrder}
								/>
							</>
						) : null}
					</Box>
				</TabPanel>

				<TabPanel value={tab} index={1}>
					<Archive />
				</TabPanel>
			</Box>
		</>
	);
};

export default MainPage;
