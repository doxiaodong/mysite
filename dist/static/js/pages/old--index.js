function init(){function f(){(function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=(document.location.protocol=="https:"?"https:":"http:")+"//static.duoshuo.com/embed.js",e.charset="UTF-8",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)})()}function l(e){var t=window.location.hash;if(/#page/.test(t)){var n=t.substring(5)-1;h(e,!0),c(e,e.eq(n)),p(n)}window.location.pathname==="/"&&t===""&&h(e)}function c(e,n){e.addClass("has-one-active"),n.addClass("active"),n.removeClass("has-one-active"),o=setTimeout(function(){n.addClass("after-active"),t.addClass("after-active");var e=$("header.header");e.hasClass("active")||e.addClass("active")},500)}function h(e,n){if(!$("header.header").hasClass("active"))return;n||$("header.header").removeClass("active"),$("li.each-block.active").removeClass("after-active active"),t.removeClass("after-active"),e.removeClass("has-one-active")}function p(e){var n=i.find(".each-nav");n.each(function(){$(this).hasClass("active")&&$(this).removeClass("active")}),n.eq(e).addClass("active"),t.attr("data-page",e+1)}function d(e){var n=i.find(".each-nav").length,s=t.attr("data-page")-1,o=s-1>=0?s-1:n-1,u=s+1<=n-1?s+1:0,a=window.location.hash;e==="prev"?i.find(".each-nav").eq(o).trigger(r.click):e==="next"&&i.find(".each-nav").eq(u).trigger(r.click)}var e=$("html"),t=$("body"),n=function(){return"ontouchstart"in document.documentElement},r=n()&&!window.platform.isDesktop?{click:"touchend"}:{click:"click"},i=$(".header").find(".nav-list"),s=$("li.each-block"),o,u="#page";l(s),$(window).on("hashchange",function(){l(s)}),s.each(function(e){$(this).on(r.click,function(){$(this).hasClass("active")||(clearTimeout(o),window.location.hash=u+(e+1))})}),i.find(".each-nav").each(function(e){$(this).on(r.click,function(){window.location.hash=u+(e+1)})}),$(".back-index").on(r.click,function(){window.location.hash="",window.location.pathname="/"});var a=$(".pages");a.on("click","a[data-pjax]",function(e){var t=$(this).data("pjax"),n={url:$(this).attr("href"),container:"#page"+t+"-container"};$(n.container).off("pjax:start"),$(n.container).on("pjax:start",function(){$(".pjaxloader").show()}),$(n.container).off("pjax:end"),$(n.container).on("pjax:end",function(){$('head link[href*="duoshuo.com"]').remove(),$('head script[src*="duoshuo.com"]').remove(),$("head style").remove(),$("#ds-notify").remove(),f(),$(".pjaxloader").hide()}),$.pjax(n),e.preventDefault()}),$.fn.swipe=function(e,t){return this===[]?this:(this.each(function(){var n=this,r=null,i=null,s=null,o=null,u=100,a=50;n.addEventListener("touchstart",function(e){if(e.touches.length==1){var t=e.touches[0];r=t.pageX,i=t.pageX,s=t.pageY,o=t.pageY}}),n.addEventListener("touchmove",function(e){if(e.touches.length==1){var t=e.touches[0];i=t.pageX,o=t.pageY}}),n.addEventListener("touchend",function(f){r!==null&&Math.abs(o-s)<a&&(i-r>u?(e===undefined&&$(n).trigger("swipeRight"),e==="right"&&t()):r-i>u&&(e===undefined&&$(n).trigger("swipeLeft"),e==="left"&&t())),r!==null&&Math.abs(i-r)<u&&(o-s>a?(e===undefined&&$(n).trigger("swipeTop"),e==="top"&&t()):s-o>a&&(e===undefined&&$(n).trigger("swipeBottom"),e==="bottom"&&t())),r=null,i=null,s=null,o=null})}),this)},$(".pages").swipe().on({swipeLeft:function(){d("next")},swipeRight:function(){d("prev")}}),$(".pages").each(function(){this.addEventListener("gestureend",function(e){e.scale<1&&(window.location.hash="",window.location.pathname="/")})})}window.addEventListener("load",init);var duoshuoQuery={short_name:"duxiaodong"};