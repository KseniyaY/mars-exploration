const fs = require('fs');
const express = require("express");
const multer = require('multer');
const app = require("./app.js");
const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage });

router.get("/", (req, res) => {
    res.render('index');
});

router.post("/instruction", upload.single('instruction'), (req, res) => {
    //TODO: implementation of file validation and output of rovers' coordinates in the browser
    try {
        const nasaFile = fs.readFileSync(req.file.path, 'utf8');
        app(nasaFile);
        res.render("output");
        //delete file after it has been read
        fs.unlinkSync(req.file.path);
    } catch (err) {
        console.error(err)
    }
});


module.exports = router;