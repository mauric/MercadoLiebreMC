# MercadoLiebreMC

## Journal

- MVC model
- Views are given
- Start with model on sequelize
-   npm install --save sequelize
-   npm install --save mysql2
- create .sequelizrc (config file):
-      const path = require('path')module.exports = { config: path.resolve('./database/config', 'config.js'), 'models-path': path.resolve('./database/models'), 'seeders-path': path.resolve('./database/seeders'), 'migrations-path': path.resolve('./database/migrations'),}
- modify directory to fall into /src
- check if sequelize-cli is installed
- run sequelize init
- check database/config.js. Db credencials
- export all database properties module.export = {developement, test, prouduction}
- create User and Product models
- remove user models I won't use it
- User name, email, password etc, and for product same taht productsDataBase.json
- Models ready, I'll create the database with dump.sql no fill
- require model into main controller
- build first view require