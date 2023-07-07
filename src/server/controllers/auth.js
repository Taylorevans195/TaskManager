const { User } = require("../util/models");

module.exports = {
  login: async (req, res) => {
    try {
      let validUser = await User.findOne({where: {username: req.body.username}})
      if(validUser) {
        if(req.body.password === validUser.dataValues.password) {
          return res.status(200).send(validUser)
        } else {
          return res.status(401).send("Password is incorrect")
        }
      } else {
        return res.status(401).send("Username doesn't exist")
      }
    }
    catch(err) {
      console.error(err)
      res.status(400).send(err)
    }
  },
  register: async (req, res) => {
    console.log(req.body)
    try {
      let userCheck = await User.findOne({
        where: { username: req.body.username },
      });
      if(userCheck) {
        return res.status(401).send("Username exists")
      } else {
        let newUser = await User.create(req.body)
        return res.status(200).send(newUser)
      }
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }

  },
};
