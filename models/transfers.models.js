const {  DataTypes } = require( "sequelize" )
const { db } = require("../database/config")

const Transfers = db.define("transfers", {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    amount: {
        type: DataTypes.DECIMAL,
        defaultValue: 1000,
        allowNull: false,
    },
    senderUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    reciverUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

module.exports = Transfers;