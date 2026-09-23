import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

export default function DeleteClimbedMunroButton() {
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
            <DeleteIcon />
        </Button>
    );
}