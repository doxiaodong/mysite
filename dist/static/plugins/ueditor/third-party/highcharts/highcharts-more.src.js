/**
 * @license Highcharts JS v3.0.6 (2013-10-04)
 *
 * (c) 2009-2013 Torstein Hønsi
 *
 * License: www.highcharts.com/license
 */

(function(e,t){function T(e,t,n){this.init.call(this,e,t,n)}function D(e,t,n){e.call(this,t,n),this.chart.polar&&(this.closeSegment=function(e){var t=this.xAxis.center;e.push("L",t[0],t[1])},this.closedStacks=!0)}function P(e,t){var n=this.chart,r=this.options.animation,i=this.group,s=this.markerGroup,o=this.xAxis.center,u=n.plotLeft,a=n.plotTop,f;n.polar?n.renderer.isSVG&&(r===!0&&(r={}),t?(f={translateX:o[0]+u,translateY:o[1]+a,scaleX:.001,scaleY:.001},i.attr(f),s&&(s.attrSetters=i.attrSetters,s.attr(f))):(f={translateX:u,translateY:a,scaleX:1,scaleY:1},i.animate(f,r),s&&s.animate(f,r),this.animate=null)):e.call(this,t)}var n=e.arrayMin,r=e.arrayMax,i=e.each,s=e.extend,o=e.merge,u=e.map,a=e.pick,f=e.pInt,l=e.getOptions().plotOptions,c=e.seriesTypes,h=e.extendClass,p=e.splat,d=e.wrap,v=e.Axis,m=e.Tick,g=e.Series,y=c.column.prototype,b=Math,w=b.round,E=b.floor,S=b.max,x=function(){};s(T.prototype,{init:function(e,t,n){var r=this,s,u=r.defaultOptions;r.chart=t,t.angular&&(u.background={}),r.options=e=o(u,e),s=e.background,s&&i([].concat(p(s)).reverse(),function(e){var t=e.backgroundColor;e=o(r.defaultBackgroundOptions,e),t&&(e.backgroundColor=t),e.color=e.backgroundColor,n.options.plotBands.unshift(e)})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"silver",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#FFF"],[1,"#DDD"]]},from:Number.MIN_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"}});var N=v.prototype,C=m.prototype,k={getOffset:x,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:x,setCategories:x,setTitle:x},L={isRadial:!0,defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,plotBands:[],tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,plotBands:[],showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},plotBands:[],showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(e){this.options=o(this.defaultOptions,this.defaultRadialOptions,e)},getOffset:function(){N.getOffset.call(this),this.chart.axisOffset[this.side]=0},getLinePath:function(e,t){var n=this.center;return t=a(t,n[2]/2-this.offset),this.chart.renderer.symbols.arc(this.left+n[0],this.top+n[1],t,t,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0})},setAxisTranslation:function(){N.setAxisTranslation.call(this),this.center&&(this.isCircular?this.transA=(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.transA=this.center[2]/2/(this.max-this.min||1),this.isXAxis&&(this.minPixelPadding=this.transA*this.minPointOffset+(this.reversed?(this.endAngleRad-this.startAngleRad)/4:0)))},beforeSetTickPositions:function(){this.autoConnect&&(this.max+=this.categories&&1||this.pointRange||this.closestPointRange||0)},setAxisSize:function(){N.setAxisSize.call(this),this.isRadial&&(this.center=this.pane.center=c.pie.prototype.getCenter.call(this.pane),this.len=this.width=this.height=this.isCircular?this.center[2]*(this.endAngleRad-this.startAngleRad)/2:this.center[2]/2)},getPosition:function(e,t){return this.isCircular||(t=this.translate(e),e=this.min),this.postTranslate(this.translate(e),a(t,this.center[2]/2)-this.offset)},postTranslate:function(e,t){var n=this.chart,r=this.center;return e=this.startAngleRad+e,{x:n.plotLeft+r[0]+Math.cos(e)*t,y:n.plotTop+r[1]+Math.sin(e)*t}},getPlotBandPath:function(e,t,n){var r=this.center,i=this.startAngleRad,s=r[2]/2,o=[a(n.outerRadius,"100%"),n.innerRadius,a(n.thickness,10)],l=/%$/,c,h,p,d=this.isCircular,v;return this.options.gridLineInterpolation==="polygon"?v=this.getPlotLinePath(e).concat(this.getPlotLinePath(t,!0)):(d||(o[0]=this.translate(e),o[1]=this.translate(t)),o=u(o,function(e){return l.test(e)&&(e=f(e,10)*s/100),e}),n.shape==="circle"||!d?(c=-Math.PI/2,h=Math.PI*1.5,p=!0):(c=i+this.translate(e),h=i+this.translate(t)),v=this.chart.renderer.symbols.arc(this.left+r[0],this.top+r[1],o[0],o[0],{start:c,end:h,innerR:a(o[1],o[0]-o[2]),open:p})),v},getPlotLinePath:function(e,t){var n=this,r=n.center,s=n.chart,o=n.getPosition(e),u,a,f,l;return n.isCircular?l=["M",r[0]+s.plotLeft,r[1]+s.plotTop,"L",o.x,o.y]:n.options.gridLineInterpolation==="circle"?(e=n.translate(e),e&&(l=n.getLinePath(0,e))):(u=s.xAxis[0],l=[],e=n.translate(e),f=u.tickPositions,u.autoConnect&&(f=f.concat([f[0]])),t&&(f=[].concat(f).reverse()),i(f,function(t,n){a=u.getPosition(t,e),l.push(n?"L":"M",a.x,a.y)})),l},getTitlePosition:function(){var e=this.center,t=this.chart,n=this.options.title;return{x:t.plotLeft+e[0]+(n.x||0),y:t.plotTop+e[1]-{high:.5,middle:.25,low:0}[n.align]*e[2]+(n.y||0)}}};d(N,"init",function(e,n,r){var i=this,u=n.angular,f=n.polar,l=r.isX,c=u&&l,h,d,v,m,g=n.options,y=r.pane||0,b,w;u?(s(this,c?k:L),h=!l,h&&(this.defaultRadialOptions=this.defaultRadialGaugeOptions)):f&&(s(this,L),h=l,this.defaultRadialOptions=l?this.defaultRadialXOptions:o(this.defaultYAxisOptions,this.defaultRadialYOptions)),e.call(this,n,r),!c&&(u||f)&&(m=this.options,n.panes||(n.panes=[]),this.pane=b=n.panes[y]=n.panes[y]||new T(p(g.pane)[y],n,i),w=b.options,n.inverted=!1,g.chart.zoomType=null,this.startAngleRad=d=(w.startAngle-90)*Math.PI/180,this.endAngleRad=v=(a(w.endAngle,w.startAngle+360)-90)*Math.PI/180,this.offset=m.offset||0,this.isCircular=h,h&&r.max===t&&v-d===2*Math.PI&&(this.autoConnect=!0))}),d(C,"getPosition",function(e,t,n,r,i){var s=this.axis;return s.getPosition?s.getPosition(n):e.call(this,t,n,r,i)}),d(C,"getLabelPosition",function(e,t,n,r,i,s,o,u,l){var c=this.axis,h=s.y,p,d=s.align,v=(c.translate(this.pos)+c.startAngleRad+Math.PI/2)/Math.PI*180%360;return c.isRadial?(p=c.getPosition(this.pos,c.center[2]/2+a(s.distance,-25)),s.rotation==="auto"?r.attr({rotation:v}):h===null&&(h=f(r.styles.lineHeight)*.9-r.getBBox().height/2),d===null&&(c.isCircular?v>20&&v<160?d="left":v>200&&v<340?d="right":d="center":d="center",r.attr({align:d})),p.x+=s.x,p.y+=h):p=e.call(this,t,n,r,i,s,o,u,l),p}),d(C,"getMarkPath",function(e,t,n,r,i,s,o){var u=this.axis,a,f;return u.isRadial?(a=u.getPosition(this.pos,u.center[2]/2+r),f=["M",t,n,"L",a.x,a.y]):f=e.call(this,t,n,r,i,s,o),f}),l.arearange=o(l.area,{lineWidth:1,marker:null,threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.low}</b> - <b>{point.high}</b><br/>'},trackByArea:!0,dataLabels:{verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0}}),c.arearange=e.extendClass(c.area,{type:"arearange",pointArrayMap:["low","high"],toYData:function(e){return[e.low,e.high]},pointValKey:"low",getSegments:function(){var e=this;i(e.points,function(t){!!e.options.connectNulls||t.low!==null&&t.high!==null?t.low===null&&t.high!==null&&(t.y=t.high):t.y=null}),g.prototype.getSegments.call(this)},translate:function(){var e=this,t=e.yAxis;c.area.prototype.translate.apply(e),i(e.points,function(e){var n=e.low,r=e.high,i=e.plotY;r===null&&n===null?e.y=null:n===null?(e.plotLow=e.plotY=null,e.plotHigh=t.translate(r,0,1,0,1)):r===null?(e.plotLow=i,e.plotHigh=null):(e.plotLow=i,e.plotHigh=t.translate(r,0,1,0,1))})},getSegmentPath:function(e){var t,n=[],r=e.length,i=g.prototype.getSegmentPath,s,o,u,a=this.options,f=a.step,l;t=HighchartsAdapter.grep(e,function(e){return e.plotLow!==null});while(r--)s=e[r],s.plotHigh!==null&&n.push({plotX:s.plotX,plotY:s.plotHigh});return u=i.call(this,t),f&&(f===!0&&(f="left"),a.step={left:"right",center:"center",right:"left"}[f]),l=i.call(this,n),a.step=f,o=[].concat(u,l),l[0]="L",this.areaPath=this.areaPath.concat(u,l),o},drawDataLabels:function(){var e=this.data,t=e.length,n,r=[],i=g.prototype,s=this.options.dataLabels,o,u=this.chart.inverted;if(s.enabled||this._hasPointLabels){n=t;while(n--)o=e[n],o.y=o.high,o.plotY=o.plotHigh,r[n]=o.dataLabel,o.dataLabel=o.dataLabelUpper,o.below=!1,u?(s.align="left",s.x=s.xHigh):s.y=s.yHigh;i.drawDataLabels.apply(this,arguments),n=t;while(n--)o=e[n],o.dataLabelUpper=o.dataLabel,o.dataLabel=r[n],o.y=o.low,o.plotY=o.plotLow,o.below=!0,u?(s.align="right",s.x=s.xLow):s.y=s.yLow;i.drawDataLabels.apply(this,arguments)}},alignDataLabel:c.column.prototype.alignDataLabel,getSymbol:c.column.prototype.getSymbol,drawPoints:x}),l.areasplinerange=o(l.arearange),c.areasplinerange=h(c.arearange,{type:"areasplinerange",getPointSpline:c.spline.prototype.getPointSpline}),l.columnrange=o(l.column,l.arearange,{lineWidth:1,pointRange:null}),c.columnrange=h(c.arearange,{type:"columnrange",translate:function(){var e=this,t=e.yAxis,n;y.translate.apply(e),i(e.points,function(r){var i=r.shapeArgs,s=e.options.minPointLength,o,u,a;r.plotHigh=n=t.translate(r.high,0,1,0,1),r.plotLow=r.plotY,a=n,u=r.plotY-n,u<s&&(o=s-u,u+=o,a-=o/2),i.height=u,i.y=a})},trackerGroups:["group","dataLabels"],drawGraph:x,pointAttrToOptions:y.pointAttrToOptions,drawPoints:y.drawPoints,drawTracker:y.drawTracker,animate:y.animate,getColumnMetrics:y.getColumnMetrics}),l.gauge=o(l.line,{dataLabels:{enabled:!0,y:15,borderWidth:1,borderColor:"silver",borderRadius:3,style:{fontWeight:"bold"},verticalAlign:"top",zIndex:2},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1});var A=e.extendClass(e.Point,{setState:function(e){this.state=e}}),O={type:"gauge",pointClass:A,angular:!0,drawGraph:x,fixedBox:!0,trackerGroups:["group","dataLabels"],translate:function(){var e=this,t=e.yAxis,n=e.options,r=t.center;e.generatePoints(),i(e.points,function(e){var i=o(n.dial,e.dial),s=f(a(i.radius,80))*r[2]/200,u=f(a(i.baseLength,70))*s/100,l=f(a(i.rearLength,10))*s/100,c=i.baseWidth||3,h=i.topWidth||1,p=t.startAngleRad+t.translate(e.y,null,null,null,!0);n.wrap===!1&&(p=Math.max(t.startAngleRad,Math.min(t.endAngleRad,p))),p=p*180/Math.PI,e.shapeType="path",e.shapeArgs={d:i.path||["M",-l,-c/2,"L",u,-c/2,s,-h/2,s,h/2,u,c/2,-l,c/2,"z"],translateX:r[0],translateY:r[1],rotation:p},e.plotX=r[0],e.plotY=r[1]})},drawPoints:function(){var e=this,t=e.yAxis.center,n=e.pivot,r=e.options,s=r.pivot,u=e.chart.renderer;i(e.points,function(t){var n=t.graphic,i=t.shapeArgs,s=i.d,a=o(r.dial,t.dial);n?(n.animate(i),i.d=s):t.graphic=u[t.shapeType](i).attr({stroke:a.borderColor||"none","stroke-width":a.borderWidth||0,fill:a.backgroundColor||"black",rotation:i.rotation}).add(e.group)}),n?n.animate({translateX:t[0],translateY:t[1]}):e.pivot=u.circle(0,0,a(s.radius,5)).attr({"stroke-width":s.borderWidth||0,stroke:s.borderColor||"silver",fill:s.backgroundColor||"black"}).translate(t[0],t[1]).add(e.group)},animate:function(e){var t=this;e||(i(t.points,function(e){var n=e.graphic;n&&(n.attr({rotation:t.yAxis.startAngleRad*180/Math.PI}),n.animate({rotation:e.shapeArgs.rotation},t.options.animation))}),t.animate=null)},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup),c.pie.prototype.render.call(this),this.group.clip(this.chart.clipRect)},setData:c.pie.prototype.setData,drawTracker:c.column.prototype.drawTracker};c.gauge=e.extendClass(c.line,O),l.boxplot=o(l.column,{fillColor:"#FFFFFF",lineWidth:1,medianWidth:2,states:{hover:{brightness:-0.3}},threshold:null,tooltip:{pointFormat:'<span style="color:{series.color};font-weight:bold">{series.name}</span><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},whiskerLength:"50%",whiskerWidth:2}),c.boxplot=h(c.column,{type:"boxplot",pointArrayMap:["low","q1","median","q3","high"],toYData:function(e){return[e.low,e.q1,e.median,e.q3,e.high]},pointValKey:"high",pointAttrToOptions:{fill:"fillColor",stroke:"color","stroke-width":"lineWidth"},drawDataLabels:x,translate:function(){var e=this,t=e.yAxis,n=e.pointArrayMap;c.column.prototype.translate.apply(e),i(e.points,function(e){i(n,function(n){e[n]!==null&&(e[n+"Plot"]=t.translate(e[n],0,1,0,1))})})},drawPoints:function(){var e=this,n=e.points,r=e.options,s=e.chart,o=s.renderer,u,f,l,c,h,p,d,v,m,g,y,b,S,x,T,N,C,k,L,A,O,M,_=e.doQuartiles!==!1,D=parseInt(e.options.whiskerLength,10)/100;i(n,function(n){m=n.graphic,O=n.shapeArgs,y={},x={},N={},M=n.color||e.color,n.plotY!==t&&(u=n.pointAttr[n.selected?"selected":""],C=O.width,k=E(O.x),L=k+C,A=w(C/2),f=E(_?n.q1Plot:n.lowPlot),l=E(_?n.q3Plot:n.lowPlot),c=E(n.highPlot),h=E(n.lowPlot),y.stroke=n.stemColor||r.stemColor||M,y["stroke-width"]=a(n.stemWidth,r.stemWidth,r.lineWidth),y.dashstyle=n.stemDashStyle||r.stemDashStyle,x.stroke=n.whiskerColor||r.whiskerColor||M,x["stroke-width"]=a(n.whiskerWidth,r.whiskerWidth,r.lineWidth),N.stroke=n.medianColor||r.medianColor||M,N["stroke-width"]=a(n.medianWidth,r.medianWidth,r.lineWidth),d=y["stroke-width"]%2/2,v=k+A+d,g=["M",v,l,"L",v,c,"M",v,f,"L",v,h,"z"],_&&(d=u["stroke-width"]%2/2,v=E(v)+d,f=E(f)+d,l=E(l)+d,k+=d,L+=d,b=["M",k,l,"L",k,f,"L",L,f,"L",L,l,"L",k,l,"z"]),D&&(d=x["stroke-width"]%2/2,c+=d,h+=d,S=["M",v-A*D,c,"L",v+A*D,c,"M",v-A*D,h,"L",v+A*D,h]),d=N["stroke-width"]%2/2,p=w(n.medianPlot)+d,T=["M",k,p,"L",L,p,"z"],m?(n.stem.animate({d:g}),D&&n.whiskers.animate({d:S}),_&&n.box.animate({d:b}),n.medianShape.animate({d:T})):(n.graphic=m=o.g().add(e.group),n.stem=o.path(g).attr(y).add(m),D&&(n.whiskers=o.path(S).attr(x).add(m)),_&&(n.box=o.path(b).attr(u).add(m)),n.medianShape=o.path(T).attr(N).add(m)))})}}),l.errorbar=o(l.boxplot,{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:l.arearange.tooltip.pointFormat},whiskerWidth:null}),c.errorbar=h(c.boxplot,{type:"errorbar",pointArrayMap:["low","high"],toYData:function(e){return[e.low,e.high]},pointValKey:"high",doQuartiles:!1,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||c.column.prototype.getColumnMetrics.call(this)}}),l.waterfall=o(l.column,{lineWidth:1,lineColor:"#333",dashStyle:"dot",borderColor:"#333"}),c.waterfall=h(c.column,{type:"waterfall",upColorProp:"fill",pointArrayMap:["low","y"],pointValKey:"y",init:function(e,t){t.stacking=!0,c.column.prototype.init.call(this,e,t)},translate:function(){var e=this,t=e.options,n=e.yAxis,r,i,s,o,u,a,f,l,h,p=t.threshold,d=t.borderWidth%2/2;c.column.prototype.translate.apply(this),l=p,s=e.points;for(i=0,r=s.length;i<r;i++)o=s[i],u=o.shapeArgs,a=e.getStack(i),h=a.points[e.index],isNaN(o.y)&&(o.y=e.yData[i]),f=S(l,l+o.y)+h[0],u.y=n.translate(f,0,1),o.isSum||o.isIntermediateSum?(u.y=n.translate(h[1],0,1),u.height=n.translate(h[0],0,1)-u.y):l+=a.total,u.height<0&&(u.y+=u.height,u.height*=-1),o.plotY=u.y=w(u.y)-d,u.height=w(u.height),o.yBottom=u.y+u.height},processData:function(e){var t=this,n=t.options,r=t.yData,i=t.points,s,o=r.length,u=n.threshold||0,a,f,l,c,h,p;f=a=l=c=u;for(p=0;p<o;p++)h=r[p],s=i&&i[p]?i[p]:{},h==="sum"||s.isSum?r[p]=f:h==="intermediateSum"||s.isIntermediateSum?(r[p]=a,a=u):(f+=h,a+=h),l=Math.min(f,l),c=Math.max(f,c);g.prototype.processData.call(this,e),t.dataMin=l,t.dataMax=c},toYData:function(e){return e.isSum?"sum":e.isIntermediateSum?"intermediateSum":e.y},getAttribs:function(){c.column.prototype.getAttribs.apply(this,arguments);var t=this,n=t.options,r=n.states,s=n.upColor||t.color,u=e.Color(s).brighten(.1).get(),a=o(t.pointAttr),f=t.upColorProp;a[""][f]=s,a.hover[f]=r.hover.upColor||u,a.select[f]=r.select.upColor||s,i(t.points,function(e){e.y>0&&!e.color&&(e.pointAttr=a,e.color=s)})},getGraphPath:function(){var e=this.data,t=e.length,n=this.options.lineWidth+this.options.borderWidth,r=w(n)%2/2,i=[],s="M",o="L",u,a,f,l;for(f=1;f<t;f++)a=e[f].shapeArgs,u=e[f-1].shapeArgs,l=[s,u.x+u.width,u.y+r,o,a.x,u.y+r],e[f-1].y<0&&(l[2]+=u.height,l[5]+=u.height),i=i.concat(l);return i},getExtremes:x,getStack:function(e){var t=this.yAxis,n=t.stacks,r=this.stackKey;return this.processedYData[e]<this.options.threshold&&(r="-"+r),n[r][e]},drawGraph:g.prototype.drawGraph}),l.bubble=o(l.scatter,{dataLabels:{inside:!0,style:{color:"white",textShadow:"0px 0px 3px black"},verticalAlign:"middle"},marker:{lineColor:null,lineWidth:1},minSize:8,maxSize:"20%",tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0}),c.bubble=h(c.scatter,{type:"bubble",pointArrayMap:["y","z"],trackerGroups:["group","dataLabelsGroup"],pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor"},applyOpacity:function(t){var n=this.options.marker,r=a(n.fillOpacity,.5);return t=t||n.fillColor||this.color,r!==1&&(t=e.Color(t).setOpacity(r).get("rgba")),t},convertAttribs:function(){var e=g.prototype.convertAttribs.apply(this,arguments);return e.fill=this.applyOpacity(e.fill),e},getRadii:function(e,t,n,r){var i,s,o,u=this.zData,a=[],f;for(s=0,i=u.length;s<i;s++)f=t-e,o=f>0?(u[s]-e)/(t-e):.5,a.push(b.ceil(n+o*(r-n))/2);this.radii=a},animate:function(e){var t=this.options.animation;e||(i(this.points,function(e){var n=e.graphic,r=e.shapeArgs;n&&r&&(n.attr("r",1),n.animate({r:r.r},t))}),this.animate=null)},translate:function(){var e,n=this.data,r,i,s=this.radii;c.scatter.prototype.translate.call(this),e=n.length;while(e--)r=n[e],i=s?s[e]:0,r.negative=r.z<(this.options.zThreshold||0),i>=this.minPxSize/2?(r.shapeType="circle",r.shapeArgs={x:r.plotX,y:r.plotY,r:i},r.dlBox={x:r.plotX-i,y:r.plotY-i,width:2*i,height:2*i}):r.shapeArgs=r.plotY=r.dlBox=t},drawLegendSymbol:function(e,t){var n=f(e.itemStyle.fontSize)/2;t.legendSymbol=this.chart.renderer.circle(n,e.baseline-n,n).attr({zIndex:3}).add(t.legendGroup),t.legendSymbol.isMarker=!0},drawPoints:c.column.prototype.drawPoints,alignDataLabel:c.column.prototype.alignDataLabel}),v.prototype.beforePadding=function(){var e=this,s=this.len,o=this.chart,u=0,l=s,c=this.isXAxis,h=c?"xData":"yData",p=this.min,d={},v=b.min(o.plotWidth,o.plotHeight),m=Number.MAX_VALUE,g=-Number.MAX_VALUE,y=this.max-p,w=s/y,E=[];this.tickPositions&&(i(this.series,function(t){var s=t.options,o;t.type==="bubble"&&t.visible&&(e.allowZoomOutside=!0,E.push(t),c&&(i(["minSize","maxSize"],function(e){var t=s[e],n=/%$/.test(t);t=f(t),d[e]=n?v*t/100:t}),t.minPxSize=d.minSize,o=t.zData,o.length&&(m=b.min(m,b.max(n(o),s.displayNegative===!1?s.zThreshold:-Number.MAX_VALUE)),g=b.max(g,r(o)))))}),i(E,function(e){var t=e[h],n=t.length,r;c&&e.getRadii(m,g,d.minSize,d.maxSize);if(y>0)while(n--)r=e.radii[n],u=Math.min((t[n]-p)*w-r,u),l=Math.max((t[n]-p)*w+r,l)}),E.length&&y>0&&a(this.options.min,this.userMin)===t&&a(this.options.max,this.userMax)===t&&(l-=s,w*=(s+u-l)/s,this.min+=u/w,this.max+=l/w))};var M=g.prototype,_=e.Pointer.prototype;M.toXY=function(e){var t,n=this.chart,r=e.plotX,i=e.plotY;e.rectPlotX=r,e.rectPlotY=i,e.clientX=(r/Math.PI*180+this.xAxis.pane.options.startAngle)%360,t=this.xAxis.postTranslate(e.plotX,this.yAxis.len-i),e.plotX=e.polarPlotX=t.x-n.plotLeft,e.plotY=e.polarPlotY=t.y-n.plotTop},M.orderTooltipPoints=function(e){this.chart.polar&&(e.sort(function(e,t){return e.clientX-t.clientX}),e[0]&&(e[0].wrappedClientX=e[0].clientX+360,e.push(e[0])))},d(c.area.prototype,"init",D),d(c.areaspline.prototype,"init",D),d(c.spline.prototype,"getPointSpline",function(e,t,n,r){var i,s=1.5,o=s+1,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x;return this.chart.polar?(u=n.plotX,a=n.plotY,f=t[r-1],l=t[r+1],this.connectEnds&&(f||(f=t[t.length-2]),l||(l=t[1])),f&&l&&(c=f.plotX,h=f.plotY,p=l.plotX,d=l.plotY,v=(s*u+c)/o,m=(s*a+h)/o,g=(s*u+p)/o,y=(s*a+d)/o,b=Math.sqrt(Math.pow(v-u,2)+Math.pow(m-a,2)),w=Math.sqrt(Math.pow(g-u,2)+Math.pow(y-a,2)),E=Math.atan2(m-a,v-u),S=Math.atan2(y-a,g-u),x=Math.PI/2+(E+S)/2,Math.abs(E-x)>Math.PI/2&&(x-=Math.PI),v=u+Math.cos(x)*b,m=a+Math.sin(x)*b,g=u+Math.cos(Math.PI+x)*w,y=a+Math.sin(Math.PI+x)*w,n.rightContX=g,n.rightContY=y),r?(i=["C",f.rightContX||f.plotX,f.rightContY||f.plotY,v||u,m||a,u,a],f.rightContX=f.rightContY=null):i=["M",u,a]):i=e.call(this,t,n,r),i}),d(M,"translate",function(e){e.call(this);if(this.chart.polar&&!this.preventPostTranslate){var t=this.points,n=t.length;while(n--)this.toXY(t[n])}}),d(M,"getSegmentPath",function(e,t){var n=this.points;return this.chart.polar&&this.options.connectEnds!==!1&&t[t.length-1]===n[n.length-1]&&n[0].y!==null&&(this.connectEnds=!0,t=[].concat(t,[n[0]])),e.call(this,t)}),d(M,"animate",P),d(y,"animate",P),d(M,"setTooltipPoints",function(e,t){return this.chart.polar&&s(this.xAxis,{tooltipLen:360}),e.call(this,t)}),d(y,"translate",function(e){var t=this.xAxis,n=this.yAxis.len,r=t.center,i=t.startAngleRad,s=this.chart.renderer,o,u,f,l;this.preventPostTranslate=!0,e.call(this);if(t.isRadial){u=this.points,l=u.length;while(l--)f=u[l],o=f.barX+i,f.shapeType="path",f.shapeArgs={d:s.symbols.arc(r[0],r[1],n-f.plotY,null,{start:o,end:o+f.pointWidth,innerR:n-a(f.yBottom,n)})},this.toXY(f)}}),d(y,"alignDataLabel",function(e,t,n,r,i,s){if(this.chart.polar){var o=t.rectPlotX/Math.PI*180,u,a;r.align===null&&(o>20&&o<160?u="left":o>200&&o<340?u="right":u="center",r.align=u),r.verticalAlign===null&&(o<45||o>315?a="bottom":o>135&&o<225?a="top":a="middle",r.verticalAlign=a),M.alignDataLabel.call(this,t,n,r,i,s)}else e.call(this,t,n,r,i,s)}),d(_,"getIndex",function(e,t){var n,r=this.chart,i,s,o;return r.polar?(i=r.xAxis[0].center,s=t.chartX-i[0]-r.plotLeft,o=t.chartY-i[1]-r.plotTop,n=180-Math.round(Math.atan2(s,o)/Math.PI*180)):n=e.call(this,t),n}),d(_,"getCoordinates",function(e,t){var n=this.chart,r={xAxis:[],yAxis:[]};return n.polar?i(n.axes,function(e){var i=e.isXAxis,s=e.center,o=t.chartX-s[0]-n.plotLeft,u=t.chartY-s[1]-n.plotTop;r[i?"xAxis":"yAxis"].push({axis:e,value:e.translate(i?Math.PI-Math.atan2(o,u):Math.sqrt(Math.pow(o,2)+Math.pow(u,2)),!0)})}):r=e.call(this,t),r})})(Highcharts);