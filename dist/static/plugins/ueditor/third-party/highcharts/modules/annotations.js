(function(e,t){function n(e){return typeof e=="number"}function r(e){return e!==i&&e!==null}var i,s,o,u=e.Chart,a=e.extend,f=e.each;o=["path","rect","circle"],s={top:0,left:0,center:.5,middle:.5,bottom:1,right:1};var l=t.inArray,c=e.merge,h=function(){this.init.apply(this,arguments)};h.prototype={init:function(e,t){var n=t.shape&&t.shape.type;this.chart=e;var r,i;i={xAxis:0,yAxis:0,title:{style:{},text:"",x:0,y:0},shape:{params:{stroke:"#000000",fill:"transparent",strokeWidth:2}}},r={circle:{params:{x:0,y:0}}},r[n]&&(i.shape=c(i.shape,r[n])),this.options=c({},i,t)},render:function(e){var t=this.chart,n=this.chart.renderer,r=this.group,i=this.title,s=this.shape,u=this.options,a=u.title,f=u.shape;r||(r=this.group=n.g()),!s&&f&&l(f.type,o)!==-1&&(s=this.shape=n[u.shape.type](f.params),s.add(r)),!i&&a&&(i=this.title=n.label(a),i.add(r)),r.add(t.annotations.group),this.linkObjects(),e!==!1&&this.redraw()},redraw:function(){var t=this.options,i=this.chart,o=this.group,u=this.title,f=this.shape,c=this.linkedObject,h=i.xAxis[t.xAxis],d=i.yAxis[t.yAxis],v=t.width,g=t.height,y=s[t.anchorY],b=s[t.anchorX],w,E,S,x;c&&(w=c instanceof e.Point?"point":c instanceof e.Series?"series":null,w==="point"?(t.xValue=c.x,t.yValue=c.y,E=c.series):w==="series"&&(E=c),o.visibility!==E.group.visibility&&o.attr({visibility:E.group.visibility})),c=r(t.xValue)?h.toPixels(t.xValue+h.minPointOffset)-h.minPixelPadding:t.x,w=r(t.yValue)?d.toPixels(t.yValue):t.y;if(!isNaN(c)&&!isNaN(w)&&n(c)&&n(w)){u&&(u.attr(t.title),u.css(t.title.style));if(f){u=a({},t.shape.params);if(t.units==="values"){for(S in u)l(S,["width","x"])>-1?u[S]=h.translate(u[S]):l(S,["height","y"])>-1&&(u[S]=d.translate(u[S]));u.width&&(u.width-=h.toPixels(0)-h.left),u.x&&(u.x+=h.minPixelPadding);if(t.shape.type==="path"){S=u.d,E=c;for(var T=w,N=S.length,C=0;C<N;)typeof S[C]=="number"&&typeof S[C+1]=="number"?(S[C]=h.toPixels(S[C])-E,S[C+1]=d.toPixels(S[C+1])-T,C+=2):C+=1}}t.shape.type==="circle"&&(u.x+=u.r,u.y+=u.r),f.attr(u)}o.bBox=null,n(v)||(x=o.getBBox(),v=x.width),n(g)||(x||(x=o.getBBox()),g=x.height),n(b)||(b=s.center),n(y)||(y=s.center),c-=v*b,w-=g*y,i.animation&&r(o.translateX)&&r(o.translateY)?o.animate({translateX:c,translateY:w}):o.translate(c,w)}},destroy:function(){var e=this,t=this.chart.annotations.allItems,n=t.indexOf(e);n>-1&&t.splice(n,1),f(["title","shape","group"],function(t){e[t]&&(e[t].destroy(),e[t]=null)}),e.group=e.title=e.shape=e.chart=e.options=null},update:function(e,t){a(this.options,e),this.linkObjects(),this.render(t)},linkObjects:function(){var e=this.chart,t=this.linkedObject,n=t&&(t.id||t.options.id),i=this.options.linkedTo;if(r(i)){if(!r(t)||i!==n)this.linkedObject=e.get(i)}else this.linkedObject=null}},a(u.prototype,{annotations:{add:function(e,t){var n=this.allItems,r=this.chart,i,s;Object.prototype.toString.call(e)==="[object Array]"||(e=[e]);for(s=e.length;s--;)i=new h(r,e[s]),n.push(i),i.render(t)},redraw:function(){f(this.allItems,function(e){e.redraw()})}}}),u.prototype.callbacks.push(function(t){var n=t.options.annotations,r;r=t.renderer.g("annotations"),r.attr({zIndex:7}),r.add(),t.annotations.allItems=[],t.annotations.chart=t,t.annotations.group=r,Object.prototype.toString.call(n)==="[object Array]"&&n.length>0&&t.annotations.add(t.options.annotations),e.addEvent(t,"redraw",function(){t.annotations.redraw()})})})(Highcharts,HighchartsAdapter);