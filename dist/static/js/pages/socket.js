window.onload=function(){var e=document.getElementById("write_form"),t=document.getElementById("message"),n=e.getAttribute("host"),r=e.getAttribute("user"),i=io.connect(n),s=document.getElementById("write_input");r||(r=prompt("请输入你的昵称！")),e.addEventListener("submit",function(e){r||(r=prompt("请输入你的昵称！")),r||(r="大傻逼"),i.emit("send message",{user:r,msg:s.value}),s.value="",e.preventDefault()}),i.on("add to ul",function(e){var n=document.createElement("li");n.classList.add("each-message");var r='<span class="left username">'+e.user+":</span>"+'<span class="right content">'+e.msg+"</span>";n.innerHTML=r,t.appendChild(n)})};