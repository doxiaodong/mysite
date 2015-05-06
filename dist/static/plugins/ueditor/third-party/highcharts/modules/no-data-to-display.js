/*
 Highcharts JS v3.0.6 (2013-10-04)
 Plugin for displaying a message when there is no data visible in chart.

 (c) 2010-2013 Highsoft AS
 Author: Øystein Moseng

 License: www.highcharts.com/license
*/

(function(e){function t(){return!!this.points.length}function n(){this.hasData()?this.hideNoData():this.showNoData()}var r=e.seriesTypes,i=e.Chart.prototype,s=e.getOptions(),o=e.extend;o(s.lang,{noData:"No data to display"}),s.noData={position:{x:0,y:0,align:"center",verticalAlign:"middle"},attr:{},style:{fontWeight:"bold",fontSize:"12px",color:"#60606a"}},r.pie.prototype.hasData=t,r.gauge&&(r.gauge.prototype.hasData=t),r.waterfall&&(r.waterfall.prototype.hasData=t),e.Series.prototype.hasData=function(){return this.dataMax!==void 0&&this.dataMin!==void 0},i.showNoData=function(e){var t=this.options,e=e||t.lang.noData,t=t.noData;this.noDataLabel||(this.noDataLabel=this.renderer.label(e,0,0,null,null,null,null,null,"no-data").attr(t.attr).css(t.style).add(),this.noDataLabel.align(o(this.noDataLabel.getBBox(),t.position),!1,"plotBox"))},i.hideNoData=function(){this.noDataLabel&&(this.noDataLabel=this.noDataLabel.destroy())},i.hasData=function(){for(var e=this.series,t=e.length;t--;)if(e[t].hasData()&&!e[t].options.isInternal)return!0;return!1},i.callbacks.push(function(t){e.addEvent(t,"load",n),e.addEvent(t,"redraw",n)})})(Highcharts);