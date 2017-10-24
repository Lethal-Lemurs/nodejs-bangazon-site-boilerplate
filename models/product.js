'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    type_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    date_added: DataTypes.DATE,
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {timestamps: false});
  
  Product.associate = (models) => {
    Product.belongsTo(models.User, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    });
    
    Product.hasOne(models.Product_type, {
      foreignKey: 'id',         
    });
    
    Product.belongsToMany(models.Order, {
      foreignKey: 'id',
      as: 'Order_Product',
      through: 'OrderProduct',
      onDelete: 'CASCADE'
    });
  };

  return Product;
};