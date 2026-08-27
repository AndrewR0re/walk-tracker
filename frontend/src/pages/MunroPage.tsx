import Box from "@mui/material/Box"
import Munro from "../components/Munro.js"

export default function MunroPage() {
    const munros = [
        {name: 'Mayar', altitude: 913, date: '24/12/2017'},
        {name: 'Dreish', altitude: 907, date: '24/12/2017'},
        {name: 'Sgùrr na Banachdich', altitude: 965, date: '10/08/2019'},
        {name: 'Mount Keen', altitude: 939, date: '24/04/2021'},
        {name: 'Ben More', altitude: 913, date: '29/10/2024'},
        {name: 'Càrn Aosda', altitude: 915, date: '12/07/2025'},
        {name: 'Càrn a\' Ghèoidh', altitude: 975, date: '12/07/2025'},
        {name: 'The Cairnwell', altitude: 933, date: '12/07/2025'},
        {name: 'Glas Maol', altitude: 1068, date: '12/07/2025'},
        {name: 'Creag Leacach', altitude: 987, date: '12/07/2025'}
        
    ];

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