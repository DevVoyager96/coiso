const express = require("express")
const app = express()
const port = 5000

const aeroporto_router = require("./routers/aeroporto_router.js")

app.use(express.json())

app.use("/aeroporto", aeroporto_router)

app.listen(port, () => console.log("Servidor escutando na porta " + port))