const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/products
    axios.get('http://localhost:5000/api/products')
        .then(function(response){
            res.render('home', { product : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_product = (req, res) =>{
    res.render('add_product');
}

exports.update_product = (req, res) =>{
    axios.get('http://localhost:5000/api/products', { params : { id : req.query.id }})
        .then(function(productdata){
            res.render("update_product", { product : productdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}


exports.cart = (req, res) =>{
    res.render('cart');
}