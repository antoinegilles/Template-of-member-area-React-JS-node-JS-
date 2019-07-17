const Product = require('../models/product.model');
var bcrypt = require('bcrypt');


//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('hola i am here nigger');
};

//Connexion
exports.product_login = function (req, res, callback) {
    
  Product.find({ email: req.body.email })
  .exec(function (err, Product) {
      if (err) {
        return res.status(404)
      } 
      else if (Product != undefined && Product.length){
        bcrypt.compare(req.body.password, Product[0].password, function (err, result) {
        if (result == true) {
          req.session.userId = Product[0].id;
          // Si le mot de passe correspond a l'identifiant
          return res.status(200).send(req.session.userId)
        } else {
          // Si le mot de passe ne correspond pas a l'identifiant
          return res.status(404)
        }
      })
    } else{
      // En cas d'erreur d'autre type
      return res.status(404).send("erreur")
    }
    });
}


//Deconnexion
exports.product_logout = function (req, res) {
    if (req.session) {
        // delete session object
        req.session.destroy(function(err) {
          if(err) {
            return next(err);
          } else {
            return res.send("deconnexion");
          }
        });
      }
};

//Create
exports.product_create = function (req, res) {

    let product = new Product(
        {
            pseudo: req.body.pseudo,
            email: req.body.email,
            password: req.body.password
        
        }
    
    );
    
    Product.find( {email :product.email}, function (err, ProductFind) {
        if (err) return next(err);
        if(ProductFind.length){
            console.log("utilisateur deja present")
            var present = "Utilisateur déja inscrit"
            res.send(present)

        }else{
            console.log("Utilisateur non present")
            Product.create(product, function (error, user) {
                if (error) {
                  return next(error);
                } 
                else {
                  req.session.userId = user._id;
                  return res.status(200).send(req.session.userId)
                }
              });
        }
       })

    
};

//read all
exports.product_all = function (req, res) {
    Product.find( function (err, product) {
        if (err) return next(err);
        res.json(product);
    })
};

//read
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

//update
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};
//delete
exports.product_delete = function (req, res) {
    Product.remove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};