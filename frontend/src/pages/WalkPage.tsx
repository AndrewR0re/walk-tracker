import Box from '@mui/material/Box'
import WalkCard from '../components/WalkCard.js'
import { Walk } from '../types/Walk.types.js';
import { useWalks } from '../hooks/useWalks.js';

export default function WalkPage() {
    const { walks, loading, error } = useWalks();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <Box
            sx={{ p: 2 }}
        >
            {walks.map((w: Walk) => (
                <WalkCard
                    key={w.id}
                    walkRoute={w.walkRoute}
                    walkDate={w.walkDate}
                />
            ))}
        </Box>
    )
}