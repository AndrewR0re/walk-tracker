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
            {walks.map((w) => (
                <WalkCard 
                    key={w.id} 
                    walkRoute={w.walkRoute} 
                    walkDate={w.walkDate}
                />
            ))}
        </Box>
    )
}