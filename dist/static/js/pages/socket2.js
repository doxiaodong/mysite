window.onload=function(){var e=0,t=document.getElementsByTagName("html")[0],n=function(){var n=document.getElementById("MAIN_APP").getAttribute("ip_md5"),r=null,i=n,s="("+i.slice(0,4)+")",o=document.getElementById("write_form"),u=document.getElementById("message"),a=document.getElementById("user_list"),f=o.getAttribute("host"),l=o.getAttribute("user"),c=l+s,h=document.getElementById("write_input"),p,d=window.location.protocol,v=d==="https:"?"wss":"ws";l||(l=prompt("请输入你的昵称！"),c=l+s);var m=function(){var n;n=v+f;var r=new WebSocket(n);return r.addEventListener("open",function(){console.log("open")}),r.addEventListener("message",function(n){var r=n.data;try{r=JSON.parse(r)}catch(n){}switch(r.type){case"add to ul":var i=function(){var n=document.createElement("li");n.classList.add("each-message");var i='<span class="left username">'+r.user+":</span>"+'<span class="right content">'+r.msg+"</span>";n.innerHTML=i,u.appendChild(n),e++,t.classList.contains("hidden")&&(document.title="你有"+e+"条新消息喔～～")},s=function(){var e=function(){var e=document.createElement("li");e.classList.add("nowrap"),e.id=r.new_id,e.setAttribute("data-id",r.id),e.innerHTML=r.user,a.appendChild(e)},t=document.getElementById(r.new_id);if(t){t.getAttribute("data-id")!==r.id&&t.setAttribute("data-id",r.id);return}e(),r.me==="me"&&document.getElementById(r.new_id).classList.add("me")};i(),s();break;case"remover person":var o=document.querySelector('[data-id="'+r.id+'"]');o&&o.remove()}}),r.addEventListener("close",function(){console.log("close"),setTimeout(function(){try{p=m(),console.log("reopen")}catch(e){}},1e3)}),r};p=m(),o.addEventListener("submit",function(e){l||(l=prompt("请输入你的昵称！"),c=l+s),l||(l="大傻逼",c=l+s);var t={type:"add message",user:c,msg:h.value};r="id"+i+l,t.new_id=r,p.send(JSON.stringify(t)),h.value="",e.preventDefault()})};n(),document.addEventListener("visibilitychange",function(){var n=document.visibilityState;n==="hidden"&&(document.title="点我啊，草泥马！！",t.classList.contains("visible")&&t.classList.remove("visible"),t.classList.add("hidden"),e=0),n==="visible"&&(document.title=document.getElementById("MAIN_APP").getAttribute("title")+"--darlin.me",t.classList.contains("hidden")&&t.classList.remove("hidden"),t.classList.add("visible"))})};