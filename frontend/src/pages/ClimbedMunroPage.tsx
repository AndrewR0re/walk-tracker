import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import ClimbedMunroCard from '../components/ClimbedMunroCard.js'
import { ClimbedMunro } from '../types/ClimbedMunro.types.ts';
import HillProgressCard from '../components/HillProgressCard.tsx';

export default function ClimbedMunroPage() {

    const [climbedMunros, setClimbedMunros] = useState<ClimbedMunro[]>([]);

    useEffect(() => {
        fetch('/api/climbedMunro')
            .then(res => res.json())
            .then(data => setClimbedMunros(data));
    }, []);

    return (
        <Box
            sx={{ p: 2 }}
        >
            <HillProgressCard
                totalHills={282}
                totalCompletedHills={climbedMunros.length}
            />
            {climbedMunros.map((c) => (
                <ClimbedMunroCard
                    key={c.munro.id}
                    munro={c.munro}
                    climbedDate={c.climbDate}
                />
            ))}
        </Box>
    )
}