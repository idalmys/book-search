const Book=require("../models/book")

module.exports={
   getBooks: (req,res) =>{
        Book.find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
   },

   getBook : function(req,res){
       Book.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
   },

   createBook: function(req,res){
        Book.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
   },

   updateBook:function(req,res){
        Book.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
   },

   deleteBook: function(req,res){
    Book.findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
   }
}