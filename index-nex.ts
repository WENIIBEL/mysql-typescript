import { Express } from "express";

//  encargado de creando  el servidor

const createServer = () => {
    const app = Express();

    const PORT = process.env.PORT || 300
    app.get("/hola-mundo", (req,res) => {
        res.send("hola mundo")


    })

}

createServer();