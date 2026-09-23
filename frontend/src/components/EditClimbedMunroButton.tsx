import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';

export default function EditClimbedMunroButton() {
    return (
        <Button
            variant="text"
            color="deleteButton"
            sx={{
                minWidth: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <EditIcon />
        </Button>
    );
}