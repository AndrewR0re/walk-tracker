import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Climb } from "../types/Climb.types";

interface HillProgressCardProps {
    totalCompletedHills: number,
    totalHills: number,
}

export default function HillProgressCard({ totalHills, totalCompletedHills }: HillProgressCardProps) {
    const completionPercentage = () => {
        const completionPercentage = ((totalCompletedHills / totalHills) * 100);
        return Number(completionPercentage.toFixed(2));
    }

    return (
        <Card sx={{ width: '100%' }}>
            <CardContent>
                <Typography variant='body1' color='text.secondary'>
                    {totalCompletedHills} of {totalHills} summited generic
                </Typography>
                <Typography>
                    {completionPercentage()}%
                </Typography>
            </CardContent>
        </Card>
    )
}