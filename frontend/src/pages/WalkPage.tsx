import Box from "@mui/material/Box"
import Walk from "../components/Walk.js"

export default function WalkPage() {
    const walks = [
        { name: 'Alyth Den', date: '24/08/2026' },
        { name: 'Kinpurney Hill', date: '25/08/2026' }
    ]

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