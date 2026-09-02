import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import MunroCard from '../components/MunroCard.js'
import { MunroClimb } from '../types/MunroClimb.types.ts';
import MunroProgressCard from '../components/MunroProgressCard.tsx';

export default function MunroPage() {

    const [munroClimbs, setMunroClimbs] = useState<MunroClimb[]>([]);

    useEffect(() => {
        fetch('/api/climb/munro')
            .then(res => res.json())
            .then(data => setMunroClimbs(data));
    }, []);

    return (
        <Box
            sx={{ p: 2 }}
        >
            <MunroProgressCard
                climbs={munroClimbs}
            />
            {munroClimbs.map((climb, i) => (
                <MunroCard
                    key={i}
                    munro={climb.munro}
                    date={climb.date}
                />
            ))}
        </Box>
    )
}