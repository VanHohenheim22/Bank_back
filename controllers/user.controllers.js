const Transfers = require("../models/transfers.models");
const User = require("../models/user.models");


exports.createUser = async (req, res) => {
    const { 
      userName, 
      password, 
    } = req.body;

    // let accountNum = 0
    // let verify = false
    // do{
    //   accountNum = createAccount()
    //   verify = User.findOne({where: {accountNum, accountNum}})

    // } while(verify);

    const user = await User.create({
      userName,
      password
    })

    return res.status(201).json({
      status: "Created",
      message: "The user be crated 🙌",
      user,
    })
}

exports.login = async (req, res) => {
  const {
    accountNumber,
    password
  } = req.body

  const user = await User.findOne({where: {accountNumber: accountNumber}});
  if (!user) {
    return res.status(401).json({
      status: "error",
      message: "The user entered is not in the system or is misspelled."
    })
  }

  if (user.password !== password) {
    return res.status(401).json({
      status: "error",
      message: "The entered password is incorrect, please try again."
    }) 
  }

  req.session.user = true;
  return res.status(200).json({
    status: "Ok",
    message: "Login succes"
  })
}

exports.history = async (req, res) => {
  const { user } = req.body

  const historial = await Transfers.findAll({
    where: {
      senderUser: user
    }
  })

  if (historial.length < 1) {
    return res.status(404).json({
      message: 'That user not have transfers',
    });
  }

  res.status(200).json({
    message: 'request complete',
    historial,
  })
}