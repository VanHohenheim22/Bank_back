const { DataTypes } = require( "sequelize" )
const { db } = require("../database/config")

const User = db.define("users", {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },

    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    accountNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        defaultValue: function generateAccountNumber() {
            const randomNumber = Math.floor(Math.random() * 999999) + 1;
            return randomNumber.toString().padStart(6, '0');
          },
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    amount: {
        type: DataTypes.DECIMAL,
        defaultValue: 1000,
        allowNull: false,
    },

    status: {
        type: DataTypes.ENUM("available", "disabled"),
        defaultValue: "available",
        allowNull: false
    }
})

module.exports = User