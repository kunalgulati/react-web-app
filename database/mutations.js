const bcrypt = require('bcryptjs')

const mutations = {
  async createUser(root, {input: { name, email, password }}, { models }) {
    return models.User.create({
      name,
      email,
      password: await bcrypt.hash(password, 10)
    })
  },
}

module.exports = mutations;
