import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Walk } from '../types/Walk.types';

interface WalkCardProps {
    walk: Walk,
    date: string
}

export default function WalkCard({ walk, date }: WalkCardProps) {
    return (
        <Box sx={{ width: '100%', pt: 2 }}>
            <Card sx={{ width: '100%' }}>
                <CardContent>
                    <Typography variant='h5'>{walk.name}</Typography>
                    <Typography variant='body1' color='text.secondary'>
                        Completed on: {date}
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                        Length: {walk.length} meters
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}