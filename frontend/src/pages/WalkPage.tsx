import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import WalkCard from '../components/WalkCard.js'
import { CompletedWalk } from '../types/CompletedWalk.types';

export default function WalkPage() {
    const [walks, setWalks] = useState<CompletedWalk[]>([]);

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
                <WalkCard key={i} walk={w.walk} date={w.date}></WalkCard>
            ))}
        </Box>
    )
}