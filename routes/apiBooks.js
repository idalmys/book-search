const router= require("express").Router();
const Book=require("../controllers/bookControllers")
const path= require("path")

router.route("/")
    .get(Book.getBooks)
    .post(Book.createBook)

router.route("/:id")
    .get(Book.getBook)
    .put(Book.updateBook)
    .delete(Book.deleteBook)

   router.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "/../client/build/index.html"));
       });
module.exports=router;