import Box from '@mui/material/Box';
import { Munro } from '../types/Munro.types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface MunroCardProps {
    munro: Munro,
    date: string
}

export default function MunroCard({ munro, date }: MunroCardProps) {
    const convertMetresToFeet = (metres: number) => {
        const feet = metres * 3.28084;
        return Number(feet.toFixed(2));
    }
    
    return (
        <Box sx={{ width: '100%', pt: 2 }}>
            <Card sx={{ width: '100%' }}>
                <CardContent>
                    <Typography variant='h5'>{munro.name}</Typography>
                    <Typography variant='body1' color='text.secondary'>
                        Altitude: {munro.altitude} metres / {convertMetresToFeet(munro.altitude)} feet
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                        Summited on: {date}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}