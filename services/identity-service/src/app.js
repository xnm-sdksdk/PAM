const express = require("express")

const PORT = 3003

const app = express()

app.listen(PORT, () => console.log(`Identity Service Microservice running on port ${PORT}`));
