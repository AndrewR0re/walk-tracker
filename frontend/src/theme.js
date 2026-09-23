import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        background: {
            paper: '#FFFFFF '
        },
        primary: {
            main: '#9FE2BF',
        },
        secondary: {
            main: '#8B4513'
        },
        deleteButton: {
            main: '#2E2E2E'
        }
    }
});

export default theme;