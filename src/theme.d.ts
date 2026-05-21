import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
    interface TypographyVariants {
        display1: React.CSSProperties;
        display2: React.CSSProperties;

        h7: React.CSSProperties;

        bodyXL: React.CSSProperties;
        bodyLG: React.CSSProperties;
        bodyMD: React.CSSProperties;
        bodySM: React.CSSProperties;

        captionMD: React.CSSProperties;
        captionLG: React.CSSProperties;
        captionSM: React.CSSProperties;

        buttonMD: React.CSSProperties;
        buttonSM: React.CSSProperties;

        overlineLG: React.CSSProperties;
        overlineSM: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        display1?: React.CSSProperties;
        display2?: React.CSSProperties;

        h7?: React.CSSProperties;

        bodyXL?: React.CSSProperties;
        bodyLG?: React.CSSProperties;
        bodyMD?: React.CSSProperties;
        bodySM?: React.CSSProperties;

        captionMD?: React.CSSProperties;
        captionLG?: React.CSSProperties;
        captionSM?: React.CSSProperties;

        buttonMD?: React.CSSProperties;
        buttonSM?: React.CSSProperties;

        overlineLG?: React.CSSProperties;
        overlineSM?: React.CSSProperties;
    }

    interface Shape {
        borderRadiusSm: number;
        borderRadiusMd: number;
        borderRadiusLg: number;
        borderRadiusXl: number;
        borderRadiusXll: number;
        borderRadiusXXl: number;
    }

    interface ShapeOptions {
        borderRadiusSm?: number;
        borderRadiusMd?: number;
        borderRadiusLg?: number;
        borderRadiusXl?: number;
        borderRadiusXll?: number;
        borderRadiusXXl?: number;
    }

    interface PaletteColor {
        1000?: string;
        1100?: string;
        1200?: string;
        1300?: string;
        1400?: string;
    }

    interface SimplePaletteColorOptions {
        1000?: string;
        1100?: string;
        1200?: string;
        1300?: string;
        1400?: string;
    }

    interface PaletteColorOptions {
        1000?: string;
        1100?: string;
        1200?: string;
        1300?: string;
        1400?: string;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        display1: true;
        display2: true;

        h7: true;

        bodyXL: true;
        bodyLG: true;
        bodyMD: true;
        bodySM: true;

        captionMD: true;
        captionLG: true;
        captionSM: true;

        buttonMD: true;
        buttonSM: true;

        overlineLG: true;
        overlineSM: true;
    }
}

declare module "@mui/material/styles" {
    interface Palette {
        third: Palette["primary"];
    }

    interface PaletteOptions {
        third?: PaletteOptions["primary"];
    }
}