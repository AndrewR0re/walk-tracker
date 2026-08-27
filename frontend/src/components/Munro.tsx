import Box from "@mui/material/Box";
import { MunroProps } from "../types/Munro.types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Munro({name, altitude, date}: MunroProps) {
    return (
        <Box sx={{ width: '100%', pt: 2 }}>
            <Card sx={{ width: '100%' }}>
                <CardContent>
                    <Typography variant="h5">{name}</Typography>
                    <Typography variant="body1" color="text.secondary">
                        Altitude: {altitude}m
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Climbed on: {date}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}