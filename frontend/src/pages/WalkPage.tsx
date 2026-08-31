import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Walk from '../components/Walk.js'
import { WalkProps } from '../types/Walk.types';

export default function WalkPage() {
    const [walks, setWalks] = useState<WalkProps[]>([]);

    useEffect(() => {
        fetch('/api/walks')
            .then(res => res.json())
            .then(data => setWalks(data));
    }, []);

    return (
        <Box
            sx={{ p: 2 }}
        >
            {walks.map((w, i) => (
                <Walk key={i} name={w.name} date={w.date}></Walk>
            ))}
        </Box>
    )
}