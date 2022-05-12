const AddProductDB = require('../model/model.js');

//create and save new product

exports.create = (req,res)=>{
    //validaterequest
   if(!req.body){
        res.status(400).send({message : 'Content cannot be Empty!'})
        return;
   }
    
   //new product
   const product = new AddProductDB({
       name:req.body.name,
       description:req.body.description,
       quantity:req.body.quantity,
       price:req.body.price
   })

   //save product
   product
   .save(product)
   .then(data=>{
    res.redirect('/add_product');
   })
   .catch(err=>{
       res.status(500).send({
           message : err.message || "Some error occured while creating a product!"
       });
   });
}

// retrieve and return all products/ retrive and return a single product
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        AddProductDB.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Product Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving product with id " + id})
            })

    }else{
        AddProductDB.find()
            .then(product => {
                res.send(product)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving product information" })
            })
    }

    
}

// Update a new idetified product by product id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    AddProductDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update product with ${id}. Maybe product not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update product information"})
        })
}


// Delete a product with specified product id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    AddProductDB.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "Product was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete a product with id=" + id
            });
        });
}