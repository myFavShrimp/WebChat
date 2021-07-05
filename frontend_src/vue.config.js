const path = require("path");

dev_exports = {

}

production_exports = {
    filenameHashing: false,
    publicPath: "././",
    outputDir: path.resolve(__dirname, "../static"),
    // outputDir: path.resolve(__dirname, "../application/frontend/static"),
}

module.exports = process.env.NODE_ENV === 'development' ? dev_exports : production_exports
