var WebSocketServer=require("ws").Server,io=new WebSocketServer({port:3030});io.broadcast=function(t){io.clients.forEach(function(n){var r;try{r=JSON.parse(t).id}catch(i){}r!=="socket_id_"+n._ultron.id&&n.send(t)})},io.on("connection",function(e){e.on("open",function(){console.log("open")}),e.on("message",function(t){var n=t;try{n=JSON.parse(t)}catch(r){}switch(n.type){case"add message":n.type="add to ul",n.id="socket_id_"+e._ultron.id,io.broadcast(JSON.stringify(n)),n.me="me",e.send(JSON.stringify(n))}}),e.on("close",function(){var t="socket_id_"+e._ultron.id,n={type:"remover person",id:t};io.broadcast(JSON.stringify(n))})});