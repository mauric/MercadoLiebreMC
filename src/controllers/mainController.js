/**
 * Main controller
 * 
 * @Controla las rutas del index
 * 
 */

 /**
  * Imports
  */
const db = require('../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const formatPrice = (price, discount) => toThousand(Math.round(price * (1 - (discount / 100))));

/**
 * Controller
 */
const controller = {
	root: (req, res) => {
		
		// Do the magic
		db.Productos.findAll()
			.then((productosResultado) => {
				if (productosResultado) {
					res.render('index',  {toThousand, formatPrice, productosAll: productosResultado});
				} else {
					res.send("error");
				}
			}
			);
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
