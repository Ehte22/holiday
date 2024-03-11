const multer = require("multer")
const { v4: uuid } = require("uuid") // use for image file name
const path = require("path") // use for path name like png jpeg
const fs = require("fs") // use for create folder

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname))
    },
    destination: (req, file, cb) => {
        const dest = "uploads"
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest)
        }
        cb(null, dest)
    }
})

module.exports = multer({ storage }).array("hero", 5)