var http=require("http"),app=http.createServer(),io=require("socket.io")(app);app.listen(3030),io.sockets.on("connection",function(e){e.emit("add to ul",{user:"毒枭东",msg:"Hi!你们好呀～"}),e.on("send message",function(t){e.emit("add to ul",t),e.broadcast.emit("add to ul",t)})});