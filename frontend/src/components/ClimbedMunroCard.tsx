import Box from '@mui/material/Box';
import { Munro } from '../types/Munro.types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeaderActions from './CardHeaderActions';
import EditClimbedMunroButton from './EditClimbedMunroButton';
import DeleteClimbedMunroButton from './DeleteClimbedMunroButton';

interface ClimbedMunroCardProps {
    munro: Munro,
    climbedDate: string
}

export default function ClimbedMunroCard({ munro, climbedDate }: ClimbedMunroCardProps) {
    const convertMetresToFeet = (metres: number) => {
        const feet = metres * 3.28084;
        return Number(feet.toFixed(2));
    }

    return (
        <Box sx={{ width: '100%', pt: 2 }}>
            <Card sx={{ width: '100%', position: 'relative' }}>
                <CardHeaderActions>
                    <EditClimbedMunroButton />
                    <DeleteClimbedMunroButton />
                </CardHeaderActions>
                <CardContent sx={{ pr: 8 }}>
                    <Typography variant='h5'>{munro.name}</Typography>
                    <Typography variant='body1' color='text.secondary'>
                        Summited on: {climbedDate}
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                        Altitude: {munro.altitudeMetres} metres / {convertMetresToFeet(munro.altitudeMetres)} feet
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                        Region: {munro.region}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}