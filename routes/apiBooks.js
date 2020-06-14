const router= require("express").Router();
const Book=require("../controllers/bookControllers")

router.route("/")
    .get(Book.getBooks)
    .post(Book.createBook)

router.route("/:id")
    .get(Book.getBook)
    .put(Book.updateBook)
    .delete(Book.deleteBook)


module.exports=router;