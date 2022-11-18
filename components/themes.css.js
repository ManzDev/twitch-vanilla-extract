import { createTheme } from "@vanilla-extract/css";
export const [themeClass, vars] = createTheme({
    color: {
        brand: "blue",
        negative: "red",
        positive: "green"
    },
    font: {
        body: "arial"
    }
});
