module.exports = (sequelize, DataTypes) => {
    alias = "Productos"
    cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        discount: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING
        },
        createAt: {
            type: DataTypes.DATE
        },
        createAt: {
            type: DataTypes.DATE
        }
    };
    config = {
        tableName: "productos",
        timeStamp: true
    };
    const Product = sequelize.define(alias, cols, config)

    return Product;
}
