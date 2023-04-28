const Transfers = require("../models/transfers.models");
const User = require("../models/user.models");

exports.makeTransfer = async ( req, res ) => {
    const {
        amount,
        senderUser,
        reciverUser,
    } = req.body

    const userSender = await User.findOne({
        where: {
            status: 'available',
            accountNumber: senderUser,
          },
    })

    const userReciver = await User.findOne({
        where: {
            status: 'available',
            accountNumber: reciverUser,
          },
    })

    if (!userReciver || !userSender) {
        return res.status(404).json({
            message: 'Account number or sender not found 🤔',
          });
    }

    if (userReciver.accountNumber === userSender.accountNumber) {
        return res.status(404).json({
            message: 'You can not send money to yourself, smart guy. ✌',
          });
    }

    if ( amount > userSender.amount) {
        return res.status(404).json({
            message: "You cannot send an amount greater than what you have in your account. ._ .",
          });
    }

    const totalSender = +userSender.amount - +amount
    const totalReciver = +userReciver.amount - +amount

    await userSender.update({amount: totalSender})
    await userReciver.update({amount: totalReciver})

    const transfer = await Transfers.create({
        amount,
        reciverUser,
        senderUser,
    })

    
    return res.status(201).json({
        status: "Succes",
        message: "The transfered is complete",
        transfer,
      })
}