import { Box } from "@mui/material";

export default function CardHeaderActions({children}: {children: React.ReactNode}) {
  return (
    <Box sx={{
      position: "absolute",
      top: 8,
      right: 8,
      display: "flex",
      gap: 1
    }}>
      {children}
    </Box>
  );
}
