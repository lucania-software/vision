import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";

export default {
    input: "source/index.ts",
    external: [],
    output: {
        file: "build/index.js",
        name: "Vision",
        format: "umd"
    },
    plugins: [
        typescript({ tsconfig: "source/tsconfig.json" }),
        babel({
            extensions: [".ts"],
            babelHelpers: "bundled",
            presets: ["@babel/preset-env"]
        })
    ]
};