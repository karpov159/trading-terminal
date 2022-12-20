import { SyntheticEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box/Box';
import Tab from '@mui/material/Tab/Tab';
import Tabs from '@mui/material/Tabs/Tabs';
import TabPanel from '../components/TabPanel/TabPanel';
import Ticker from '../components/Ticker/Ticker';
import CurrencyData from '../shared/interfaces/currencyData.interface';
import PriceBox from '../components/PriceBox/PriceBox';

const MainPage = () => {
	const [tab, setTab] = useState<number>(0);
	const [buyValue, setBuyValue] = useState<string>('0');
	const [sellValue, setSellValue] = useState<string>('0');
	const [currency, setCurrency] = useState<string>('');

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
			(Math.random() * (0.03 * 0.003) + 0.003)
		).toFixed(4);

		setBuyValue(buyValue);

		setSellValue(String(sellValue));
	};

	useEffect(() => {
		randomValues();
	}, [currency]);

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

	return (
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
					currency={currency}
					setCurrency={setCurrency}
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
					<PriceBox title='BUY' value={buyValue} />
					<PriceBox title='SELL' value={sellValue} />
				</Box>
			</TabPanel>

			<TabPanel value={tab} index={1}>
				arcs
			</TabPanel>
		</Box>
	);
};

export default MainPage;
