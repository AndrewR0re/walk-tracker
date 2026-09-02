import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ClimbedMunro } from "../types/ClimbedMunro.types";

interface MunroProgressCardProps {
    climbs: ClimbedMunro[]
}

export default function MunroProgressCard({ climbs }: MunroProgressCardProps) {

    const completionPercentage = () => {
        const completionPercentage = ((climbs.length / 282) * 100);
        return Number(completionPercentage.toFixed(2));
    }

    return (
        <Card sx={{ width: '100%' }}>
            <CardContent>
                <Typography variant='body1' color='text.secondary'>
                    {climbs.length} of 282 summited
                </Typography>
                <Typography>
                    {completionPercentage()}%
                </Typography>
            </CardContent>
        </Card>
    )
}