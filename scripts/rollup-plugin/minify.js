import terser from "terser"

export default () => ({
    name: "minify",

    renderChunk(source) {
        return terser.minify(source).code
    },
})
