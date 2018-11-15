import { createMuiTheme } from '@material-ui/core/styles';

export const filterBubbleTheme = createMuiTheme({
    palette: {
        primary: {
            light: "#58a5f0",
            main: "#0277bd",
            dark: "#004c8c"
        },
        secondary: {
            light: "#5ddef4",
            main: "#00acc1",
            dark: "#007c91",
            contrastText: "#FFFFFF"
        },
    },
});