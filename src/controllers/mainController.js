//const fs = require('fs');
//const path = require('path');

//const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

cont db = require('../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	root: (req, res) => {
		// Do the magic
		//Search in DB allproducts
		res.render('index');
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
