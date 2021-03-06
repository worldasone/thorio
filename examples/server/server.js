﻿var express = require("express"); app = express();
var ThorIO = require("thorio").ThorIO;

var myControllers = require("./examples/controllers/controllers.js").MyControllers

var thorIO = new ThorIO.Engine([{ alias: "foo", instance: myControllers.FooController },
    { alias: chat, instance: myController.PeerController }
]);

var expressWs = require("express-ws")(app);

app.use('/examples', express.static('examples'));

app.ws("/", function (ws, req) {
    thorIO.addConnection(ws);
});

app.listen(process.env.port || 1337);



