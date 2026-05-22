import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {

        primary: {
            main: '#417F56',
            light: '#315F41',
            dark: '#294F36',
            contrastText: '#fff',
        },

        secondary:{
            main: '#353535',
            light: '#757575',
            dark: '#0C0C0C',
            contrastText: '#fff',
        },

        info: {
            main: "#E5F2E9",
            light: "#CAE4D3",
            dark: "#B0D7BD",
            contrastText: "#fff",
        },


        success: {
            main: "#00BA88",
            light: "#F3FDFA",
            dark: "#00966D",
            contrastText: "#fff",
        },

        error: {
            main: "#ED2E2E",
            light: "#FFF2F2",
            dark: "#C30000",
            contrastText: "#fff",
        },

        warning: {
            main: "#F4B740",
            light: "#FFF8E1",
            dark: "#A9791C",
            contrastText: "#fff",
        },
    },

    typography: {
        fontFamily:"vazirmatn",


        display1: {
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: "140%",
        },
        display2: {
            fontSize: "56px",
            fontWeight: 700,
            lineHeight: "120%",
        },

        h1: { fontSize: "44px", fontWeight: 700, lineHeight: "140%" },
        h2: { fontSize: "40px", fontWeight: 700, lineHeight: "140%" },
        h3: { fontSize: "32px", fontWeight: 700, lineHeight: "140%" },
        h4: { fontSize: "24px", fontWeight: 700, lineHeight: "140%" },
        h5: { fontSize: "20px", fontWeight: 700, lineHeight: "140%" },
        h6: { fontSize: "16px", fontWeight: 700, lineHeight: "140%" },
        h7: { fontSize: "20px", fontWeight: 600, lineHeight: "180%" },

        bodyXL: { fontSize: "20px", fontWeight: 400, lineHeight: "180%" },
        bodyLG: { fontSize: "18px", fontWeight: 400, lineHeight: "180%" },
        bodyMD: { fontSize: "16px", fontWeight: 400, lineHeight: "180%" },
        bodySM: { fontSize: "14px", fontWeight: 400, lineHeight: "180%" },

        captionMD: { fontSize: "12px", fontWeight: 400, lineHeight: "180%" },
        captionLG: { fontSize: "14px", fontWeight: 700, lineHeight: "180%" },
        captionSM: { fontSize: "10px", fontWeight: 700, lineHeight: "180%" },

        buttonMD: {
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "180%",
            textTransform: "none",
        },
        buttonSM: {
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "24px",
            textTransform: "none",
        },

        overlineLG: { fontSize: "16px", fontWeight: 400, lineHeight: "180%" },
        overlineSM: { fontSize: "12px", fontWeight: 700, lineHeight: "normal" },
    },

    spacing: 8,

    shadows: [
        "none",
        "0px 1px 1px rgba(0, 0, 0, 0.08), 0px 1px 2px rgba(0, 0, 0, 0.06)",
        "0px 1px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.08)",
        "0px 4px 10px rgba(0, 0, 0, 0.10), 0px 1px 4px rgba(0, 0, 0, 0.06)",
        "0px 2px 4px rgba(0, 0, 0, 0.14), 0px 1px 6px rgba(0, 0, 0, 0.10)",
        "0px 6px 14px rgba(0, 0, 0, 0.14), 0px 2px 6px rgba(0, 0, 0, 0.08)",
        "0px 3px 6px rgba(0, 0, 0, 0.16), 0px 2px 8px rgba(0, 0, 0, 0.10)",
        "0px 3px 7px rgba(0, 0, 0, 0.17), 0px 2px 9px rgba(0, 0, 0, 0.11)",
        "0px 4px 8px rgba(0, 0, 0, 0.18), 0px 2px 10px rgba(0, 0, 0, 0.12)",
        "0px 4px 9px rgba(0, 0, 0, 0.18), 0px 2px 11px rgba(0, 0, 0, 0.12)",
        "0px 5px 10px rgba(0, 0, 0, 0.19), 0px 2px 12px rgba(0, 0, 0, 0.13)",
        "0px 5px 11px rgba(0, 0, 0, 0.19), 0px 3px 13px rgba(0, 0, 0, 0.13)",
        "0px 6px 12px rgba(0, 0, 0, 0.20), 0px 3px 14px rgba(0, 0, 0, 0.14)",
        "0px 6px 13px rgba(0, 0, 0, 0.20), 0px 3px 15px rgba(0, 0, 0, 0.14)",
        "0px 7px 14px rgba(0, 0, 0, 0.21), 0px 3px 16px rgba(0, 0, 0, 0.15)",
        "0px 7px 15px rgba(0, 0, 0, 0.21), 0px 4px 17px rgba(0, 0, 0, 0.15)",
        "0px 8px 16px rgba(0, 0, 0, 0.22), 0px 4px 18px rgba(0, 0, 0, 0.16)",
        "0px 8px 17px rgba(0, 0, 0, 0.22), 0px 4px 19px rgba(0, 0, 0, 0.16)",
        "0px 9px 18px rgba(0, 0, 0, 0.23), 0px 5px 20px rgba(0, 0, 0, 0.17)",
        "0px 9px 19px rgba(0, 0, 0, 0.23), 0px 5px 21px rgba(0, 0, 0, 0.17)",
        "0px 10px 20px rgba(0, 0, 0, 0.24), 0px 5px 22px rgba(0, 0, 0, 0.18)",
        "0px 10px 21px rgba(0, 0, 0, 0.24), 0px 6px 23px rgba(0, 0, 0, 0.18)",
        "0px 11px 22px rgba(0, 0, 0, 0.25), 0px 6px 24px rgba(0, 0, 0, 0.19)",
        "0px 11px 23px rgba(0, 0, 0, 0.25), 0px 6px 25px rgba(0, 0, 0, 0.19)",
        "0px 12px 24px rgba(0, 0, 0, 0.26), 0px 7px 26px rgba(0, 0, 0, 0.20)",
    ],

    shape: {
        borderRadius: 8,
        borderRadiusSm: 4,
        borderRadiusMd: 8,
        borderRadiusLg: 16,
        borderRadiusXl: 24,
        borderRadiusXll: 32,
        borderRadiusXXl: 64,
    },

    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: false,
            },
            styleOverrides: {
                root: {
                    maxWidth: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingLeft: 0,
                    paddingRight: 0,
                },
            },
        },
    },
});







