import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { Climb } from '../types/Climb.types.ts';
import GrahamCard from '../components/GrahamCard.tsx';
import HillProgressCard from '../components/HillProgressCard.tsx';

export default function GrahamPage() {

    const [climbs, setClimbs] = useState<Climb[]>([]);

    useEffect(() => {
        fetch('/api/climb?type=graham')
            .then(res => res.json())
            .then(data => setClimbs(data));
    }, []);

    return (
        <Box
            sx={{ p: 2 }}
        >
            <HillProgressCard
                totalHills={231}
                totalCompletedHills={climbs.length}
            />
            {climbs.map((climb, i) => (
                <GrahamCard
                    key={i}
                    graham={climb.hill}
                    date={climb.date}
                />
            ))}
        </Box>
    )
}