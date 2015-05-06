(function(e){"use strict";function c(e,t,n){var r=[Math.round(e[0]+(t[0]-e[0])*n),Math.round(e[1]+(t[1]-e[1])*n),Math.round(e[2]+(t[2]-e[2])*n),e[3]+(t[3]-e[3])*n];return"rgba("+r.join(",")+")"}var t=function(){},n=e.getOptions(),r=e.each,i=e.extend,s=e.wrap,o=e.Chart,u=e.seriesTypes,a=u.pie,f=u.column,l=HighchartsAdapter.fireEvent;i(n.lang,{drillUpText:"◁ Back to {series.name}"}),n.drilldown={activeAxisLabelStyle:{cursor:"pointer",color:"#039",fontWeight:"bold",textDecoration:"underline"},activeDataLabelStyle:{cursor:"pointer",color:"#039",fontWeight:"bold",textDecoration:"underline"},animation:{duration:500},drillUpButton:{position:{align:"right",x:-10,y:10}}},e.SVGRenderer.prototype.Element.prototype.fadeIn=function(){this.attr({opacity:.1,visibility:"visible"}).animate({opacity:1},{duration:250})},o.prototype.drilldownLevels=[],o.prototype.addSeriesAsDrilldown=function(e,n){var r=e.series,s=r.xAxis,o=r.yAxis,u,a=e.color||r.color,f,l;n=i({color:a},n),f=HighchartsAdapter.inArray(this,r.points),l={seriesOptions:r.userOptions,shapeArgs:e.shapeArgs,bBox:e.graphic.getBBox(),color:a,newSeries:n,pointOptions:r.options.data[f],pointIndex:f,oldExtremes:{xMin:s&&s.userMin,xMax:s&&s.userMax,yMin:o&&o.userMin,yMax:o&&o.userMax}},this.drilldownLevels.push(l),u=this.addSeries(n,!1),s&&(s.oldPos=s.pos,s.userMin=s.userMax=null,o.userMin=o.userMax=null),r.type===u.type&&(u.animate=u.animateDrilldown||t,u.options.animation=!0),r.remove(!1),this.redraw(),this.showDrillUpButton()},o.prototype.getDrilldownBackText=function(){var e=this.drilldownLevels[this.drilldownLevels.length-1];return this.options.lang.drillUpText.replace("{series.name}",e.seriesOptions.name)},o.prototype.showDrillUpButton=function(){var e=this,t=this.getDrilldownBackText(),n=e.options.drilldown.drillUpButton;this.drillUpButton?this.drillUpButton.attr({text:t}).align():this.drillUpButton=this.renderer.button(t,null,null,function(){e.drillUp()}).attr(i({align:n.position.align,zIndex:9},n.theme)).add().align(n.position,!1,n.relativeTo||"plotBox")},o.prototype.drillUp=function(){var e=this,n=e.drilldownLevels.pop(),r=e.series[0],i=n.oldExtremes,s=e.addSeries(n.seriesOptions,!1);l(e,"drillup",{seriesOptions:n.seriesOptions}),s.type===r.type&&(s.drilldownLevel=n,s.animate=s.animateDrillupTo||t,s.options.animation=!0,r.animateDrillupFrom&&r.animateDrillupFrom(n)),r.remove(!1),s.xAxis&&(s.xAxis.setExtremes(i.xMin,i.xMax,!1),s.yAxis.setExtremes(i.yMin,i.yMax,!1)),this.redraw(),this.drilldownLevels.length===0?this.drillUpButton=this.drillUpButton.destroy():this.drillUpButton.attr({text:this.getDrilldownBackText()}).align()},a.prototype.animateDrilldown=function(t){var n=this.chart.drilldownLevels[this.chart.drilldownLevels.length-1],i=this.chart.options.drilldown.animation,s=n.shapeArgs,o=s.start,u=s.end-o,a=u/this.points.length,f=e.Color(n.color).rgba;t||r(this.points,function(t,n){var r=e.Color(t.color).rgba;t.graphic.attr(e.merge(s,{start:o+n*a,end:o+(n+1)*a})).animate(t.shapeArgs,e.merge(i,{step:function(e,t){t.prop==="start"&&this.attr({fill:c(f,r,t.pos)})}}))})},a.prototype.animateDrillupTo=f.prototype.animateDrillupTo=function(e){if(!e){var n=this,i=n.drilldownLevel;r(this.points,function(e){e.graphic.hide(),e.dataLabel&&e.dataLabel.hide(),e.connector&&e.connector.hide()}),setTimeout(function(){r(n.points,function(e,t){var n=t===i.pointIndex?"show":"fadeIn";e.graphic[n](),e.dataLabel&&e.dataLabel[n](),e.connector&&e.connector[n]()})},Math.max(this.chart.options.drilldown.animation.duration-50,0)),this.animate=t}},f.prototype.animateDrilldown=function(e){var t=this.chart.drilldownLevels[this.chart.drilldownLevels.length-1].shapeArgs,n=this.chart.options.drilldown.animation;e||(t.x+=this.xAxis.oldPos-this.xAxis.pos,r(this.points,function(e){e.graphic.attr(t).animate(e.shapeArgs,n)}))},f.prototype.animateDrillupFrom=a.prototype.animateDrillupFrom=function(t){var n=this.chart.options.drilldown.animation,i=this.group;delete this.group,r(this.points,function(r){var s=r.graphic,o=e.Color(r.color).rgba;delete r.graphic,s.animate(t.shapeArgs,e.merge(n,{step:function(n,r){r.prop==="start"&&this.attr({fill:c(o,e.Color(t.color).rgba,r.pos)})},complete:function(){s.destroy(),i&&(i=i.destroy())}}))})},e.Point.prototype.doDrilldown=function(){var e=this.series,t=e.chart,n=t.options.drilldown,r=n.series.length,i;while(r--&&!i)n.series[r].id===this.drilldown&&(i=n.series[r]);l(t,"drilldown",{point:this,seriesOptions:i}),i&&t.addSeriesAsDrilldown(this,i)},s(e.Point.prototype,"init",function(t,n,r,i){var s=t.call(this,n,r,i),o=n.chart,u=n.xAxis&&n.xAxis.ticks[i],a=u&&u.label;return s.drilldown?(e.addEvent(s,"click",function(){s.doDrilldown()}),a&&(a._basicStyle||(a._basicStyle=a.element.getAttribute("style")),a.addClass("highcharts-drilldown-axis-label").css(o.options.drilldown.activeAxisLabelStyle).on("click",function(){s.doDrilldown&&s.doDrilldown()}))):a&&a._basicStyle&&a.element.setAttribute("style",a._basicStyle),s}),s(e.Series.prototype,"drawDataLabels",function(e){var t=this.chart.options.drilldown.activeDataLabelStyle;e.call(this),r(this.points,function(e){e.drilldown&&e.dataLabel&&e.dataLabel.attr({"class":"highcharts-drilldown-data-label"}).css(t).on("click",function(){e.doDrilldown()})})}),f.prototype.supportsDrilldown=!0,a.prototype.supportsDrilldown=!0;var h,p=function(e){e.call(this),r(this.points,function(e){e.drilldown&&e.graphic&&e.graphic.attr({"class":"highcharts-drilldown-point"}).css({cursor:"pointer"})})};for(h in u)u[h].prototype.supportsDrilldown&&s(u[h].prototype,"drawTracker",p)})(Highcharts);