//
//
// import { createTheme } from "@mui/material/styles";
//
// export const getTheme = (mode: "light" | "dark") =>
//     createTheme({
//         palette: {
//             mode,
//
//             primary: {
//                 100: "#E5F2E9",
//                 200: "#CAE4D3",
//                 300: "#B0D7BD",
//                 400: "#96C9A7",
//                 500: "#7CBC91",
//                 600: "#61AE7B",
//                 700: "#4E9968",
//                 800: "#396F4B",
//                 900: "#315F41",
//                 1000: "#294F36",
//                 1100: "#21402B",
//                 1200: "#183020",
//                 1300: "#102016",
//                 1400: "#08100B",
//             },
//
//             secondary: {
//                 50: "#F9F9F9",
//                 100: "#E1E1E1",
//                 200: "#EDEDED",
//                 300: "#CBCBCB",
//                 400: "#ADADAD",
//                 500: "#757575",
//                 600: "#717171",
//                 700: "#353535",
//                 900: "#0C0C0C",
//             },
//
//             success: {
//                 100: "#00966D",
//                 200: "#00BA88",
//                 300: "#F3FDFA",
//             },
//
//             error: {
//                 100: "#C30000",
//                 200: "#ED2E2E",
//                 300: "#FFF2F2",
//             },
//
//             warning: {
//                 100: "#A9791C",
//                 200: "#F4B740",
//                 300: "#FFF2F2",
//             },
//
//             background: {
//                 default: mode === "dark" ? "#08100B" : "#ffffff",
//                 paper: mode === "dark" ? "#102016" : "#F9F9F9",
//             },
//
//             text: {
//                 primary: mode === "dark" ? "#E5F2E9" : "#0C0C0C",
//                 secondary: mode === "dark" ? "#CAE4D3" : "#757575",
//             },
//         },
//
//         typography: {
//             display1: {
//                 fontSize: "64px",
//                 fontWeight: 700,
//                 lineHeight: "140%",
//             },
//             display2: {
//                 fontSize: "56px",
//                 fontWeight: 700,
//                 lineHeight: "120%",
//             },
//
//             h1: { fontSize: "44px", fontWeight: 700, lineHeight: "140%" },
//             h2: { fontSize: "40px", fontWeight: 700, lineHeight: "140%" },
//             h3: { fontSize: "32px", fontWeight: 700, lineHeight: "140%" },
//             h4: { fontSize: "24px", fontWeight: 700, lineHeight: "140%" },
//             h5: { fontSize: "20px", fontWeight: 700, lineHeight: "140%" },
//             h6: { fontSize: "16px", fontWeight: 700, lineHeight: "140%" },
//
//             h7: { fontSize: "20px", fontWeight: 600, lineHeight: "180%" },
//
//             bodyXL: { fontSize: "20px", fontWeight: 400, lineHeight: "180%" },
//             bodyLG: { fontSize: "18px", fontWeight: 400, lineHeight: "180%" },
//             bodyMD: { fontSize: "16px", fontWeight: 400, lineHeight: "180%" },
//             bodySM: { fontSize: "14px", fontWeight: 400, lineHeight: "180%" },
//
//             captionMD: { fontSize: "12px", fontWeight: 400, lineHeight: "180%" },
//             captionLG: { fontSize: "14px", fontWeight: 700, lineHeight: "180%" },
//             captionSM: { fontSize: "10px", fontWeight: 700, lineHeight: "180%" },
//
//             buttonLG: {
//                 fontSize: "16px",
//                 fontWeight: 500,
//                 lineHeight: "180%",
//                 textTransform: "none",
//             },
//             buttonSM: {
//                 fontSize: "14px",
//                 fontWeight: 500,
//                 lineHeight: "24px",
//                 textTransform: "none",
//             },
//
//             overlineLG: {
//                 fontSize: "16px",
//                 fontWeight: 400,
//                 lineHeight: "180%",
//             },
//             overlineSM: {
//                 fontSize: "12px",
//                 fontWeight: 700,
//                 lineHeight: "normal",
//             },
//         },
//
//         spacing: 8,
//
//         shadows: [
//             "none",
//             "0px 1px 1px rgba(0,0,0,0.2)",
//             "0px 1px 2px rgba(0,0,0,0.25)",
//             "0px 4px 10px rgba(0,0,0,0.3)",
//             "0px 2px 4px rgba(0,0,0,0.3)",
//             "0px 6px 14px rgba(0,0,0,0.35)",
//             "0px 3px 6px rgba(0,0,0,0.35)",
//             "0px 3px 7px rgba(0,0,0,0.35)",
//             "0px 4px 8px rgba(0,0,0,0.35)",
//             "0px 4px 9px rgba(0,0,0,0.35)",
//             "0px 5px 10px rgba(0,0,0,0.35)",
//             "0px 5px 11px rgba(0,0,0,0.35)",
//             "0px 6px 12px rgba(0,0,0,0.35)",
//             "0px 6px 13px rgba(0,0,0,0.35)",
//             "0px 7px 14px rgba(0,0,0,0.35)",
//             "0px 7px 15px rgba(0,0,0,0.35)",
//             "0px 8px 16px rgba(0,0,0,0.35)",
//             "0px 8px 17px rgba(0,0,0,0.35)",
//             "0px 9px 18px rgba(0,0,0,0.35)",
//             "0px 9px 19px rgba(0,0,0,0.35)",
//             "0px 10px 20px rgba(0,0,0,0.35)",
//             "0px 10px 21px rgba(0,0,0,0.35)",
//             "0px 11px 22px rgba(0,0,0,0.35)",
//             "0px 11px 23px rgba(0,0,0,0.35)",
//             "0px 12px 24px rgba(0,0,0,0.35)",
//         ],
//
//         shape: {
//             borderRadius: 8,
//             borderRadiusSm: 4,
//             borderRadiusMd: 8,
//             borderRadiusLg: 16,
//             borderRadiusXl: 24,
//             borderRadiusXll: 32,
//             borderRadiusXXl: 64,
//         },
//
//         components: {
//             MuiContainer: {
//                 defaultProps: {
//                     maxWidth: false,
//                 },
//                 styleOverrides: {
//                     root: {
//                         maxWidth: "80%",
//                         marginLeft: "auto",
//                         marginRight: "auto",
//                         paddingLeft: 0,
//                         paddingRight: 0,
//                     },
//                 },
//             },
//         },
//     });






