(function(){function i(){var e=$G("tabHeads").children;for(var t=0;t<e.length;t++)domUtils.on(e[t],"click",function(t){var n,r,i=t.target||t.srcElement;for(n=0;n<e.length;n++)r=e[n].getAttribute("data-content-id"),e[n]==i?(domUtils.addClass(e[n],"focus"),domUtils.addClass($G(r),"focus")):(domUtils.removeClasses(e[n],"focus"),domUtils.removeClasses($G(r),"focus"))})}function s(){d(["videoFloat","upload_alignment"]),m($G("videoUrl")),o(),function(){var e=editor.selection.getRange().getClosedNode(),t;if(e&&e.className){var r=e.className=="edui-faked-video",i=e.className.indexOf("edui-upload-video")!=-1;if(r||i){$G("videoUrl").value=t=e.getAttribute("_url"),$G("videoWidth").value=e.width,$G("videoHeight").value=e.height;var s=domUtils.getComputedStyle(e,"float"),o=domUtils.getComputedStyle(e.parentNode,"text-align");u(o==="center"?"center":s)}i&&(n=!0)}g(t)}()}function o(){dialog.onok=function(){$G("preview").innerHTML="";var e=l("tabHeads","tabSrc");switch(e){case"video":return a();case"videoSearch":return f("searchList");case"upload":return y()}},dialog.oncancel=function(){$G("preview").innerHTML=""}}function u(e){var t=$G("videoFloat").children;for(var n=0,r;r=t[n++];)r.getAttribute("name")==e?r.className!="focus"&&(r.className="focus"):r.className=="focus"&&(r.className="")}function a(){var e=$G("videoWidth"),t=$G("videoHeight"),r=$G("videoUrl").value,i=l("videoFloat","name");if(!r)return!1;if(!h([e,t]))return!1;editor.execCommand("insertvideo",{url:c(r),width:e.value,height:t.value,align:i},n?"upload":null)}function f(e){var t=domUtils.getElementsByTagName($G(e),"img"),n=[];for(var r=0,i;i=t[r++];)i.getAttribute("selected")&&n.push({url:i.getAttribute("ue_video_url"),width:420,height:280,align:"none"});editor.execCommand("insertvideo",n)}function l(e,t){var n=$G(e).children,r;for(var i=0,s;s=n[i++];)if(s.className=="focus"){r=s.getAttribute(t);break}return r}function c(e){return e?(e=utils.trim(e).replace(/v\.youku\.com\/v_show\/id_([\w\-=]+)\.html/i,"player.youku.com/player.php/sid/$1/v.swf").replace(/(www\.)?youtube\.com\/watch\?v=([\w\-]+)/i,"www.youtube.com/v/$2").replace(/youtu.be\/(\w+)$/i,"www.youtube.com/v/$1").replace(/v\.ku6\.com\/.+\/([\w\.]+)\.html.*$/i,"player.ku6.com/refer/$1/v.swf").replace(/www\.56\.com\/u\d+\/v_([\w\-]+)\.html/i,"player.56.com/v_$1.swf").replace(/www.56.com\/w\d+\/play_album\-aid\-\d+_vid\-([^.]+)\.html/i,"player.56.com/v_$1.swf").replace(/v\.pps\.tv\/play_([\w]+)\.html.*$/i,"player.pps.tv/player/sid/$1/v.swf").replace(/www\.letv\.com\/ptv\/vplay\/([\d]+)\.html.*$/i,"i7.imgs.letv.com/player/swfPlayer.swf?id=$1&autoplay=0").replace(/www\.tudou\.com\/programs\/view\/([\w\-]+)\/?/i,"www.tudou.com/v/$1").replace(/v\.qq\.com\/cover\/[\w]+\/[\w]+\/([\w]+)\.html/i,"static.video.qq.com/TPout.swf?vid=$1").replace(/v\.qq\.com\/.+[\?\&]vid=([^&]+).*$/i,"static.video.qq.com/TPout.swf?vid=$1").replace(/my\.tv\.sohu\.com\/[\w]+\/[\d]+\/([\d]+)\.shtml.*$/i,"share.vrs.sohu.com/my/v.swf&id=$1"),e):""}function h(e){for(var t=0,n;n=e[t++];){var r=n.value;if(!p(r)&&r)return alert(lang.numError),n.value="",n.focus(),!1}return!0}function p(e){return/(0|^[1-9]\d*$)/.test(e)}function d(e){for(var t=0,n;n=e[t++];){var r=$G(n),i={none:lang["default"],left:lang.floatLeft,right:lang.floatRight,center:lang.block};for(var s in i){var o=document.createElement("div");o.setAttribute("name",s),s=="none"&&(o.className="focus"),o.style.cssText="background:url(images/"+s+"_focus.jpg);",o.setAttribute("title",i[s]),r.appendChild(o)}v(n)}}function v(e){var t=$G(e).children;for(var n=0,r;r=t[n++];)domUtils.on(r,"click",function(){for(var e=0,n;n=t[e++];)n.className="",n.removeAttribute&&n.removeAttribute("class");this.className="focus"})}function m(e){browser.ie?e.onpropertychange=function(){g(this.value)}:e.addEventListener("input",function(){g(this.value)},!1)}function g(e){if(!e)return;var t=c(e);$G("preview").innerHTML='<div class="previewMsg"><span>'+lang.urlError+"</span></div>"+'<embed class="previewVideo" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"'+' src="'+t+'"'+' width="'+420+'"'+' height="'+280+'"'+' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >'+"</embed>"}function y(){var e=[],n=editor.getOpt("videoUrlPrefix"),i=$G("upload_width").value||420,s=$G("upload_height").value||280,o=l("upload_alignment","name")||"none";for(var u in t){var a=t[u];e.push({url:n+a.url,width:i,height:s,align:o})}var f=r.getQueueCount();if(f)return $(".info","#queueList").html('<span style="color:red;">'+"还有2个未上传文件".replace(/[\d]/,f)+"</span>"),!1;editor.execCommand("insertvideo",e,"upload")}function b(){r=new w("queueList")}function w(e){this.$wrap=e.constructor==String?$("#"+e):$(e),this.init()}var e={},t=[],n=!1,r;window.onload=function(){$focus($G("videoUrl")),i(),s(),b()},w.prototype={init:function(){this.fileList=[],this.initContainer(),this.initUploader()},initContainer:function(){this.$queue=this.$wrap.find(".filelist")},initUploader:function(){function T(e){var t=n('<li id="'+e.id+'">'+'<p class="title">'+e.name+"</p>"+'<p class="imgWrap"></p>'+'<p class="progress"><span></span></p>'+"</li>"),r=n('<div class="file-panel"><span class="cancel">'+lang.uploadDelete+"</span>"+'<span class="rotateRight">'+lang.uploadTurnRight+"</span>"+'<span class="rotateLeft">'+lang.uploadTurnLeft+"</span></div>").appendTo(t),i=t.find("p.progress span"),s=t.find("p.imgWrap"),o=n('<p class="error"></p>').hide().appendTo(t),u=function(e){switch(e){case"exceed_size":text=lang.errorExceedSize;break;case"interrupt":text=lang.errorInterrupt;break;case"http":text=lang.errorHttp;break;case"not_allow_type":text=lang.errorFileType;break;default:text=lang.errorUploadRetry}o.text(text).show()};if(e.getStatus()==="invalid")u(e.statusText);else{s.text(lang.uploadPreview),"|png|jpg|jpeg|bmp|gif|".indexOf("|"+e.ext.toLowerCase()+"|")==-1?s.empty().addClass("notimage").append('<i class="file-preview file-type-'+e.ext.toLowerCase()+'"></i>'+'<span class="file-title">'+e.name+"</span>"):browser.ie&&browser.version<=7?s.text(lang.uploadNoPreview):w.makeThumb(e,function(e,t){if(e||!t||/^data:/.test(t)&&browser.ie&&browser.version<=7)s.text(lang.uploadNoPreview);else{var r=n('<img src="'+t+'">');s.empty().append(r),r.on("error",function(){s.text(lang.uploadNoPreview)})}},v,m),y[e.id]=[e.size,0],e.rotation=0;if(!e.ext||x.indexOf(e.ext.toLowerCase())==-1)u("not_allow_type"),w.removeFile(e)}e.on("statuschange",function(n,s){s==="progress"?i.hide().width(0):s==="queued"&&(t.off("mouseenter mouseleave"),r.remove()),n==="error"||n==="invalid"?(u(e.statusText),y[e.id][1]=1):n==="interrupt"?u("interrupt"):n==="queued"?y[e.id][1]=0:n==="progress"?(o.hide(),i.css("display","block")):n==="complete",t.removeClass("state-"+s).addClass("state-"+n)}),t.on("mouseenter",function(){r.stop().animate({height:30})}),t.on("mouseleave",function(){r.stop().animate({height:0})}),r.on("click","span",function(){var t=n(this).index(),r;switch(t){case 0:w.removeFile(e);return;case 1:e.rotation+=90;break;case 2:e.rotation-=90}b?(r="rotate("+e.rotation+"deg)",s.css({"-webkit-transform":r,"-mos-transform":r,"-o-transform":r,transform:r})):s.css("filter","progid:DXImageTransform.Microsoft.BasicImage(rotation="+~~(e.rotation/90%4+4)%4+")")}),t.insertBefore(f)}function N(e){var t=n("#"+e.id);delete y[e.id],C(),t.off().find(".file-panel").off().end().remove()}function C(){var e=0,t=0,r=c.children(),i;n.each(y,function(n,r){t+=r[0],e+=r[0]*r[1]}),i=t?e/t:0,r.eq(0).text(Math.round(i*100)+"%"),r.eq(1).css("width",Math.round(i*100)+"%"),L()}function k(t,n){if(t!=g){var r=w.getStats();u.removeClass("state-"+g),u.addClass("state-"+t);switch(t){case"pedding":i.addClass("element-invisible"),s.addClass("element-invisible"),l.removeClass("element-invisible"),c.hide(),o.hide(),w.refresh();break;case"ready":l.addClass("element-invisible"),i.removeClass("element-invisible"),s.removeClass("element-invisible"),c.hide(),o.show(),u.text(lang.uploadStart),w.refresh();break;case"uploading":c.show(),o.hide(),u.text(lang.uploadPause);break;case"paused":c.show(),o.hide(),u.text(lang.uploadContinue);break;case"confirm":c.show(),o.hide(),u.text(lang.uploadStart),r=w.getStats();if(r.successNum&&!r.uploadFailNum){k("finish");return}break;case"finish":c.hide(),o.show(),r.uploadFailNum?u.text(lang.uploadRetry):u.text(lang.uploadStart)}g=t,L()}e.getQueueCount()?u.removeClass("disabled"):u.addClass("disabled")}function L(){var e="",t;g==="ready"?e=lang.updateStatusReady.replace("_",h).replace("_KB",WebUploader.formatSize(p)):g==="confirm"?(t=w.getStats(),t.uploadFailNum&&(e=lang.updateStatusConfirm.replace("_",t.successNum).replace("_",t.successNum))):(t=w.getStats(),e=lang.updateStatusFinish.replace("_",h).replace("_KB",WebUploader.formatSize(p)).replace("_",t.successNum),t.uploadFailNum&&(e+=lang.updateStatusError.replace("_",t.uploadFailNum))),o.html(e)}var e=this,n=jQuery,r=e.$wrap,i=r.find(".filelist"),s=r.find(".statusBar"),o=s.find(".info"),u=r.find(".uploadBtn"),a=r.find(".filePickerBtn"),f=r.find(".filePickerBlock"),l=r.find(".placeholder"),c=s.find(".progress").hide(),h=0,p=0,d=window.devicePixelRatio||1,v=113*d,m=113*d,g="",y={},b=function(){var e=document.createElement("p").style,t="transition"in e||"WebkitTransition"in e||"MozTransition"in e||"msTransition"in e||"OTransition"in e;return e=null,t}(),w,E=editor.getActionUrl(editor.getOpt("videoActionName")),S=editor.getOpt("videoMaxSize"),x=(editor.getOpt("videoAllowFiles")||[]).join("").replace(/\./g,",").replace(/^[,]/,"");if(!WebUploader.Uploader.support()){n("#filePickerReady").after(n("<div>").html(lang.errorNotSupport)).hide();return}if(!editor.getOpt("videoActionName")){n("#filePickerReady").after(n("<div>").html(lang.errorLoadConfig)).hide();return}w=e.uploader=WebUploader.create({pick:{id:"#filePickerReady",label:lang.uploadSelectFile},swf:"../../third-party/webuploader/Uploader.swf",server:E,fileVal:editor.getOpt("videoFieldName"),duplicate:!0,fileSingleSizeLimit:S,compress:!1}),w.addButton({id:"#filePickerBlock"}),w.addButton({id:"#filePickerBtn",label:lang.uploadAddFile}),k("pedding"),w.on("fileQueued",function(e){h++,p+=e.size,h===1&&(l.addClass("element-invisible"),s.show()),T(e)}),w.on("fileDequeued",function(e){h--,p-=e.size,N(e),C()}),w.on("filesQueued",function(e){!w.isInProgress()&&(g=="pedding"||g=="finish"||g=="confirm"||g=="ready")&&k("ready"),C()}),w.on("all",function(e,t){switch(e){case"uploadFinished":k("confirm",t);break;case"startUpload":var n=utils.serializeParam(editor.queryCommandValue("serverparam"))||"",r=utils.formatUrl(E+(E.indexOf("?")==-1?"?":"&")+"encode=utf-8&"+n);w.option("server",r),k("uploading",t);break;case"stopUpload":k("paused",t)}}),w.on("uploadBeforeSend",function(e,t,n){n.X_Requested_With="XMLHttpRequest"}),w.on("uploadProgress",function(e,t){var r=n("#"+e.id),i=r.find(".progress span");i.css("width",t*100+"%"),y[e.id][1]=t,C()}),w.on("uploadSuccess",function(e,r){var i=n("#"+e.id);try{var s=r._raw||r,o=utils.str2json(s);o.state=="SUCCESS"?(t.push({url:o.url,type:o.type,original:o.original}),i.append('<span class="success"></span>')):i.find(".error").text(o.state).show()}catch(u){i.find(".error").text(lang.errorServerUpload).show()}}),w.on("uploadError",function(e,t){}),w.on("error",function(e,t){(e=="Q_TYPE_DENIED"||e=="F_EXCEED_SIZE")&&T(t)}),w.on("uploadComplete",function(e,t){}),u.on("click",function(){if(n(this).hasClass("disabled"))return!1;g==="ready"?w.upload():g==="paused"?w.upload():g==="uploading"&&w.stop()}),u.addClass("state-"+g),C()},getQueueCount:function(){var e,t,n,r=0,i=this.uploader.getFiles();for(t=0;e=i[t++];)n=e.getStatus(),(n=="queued"||n=="uploading"||n=="progress")&&r++;return r},refresh:function(){this.uploader.refresh()}}})();