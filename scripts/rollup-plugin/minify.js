/**
 * @author NKDuy
 * See LICENSE file in root directory for full license.
 */
import terser from "terser"

export default () => ({
    name: "minify",

    transformBundle(source) {
        return terser.minify(source).code
    },
})
