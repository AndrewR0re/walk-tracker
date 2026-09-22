import Box from '@mui/material/Box'
import ClimbedMunroCard from '../components/ClimbedMunroCard.js'
import { ClimbedMunro } from '../types/ClimbedMunro.types.ts';
import HillProgressCard from '../components/HillProgressCard.tsx';
import { useClimbedMunros } from '../hooks/useClimbedMunros.ts';

export default function ClimbedMunroPage() {

    const { climbedMunros } = useClimbedMunros();

    return (
        <Box
            sx={{ p: 2 }}
        >
            <HillProgressCard
                totalHills={282}
                totalCompletedHills={climbedMunros.length}
            />
            {climbedMunros.map((c: ClimbedMunro) => (
                <ClimbedMunroCard
                    key={c.munro.id}
                    munro={c.munro}
                    climbedDate={c.climbDate}
                />
            ))}
        </Box>
    )
}