window.onload=function(){var e=0,t=document.getElementsByTagName("html")[0],n=function(){var n=document.getElementById("write_form"),r=document.getElementById("message"),i=document.getElementById("user_list"),s=n.getAttribute("host"),o=n.getAttribute("user"),u=document.getElementById("write_input"),a=!0,f=window.location.protocol,l=f==="https:"?"wss":"ws",c=new WebSocket(l+s);o||(o=prompt("请输入你的昵称！")),n.addEventListener("submit",function(e){o||(o=prompt("请输入你的昵称！")),o||(o="大傻逼");var t=JSON.stringify({type:"add message",user:o,msg:u.value});c.send(t),u.value="",e.preventDefault()}),c.addEventListener("open",function(){console.log("open")}),c.addEventListener("message",function(n){var s=n.data;try{s=JSON.parse(s)}catch(n){}switch(s.type){case"add to ul":var o=function(){var n=document.createElement("li");n.classList.add("each-message");var i='<span class="left username">'+s.user+":</span>"+'<span class="right content">'+s.msg+"</span>";n.innerHTML=i,r.appendChild(n),e++,t.classList.contains("hidden")&&(document.title="你有"+e+"条新消息喔～～")},u=function(){var e=function(){var e=document.createElement("li");e.classList.add("nowrap"),e.id=s.id,e.innerHTML=s.user,i.appendChild(e)};if(document.getElementById(s.id))return;s.me==="me"?a&&(e(),document.getElementById(s.id).classList.add("me"),a=!1):e()};o(),u();break;case"remover person":var f=document.getElementById(s.id);f&&f.remove()}}),c.addEventListener("close",function(){console.log("close"),setTimeout(function(){c=new WebSocket(l+s)},1e3)})};n(),document.addEventListener("visibilitychange",function(){var n=document.visibilityState;n==="hidden"&&(document.title="点我啊，草泥马！！",t.classList.contains("visible")&&t.classList.remove("visible"),t.classList.add("hidden"),e=0),n==="visible"&&(document.title=document.getElementById("MAIN_APP").getAttribute("title")+"--darlin.me",t.classList.contains("hidden")&&t.classList.remove("hidden"),t.classList.add("visible"))})};