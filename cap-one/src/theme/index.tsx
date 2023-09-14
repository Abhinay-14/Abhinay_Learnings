import { Palette, createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface Palette {
    greyColor: Palette["primary"];
    borderColor: Palette["primary"];
    purple: Palette["primary"];
    structural: Palette["primary"];
    textColor: Palette["primary"];
    primaryColor: Palette["primary"];
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    greyColor: PaletteOptions["primary"];
    borderColor: PaletteOptions["primary"];
    purple: PaletteOptions["primary"];
    structural: PaletteOptions["primary"];
    textColor: PaletteOptions["primary"];
    primaryColor: PaletteOptions["primary"];
    accent: PaletteOptions["primary"];
  }
  interface Color {
    White?: string;
    stroke1?: string;
    focus?: string;
    purple500?: string;
    mediumEmphasis?: string;
    highEmphasis?: string;
    primary700?: string;
    primary500?: string;
    primary300?: string;
    primary200?: string;
    main?: string;
    blue100?: string;
    red100?: string;
    green100?: string;
    green50?: string;
    text1?: string;
    blue?: string;
    lowEmphasis?: string;
    icon2?: string;
  }

  interface PaletteColor extends Color {}
  interface PaletteColorOptions extends Color {}
  interface TypographyVariants {
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    subtitle3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    subtitle3: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3?: true;
    body4?: true;
    caption1?: true;
    caption2?: true;
    subtitle3?: true;
  }
}

export const theme = createTheme({
  palette: {
    primaryColor: {
      primary700: "#0055BC",
      primary500: "#625AFA",
      primary300: "#8D7FFA",
      primary200: "#C3BBFA",
    },
    greyColor: {
      stroke1: "#DEDFE1",
      text1: "#A3ACBA",
      icon2: "#545969",
    },
    borderColor: {
      focus: "#0196ED5C",
    },
    purple: {
      purple500: "#625AFA",
    },
    structural: {
      White: "#ffffff",
      blue: "#F6F8FA",
    },
    textColor: {
      mediumEmphasis: "#414552",
      highEmphasis: "#1A1B25",
      lowEmphasis: "#6A7383",
    },
    accent: {
      main: "#fff",
      blue100: "#0196ED",
      red100: "#ED6704",
      green100: "#006908",
      green50: "#D7F7C2",
    },
  },
  typography: {
    fontFamily: "Segoe UI",
    h1: {
      fontSize: "28px",
      fontWeight: "700",
      lineHeight: "40px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "40px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: "21.28px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    subtitle2: {
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "21.28px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    subtitle3: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "20px",
      letterSpacing: "0em",
      textAlign: "left",
    },

    body1: {
      fontSize: "14px",
      fontWeight: "700",
      lineHeight: "18.62px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    body2: {
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "24px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    body3: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "18.62px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    body4: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    caption1: {
      fontSize: "12px",
      fontWeight: "600",
      lineHeight: "15.96px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    caption2: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "15.96px",
      letterSpacing: "0em",
      textAlign: "left",
    },
  },
});
