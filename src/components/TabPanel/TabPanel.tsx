import Box from '@mui/material/Box/Box';

interface TabPanelProps {
	children: React.ReactNode;
	index: number;
	value: number;
}

const TabPanel = ({ children, value, index }: TabPanelProps) => {
	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}>
			{value === index && <Box>{children}</Box>}
		</div>
	);
};

export default TabPanel;
