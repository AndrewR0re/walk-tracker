import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import MunroCard from '../components/MunroCard.js'
import { MunroClimb } from '../types/MunroClimb.types.ts';
import MunroProgressCard from '../components/MunroProgressCard.tsx';

export default function MunroPage() {

    const [climbs, setClimbs] = useState<MunroClimb[]>([]);

    useEffect(() => {
        fetch('/api/climb/munro')
            .then(res => res.json())
            .then(data => setClimbs(data));
    }, []);

    return (
        <Box
            sx={{ p: 2 }}
        >
            <MunroProgressCard
                climbs={climbs}
            />
            {climbs.map((climb, i) => (
                <MunroCard
                    key={i}
                    munro={climb.munro}
                    date={climb.date}
                />
            ))}
        </Box>
    )
}