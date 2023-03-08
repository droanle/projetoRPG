const User = require("../Models/User");

exports.newUser = async (req, res) => {
  let verify = await User.findOne({
    pass: req.body.password,
    email: req.body.email,
  }).exec();

  console.log(verify);

  if (verify != null) {
    res.json({
      success: false,
      message: "Este usuario já existe.",
      content: req.body,
    });
  } else {
    var newUser = new User({
      name: req.body.name,
      email: req.body.email,
      pass: req.body.password,
    });

    newUser.save((err, user) => {
      if (err)
        res.send({
          success: false,
          message: "Não foi posivel cria o usuario.",
          content: req.body,
        });
      res.json({
        success: false,
        message: "Usuario criado com sucesso.",
        content: user,
      });
    });
  }
};
