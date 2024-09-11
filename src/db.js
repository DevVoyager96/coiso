const mongoose = require("mongoose")

const mongoDB = "mongodb://localhost:27017/diversos"

async function main() {
    await mongoose.connect(mongoDB)
}

main()
    .then(() => console.log("Conexão realizada com sucesso"))
    .catch(err => console.log(err))

module.exports = mongoose