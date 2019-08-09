const express = require('express');
const app = express();
var cors = require('cors');
const path = require('path');
const http = require("http");
const debug = require("debug")("node-angular");


app.use(cors())

app.use("/", express.static(path.join(__dirname, "angular")))


require('./routes/getAnimalsRoute')(app);
require('./routes/getAttributesRoute')(app);
app.use((req, res, send)=>{
    res.sendFile(path.join(__dirname, "angular", "index.html"))
})


const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    debug("Listening on " + bind);
  };

const port = "5000";
app.set("port", port);

const server = http.createServer(app);
server.on("listening", onListening);
server.listen(port);