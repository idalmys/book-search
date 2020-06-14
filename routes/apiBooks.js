const router= require("express").Router();
const path = require("path");
const Book=require("../controllers/bookControllers")

router.route("/")
    .get(Book.getBooks)
    .post(Book.createBook)

router.route("/:id")
    .get(Book.getBook)
    .put(Book.updateBook)
    .delete(Book.deleteBook)

router.get("*", (req, res) => {
     res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
module.exports=router;