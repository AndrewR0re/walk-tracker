import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import WalkPage from './pages/WalkPage.tsx';
import MunroPage from './pages/MunroPage.tsx';
import Header from './components/Header.tsx';

export default function App() {
  const [tabSelection, setTabSelection] = useState(0);

  const handleTabChange = (_event, tab) => {
    setTabSelection(tab);
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Header tabSelection={tabSelection} onChange={handleTabChange} />

      {tabSelection === 0 && <WalkPage />}
      {tabSelection === 1 && <MunroPage />}
    </Box>
  )
}
