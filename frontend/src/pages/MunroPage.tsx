import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Munro from '../components/Munro.js'
import { MunroProps } from '../types/Munro.types.js'

export default function MunroPage() {

    const [munros, setMunros] = useState<MunroProps[]>([]);

    useEffect(() => {
        fetch('/api/munros')
            .then(res => res.json())
            .then(data => setMunros(data));
    }, []);

    return (
        <Box
            sx={{ p: 2 }}
        >
            {munros.map((m, i) => (
                <Munro key={i} name={m.name} altitude={m.altitude} date={m.date} />
            ))}
        </Box>
    )
}