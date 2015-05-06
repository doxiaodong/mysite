/**
 * @license Highcharts JS v3.0.6 (2013-10-04)
 * MooTools adapter
 *
 * (c) 2010-2013 Torstein Hønsi
 *
 * License: www.highcharts.com/license
 */

(function(){var e=window,t=document,n=e.MooTools.version.substring(0,3),r=n==="1.2"||n==="1.1",i=r||n==="1.3",s=e.$extend||function(){return Object.append.apply(Object,arguments)};e.HighchartsAdapter={init:function(e){var t=Fx.prototype,n=t.start,r=Fx.Morph.prototype,i=r.compute;t.start=function(t,r){var i=this,s=i.element;return t.d&&(i.paths=e.init(s,s.d,i.toD)),n.apply(i,arguments),this},r.compute=function(t,n,r){var s=this,o=s.paths;if(!o)return i.apply(s,arguments);s.element.attr("d",e.step(o[0],o[1],r,s.toD))}},adapterRun:function(e,t){if(t==="width"||t==="height")return parseInt($(e).getStyle(t),10)},getScript:function(e,n){var r=t.getElementsByTagName("head")[0],i=t.createElement("script");i.type="text/javascript",i.src=e,i.onload=n,r.appendChild(i)},animate:function(t,n,r){var i=t.attr,o,u=r&&r.complete;i&&!t.setStyle&&(t.getStyle=t.attr,t.setStyle=function(){var e=arguments;this.attr.call(this,e[0],e[1][0])},t.$family=function(){return!0}),e.HighchartsAdapter.stop(t),o=new Fx.Morph(i?t:$(t),s({transition:Fx.Transitions.Quad.easeInOut},r)),i&&(o.element=t),n.d&&(o.toD=n.d),u&&o.addEvent("complete",u),o.start(n),t.fx=o},each:function(e,t){return r?$each(e,t):Array.each(e,t)},map:function(e,t){return e.map(t)},grep:function(e,t){return e.filter(t)},inArray:function(e,t,n){return t?t.indexOf(e,n):-1},offset:function(e){var t=e.getPosition();return{left:t.x,top:t.y}},extendWithEvents:function(e){e.addEvent||(e.nodeName?e=$(e):s(e,new Events))},addEvent:function(t,n,r){typeof n=="string"&&(n==="unload"&&(n="beforeunload"),e.HighchartsAdapter.extendWithEvents(t),t.addEvent(n,r))},removeEvent:function(e,t,n){if(typeof e=="string")return;e.addEvent&&(t?(t==="unload"&&(t="beforeunload"),n?e.removeEvent(t,n):e.removeEvents&&e.removeEvents(t)):e.removeEvents())},fireEvent:function(e,t,n,r){var o={type:t,target:e};t=i?new Event(o):new DOMEvent(o),t=s(t,n),!t.target&&t.event&&(t.target=t.event.target),t.preventDefault=function(){r=null},e.fireEvent&&e.fireEvent(t.type,t),r&&r(t)},washMouseEvent:function(e){return e.page&&(e.pageX=e.page.x,e.pageY=e.page.y),e},stop:function(e){e.fx&&e.fx.cancel()}}})();