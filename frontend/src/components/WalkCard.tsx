import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { WalkRoute } from '../types/WalkRoute.types';

interface WalkCardProps {
    walkRoute: WalkRoute,
    date: string
}

export default function WalkCard({ walkRoute, date }: WalkCardProps) {
    return (
        <Box sx={{ width: '100%', pt: 2 }}>
            <Card sx={{ width: '100%' }}>
                <CardContent>
                    <Typography variant='h5'>{walkRoute.name}</Typography>
                    <Typography variant='body1' color='text.secondary'>
                        Completed on: {date}
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                        Length: {walkRoute.length} metres
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}