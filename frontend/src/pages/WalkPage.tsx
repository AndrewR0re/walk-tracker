import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import WalkCard from '../components/WalkCard.js'
import { Walk } from '../types/Walk.types.js';

export default function WalkPage() {
    const [walks, setWalks] = useState<Walk[]>([]);

    useEffect(() => {
        fetch('/api/walk')
            .then(res => res.json())
            .then(data => setWalks(data));
    }, []);

    return (
        <Box
            sx={{ p: 2 }}
        >
            {walks.map((w, i) => (
                <WalkCard key={i} walkRoute={w.walkRoute} date={w.date}></WalkCard>
            ))}
        </Box>
    )
}