//full theme colorrrrrrrrrrrrrrr
// import { createTheme } from "@mui/material/styles";
//
// type Mode = "light" | "dark";
//
// /**
//  * 🎨 Primary scale transformer
//  * در dark mode برعکس میشه تا مناسب UI تاریک بشه
//  */
// const getPrimary = (mode: Mode) =>
//     mode === "dark"
//         ? {
//             100: "#08100B",
//             200: "#102016",
//             300: "#183020",
//             400: "#21402B",
//             500: "#294F36",
//             600: "#315F41",
//             700: "#396F4B",
//             800: "#4E9968",
//             900: "#61AE7B",
//             1000: "#7CBC91",
//             1100: "#96C9A7",
//             1200: "#B0D7BD",
//             1300: "#CAE4D3",
//             1400: "#E5F2E9",
//         }
//         : {
//             100: "#E5F2E9",
//             200: "#CAE4D3",
//             300: "#B0D7BD",
//             400: "#96C9A7",
//             500: "#7CBC91",
//             600: "#61AE7B",
//             700: "#4E9968",
//             800: "#396F4B",
//             900: "#315F41",
//             1000: "#294F36",
//             1100: "#21402B",
//             1200: "#183020",
//             1300: "#102016",
//             1400: "#08100B",
//         };
//
// /**
//  * 🎨 Secondary stays neutral but slightly adjusted for dark readability
//  */
// const getSecondary = (mode: Mode) =>
//     mode === "dark"
//         ? {
//             50: "#0F0F0F",
//             100: "#1A1A1A",
//             200: "#262626",
//             300: "#333333",
//             400: "#444444",
//             500: "#757575",
//             600: "#999999",
//             700: "#B3B3B3",
//             900: "#EDEDED",
//         }
//         : {
//             50: "#F9F9F9",
//             100: "#E1E1E1",
//             200: "#EDEDED",
//             300: "#CBCBCB",
//             400: "#ADADAD",
//             500: "#757575",
//             600: "#717171",
//             700: "#353535",
//             900: "#0C0C0C",
//         };
//
// /**
//  * 🌈 Main Theme Factory
//  */
// export const getTheme = (mode: Mode) =>
//     createTheme({
//         palette: {
//             mode,
//
//             primary: getPrimary(mode),
//             secondary: getSecondary(mode),
//
//             success: {
//                 100: "#00966D",
//                 200: "#00BA88",
//                 300: "#F3FDFA",
//             },
//
//             error: {
//                 100: "#C30000",
//                 200: "#ED2E2E",
//                 300: "#FFF2F2",
//             },
//
//             warning: {
//                 100: "#A9791C",
//                 200: "#F4B740",
//                 300: "#FFF2F2",
//             },
//
//             background: {
//                 default: mode === "dark" ? "#08100B" : "#ffffff",
//                 paper: mode === "dark" ? "#102016" : "#F9F9F9",
//             },
//
//             text: {
//                 primary: mode === "dark" ? "#E5F2E9" : "#0C0C0C",
//                 secondary: mode === "dark" ? "#CAE4D3" : "#757575",
//             },
//         },
//
//         typography: {
//             display1: {
//                 fontSize: "64px",
//                 fontWeight: 700,
//                 lineHeight: "140%",
//             },
//             display2: {
//                 fontSize: "56px",
//                 fontWeight: 700,
//                 lineHeight: "120%",
//             },
//
//             h1: { fontSize: "44px", fontWeight: 700, lineHeight: "140%" },
//             h2: { fontSize: "40px", fontWeight: 700, lineHeight: "140%" },
//             h3: { fontSize: "32px", fontWeight: 700, lineHeight: "140%" },
//             h4: { fontSize: "24px", fontWeight: 700, lineHeight: "140%" },
//             h5: { fontSize: "20px", fontWeight: 700, lineHeight: "140%" },
//             h6: { fontSize: "16px", fontWeight: 700, lineHeight: "140%" },
//
//             h7: { fontSize: "20px", fontWeight: 600, lineHeight: "180%" },
//
//             bodyXL: { fontSize: "20px", fontWeight: 400, lineHeight: "180%" },
//             bodyLG: { fontSize: "18px", fontWeight: 400, lineHeight: "180%" },
//             bodyMD: { fontSize: "16px", fontWeight: 400, lineHeight: "180%" },
//             bodySM: { fontSize: "14px", fontWeight: 400, lineHeight: "180%" },
//
//             captionMD: { fontSize: "12px", fontWeight: 400, lineHeight: "180%" },
//             captionLG: { fontSize: "14px", fontWeight: 700, lineHeight: "180%" },
//             captionSM: { fontSize: "10px", fontWeight: 700, lineHeight: "180%" },
//
//             buttonLG: {
//                 fontSize: "16px",
//                 fontWeight: 500,
//                 lineHeight: "180%",
//                 textTransform: "none",
//             },
//             buttonSM: {
//                 fontSize: "14px",
//                 fontWeight: 500,
//                 lineHeight: "24px",
//                 textTransform: "none",
//             },
//
//             overlineLG: {
//                 fontSize: "16px",
//                 fontWeight: 400,
//                 lineHeight: "180%",
//             },
//             overlineSM: {
//                 fontSize: "12px",
//                 fontWeight: 700,
//                 lineHeight: "normal",
//             },
//         },
//
//         spacing: 8,
//
//         shadows: [
//             "none",
//             "0px 1px 1px rgba(0,0,0,0.2)",
//             "0px 1px 2px rgba(0,0,0,0.25)",
//             "0px 4px 10px rgba(0,0,0,0.3)",
//             "0px 2px 4px rgba(0,0,0,0.3)",
//             "0px 6px 14px rgba(0,0,0,0.35)",
//             "0px 3px 6px rgba(0,0,0,0.35)",
//             "0px 3px 7px rgba(0,0,0,0.35)",
//             "0px 4px 8px rgba(0,0,0,0.35)",
//             "0px 4px 9px rgba(0,0,0,0.35)",
//             "0px 5px 10px rgba(0,0,0,0.35)",
//             "0px 5px 11px rgba(0,0,0,0.35)",
//             "0px 6px 12px rgba(0,0,0,0.35)",
//             "0px 6px 13px rgba(0,0,0,0.35)",
//             "0px 7px 14px rgba(0,0,0,0.35)",
//             "0px 7px 15px rgba(0,0,0,0.35)",
//             "0px 8px 16px rgba(0,0,0,0.35)",
//             "0px 8px 17px rgba(0,0,0,0.35)",
//             "0px 9px 18px rgba(0,0,0,0.35)",
//             "0px 9px 19px rgba(0,0,0,0.35)",
//             "0px 10px 20px rgba(0,0,0,0.35)",
//             "0px 10px 21px rgba(0,0,0,0.35)",
//             "0px 11px 22px rgba(0,0,0,0.35)",
//             "0px 11px 23px rgba(0,0,0,0.35)",
//             "0px 12px 24px rgba(0,0,0,0.35)",
//         ],
//
//         shape: {
//             borderRadius: 8,
//             borderRadiusSm: 4,
//             borderRadiusMd: 8,
//             borderRadiusLg: 16,
//             borderRadiusXl: 24,
//             borderRadiusXll: 32,
//             borderRadiusXXl: 64,
//         },
//
//         components: {
//             MuiContainer: {
//                 defaultProps: {
//                     maxWidth: false,
//                 },
//                 styleOverrides: {
//                     root: {
//                         maxWidth: "80%",
//                         marginLeft: "auto",
//                         marginRight: "auto",
//                         paddingLeft: 0,
//                         paddingRight: 0,
//                     },
//                 },
//             },
//         },
//     });