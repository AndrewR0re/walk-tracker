import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { WalkProps } from "../types/Walk.types";

export default function Walk({ name, date }: WalkProps) {
    return (
        <Box sx={{ width: '100%', pt: 2 }}>
            <Card sx={{ width: '100%' }}>
                <CardContent>
                    <Typography variant="h5">{name}</Typography>
                    <Typography variant="body1" color="text.secondary">
                        Completed on: {date}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}