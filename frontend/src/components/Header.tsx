import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';

interface HeaderProps {
    tabSelection: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export default function Header({ tabSelection, onChange }: HeaderProps) {
    return (
        <AppBar
            position='static'
            color="primary"
        >
            <Toolbar>
                <Tabs
                    value={tabSelection}
                    onChange={onChange}
                    centered
                    textColor='secondary'
                    indicatorColor='secondary'
                >
                    <Tab label='Walks' />
                    <Tab label='Munros' />
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}