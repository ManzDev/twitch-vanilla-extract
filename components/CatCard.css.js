import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "./themes.css";
const globalVars = {
    "--size": 500,
};
export const styles = style({
    ...globalVars,
    maxWidth: "var(--size)",
    background: "linear-gradient(#fff, #aaa)",
    padding: "15px 25px 35px",
    boxShadow: "5px 5px 10px #000700",
    borderTop: `12px solid ${vars.color.positive}`,
    margin: 25
});
globalStyle(`${styles} h1`, {
    fontFamily: "'Upheaval TT', fantasy",
    fontSize: 42,
    letterSpacing: 3,
    color: "#111",
    margin: 0,
    marginBottom: "0.5em",
});
globalStyle(`${styles} .data`, {
    display: "flex",
    gap: 30
});
globalStyle(`${styles} .avatar`, {
    vars: {
        "--image-size": "calc(var(--size) * 0.25)"
    },
    width: "var(--image-size)",
    height: "var(--image-size)",
    borderRadius: "50%",
    boxShadow: [
        "-2px -2px 0 4px #fff",
        "2px 2px 0 4px #000"
    ]
});
globalStyle(`${styles} p`, {
    fontFamily: "'Scope One', sans-serif",
    color: "#000",
    margin: 0
});
