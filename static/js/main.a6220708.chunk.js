(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),s=(n(15),n(8)),i=n(4),l=n(5),u=n(7),d=n(6),m=n(9),h=n(1),p=(n(16),function(e){return e<10?"0".concat(e):e}),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).toggleFullScreen=function(){var e=n.state.fullscreen;e?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen(),n.setState({fullscreen:!e})},n.resetTimer=function(){n.setState({t:0,paused:!0})},n.switchMode=function(e){n.setState({mode:e||("stopwatch"===n.state.mode?"countdown":"stopwatch")})},n.pauseTimer=function(){n.setState({paused:!n.state.paused,editing:!1})},n.toggleEditing=function(){var e=n.state.editing;n.setState({editing:e?null:"second"})},n.handleKeyDown=function(e){switch(e.key){case"F":case"f":n.toggleFullScreen();break;case"R":case"r":n.resetTimer();break;case"S":case"s":n.switchMode();break;case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":n.handleCursorMove(e.key.toLowerCase().replace("arrow",""));break;case"Enter":n.toggleEditing();break;case" ":n.pauseTimer()}},n.state={t:0,paused:!0,mode:"stopwatch",fullscreen:!1,adjusting:!1,editing:null,showCursor:!1},n.timer=null,n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){e.tick()},500),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillMount",value:function(){clearInterval(this.timer),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"tick",value:function(){var e=this.state,t=e.mode,n=e.paused,a=e.showCursor;e.editing&&this.setState({showCursor:!a}),n||this.setState(function(e){var n=e.t+.5*("countdown"===t?-1:1);return n<=0?{t:0,paused:!0}:{t:n}})}},{key:"handleCursorMove",value:function(e){var t=Object(s.a)({},this.state);switch(t.paused=!0,e){case"up":case"down":t.editing||(t.editing="second"),t.t+=("up"===e?1:-1)*("second"===t.editing?1:60),t.t<0&&(t.t=0);break;case"left":t.editing="minute";break;case"right":t.editing="second"}this.setState(t)}},{key:"render",value:function(){var e=this,t=this.state,n=t.t,a=t.paused,c=t.editing,r=t.mode,s=t.showCursor,i=t.fullscreen,l=parseInt(n%60),u=parseInt((n-l)/60);return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:Object(h.a)("clock",{"show-cursor":s}),onDoubleClick:function(){return e.toggleFullScreen()}},o.a.createElement("span",{className:Object(h.a)("time minute",{editing:"minute"===c})},p(u)),":",o.a.createElement("span",{className:Object(h.a)("time second",{editing:"second"===c})},p(l))),o.a.createElement("ul",{className:"tips"},o.a.createElement("li",null,o.a.createElement("button",{onClick:this.toggleFullScreen},"F"),"-",o.a.createElement("span",{className:"tip"},i?"exit":"enter"," fullscreen")),o.a.createElement("li",null,o.a.createElement("button",{onClick:function(){return e.handleCursorMove("left")}},"\u2190"),o.a.createElement("button",{onClick:function(){return e.handleCursorMove("right")}},"\u2192"),o.a.createElement("button",{onClick:function(){return e.handleCursorMove("up")}},"\u2191"),o.a.createElement("button",{onClick:function(){return e.handleCursorMove("down")}},"\u2193"),"-",o.a.createElement("span",{className:"tip"},"edit timer")),o.a.createElement("li",null,o.a.createElement("button",{onClick:this.resetTimer},"R"),"-",o.a.createElement("span",{className:"tip"},"reset timer")),o.a.createElement("li",null,o.a.createElement("button",{onClick:this.switchMode},"S"),"-","countdown"===r?o.a.createElement("span",{className:"tip"},o.a.createElement("span",null,"countdown \u2713")," or ",o.a.createElement("button",{onClick:function(){return e.switchMode("stopwatch")}},"stopwatch")):o.a.createElement("span",{className:"tip"},o.a.createElement("button",{onClick:function(){return e.switchMode("countdown")}},"countdown")," or ",o.a.createElement("span",null,"stopwatch \u2713"))),o.a.createElement("li",null,o.a.createElement("button",{onClick:this.pauseTimer},"Space"),"-",o.a.createElement("span",{className:"tip"},a?"start":"pause"," timer"))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.a6220708.chunk.js.map