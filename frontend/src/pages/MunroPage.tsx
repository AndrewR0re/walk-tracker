import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Munro from '../components/Munro.js'
import { MunroProps } from '../types/Munro.types.js'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MunroPage() {

    const [munros, setMunros] = useState<MunroProps[]>([]);

    useEffect(() => {
        fetch('/api/munros')
            .then(res => res.json())
            .then(data => setMunros(data));
    }, []);

    const completionPercentage = () => {
        const completionPercentage = ((munros.length / 282) * 100);
        return Number(completionPercentage.toFixed(2));
    }

    return (
        <Box
            sx={{ p: 2 }}
        >
            <Card sx={{ width: '100%' }}>
                <CardContent>
                    <Typography variant='body1' color='text.secondary'>
                        {munros.length} of 282 summited
                    </Typography>
                    <Typography>
                        {completionPercentage()}%
                    </Typography>
                </CardContent>
            </Card>
            {munros.map((m, i) => (
                <Munro key={i} name={m.name} altitude={m.altitude} date={m.date} />
            ))}
        </Box>
    )
}