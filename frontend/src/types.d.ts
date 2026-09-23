import "@mui/material/styles";
import "@mui/material/Button";
import type { PaletteColor, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    deleteButton: PaletteColor;
  }
  interface PaletteOptions {
    deleteButton?: PaletteColorOptions;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    deleteButton: true;
  }
}
