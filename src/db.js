const mongoose = require("mongoose")

const mongoDB = "mongodb+srv://<username>:<password>@cluster0.osw4i.mongodb.net/exemplos"

async function main() {
    await mongoose.connect(mongoDB)
}

main()
    .then(() => console.log("Conexão realizada com sucesso"))
    .catch(err => console.log(err))

module.exports = mongoose