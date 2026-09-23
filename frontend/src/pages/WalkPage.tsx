import Box from '@mui/material/Box'
import WalkCard from '../components/WalkCard'
import { Walk } from '../types/Walk.types';
import { useWalks } from '../hooks/useWalks';

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