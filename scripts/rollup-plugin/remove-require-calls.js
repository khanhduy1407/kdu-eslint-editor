/**
 * @author NKDuy
 * See LICENSE file in root directory for full license.
 */
import path from "path"

export default () => ({
    name: "remove-require",

    transform(source, id) {
        if (path.extname(id) !== ".js") {
            return null
        }
        return source.replace(/\brequire\(".+?"\)/gu, "undefined")
    },
})
