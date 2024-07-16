// Carga de librerías
const express = require("express");
const cors = require("cors");
const methodOverride = require("method-override");

// Enrutadores
const gachaRouter = require("./routes/gacha");

// Inicializar Express
let app = express();

app.use(express.json({limit:"10mb"}));

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"]
}));

// Middleware para procesar otras peticiones que no sean GET o POST
app.use(
    methodOverride(function (req) {
        if (req.body && typeof req.body === "object" && "_method" in req.body) {
            let method = req.body._method;
            delete req.body._method;
            return method;
        }
    })
);

app.use("/gacha", gachaRouter);

// Puesta en marcha del servidor
app.listen(3000);