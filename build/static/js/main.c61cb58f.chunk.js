(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),i=n.n(c),o=n(9),u=n(2),l=n(3),s=n(5),f=n(4),h=n(1),m=function(e){return a.a.createElement("button",{className:e.highlightWinSquares,onClick:e.updateStateOnClick},e.value)};n(7);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(h.a)(e);if(t){var a=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var g=function(e){Object(s.a)(n,e);var t=v(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).highlightSquares=function(t){return e.props.winningSquares.length>0&&e.props.winningSquares.indexOf(t)>-1?"square winningSquares":"square"},e.generateRow=function(t,n){for(var r=[];t<n;t++)r.push(e.renderSquare(t));return r},e.generateBoard=function(t,n){for(var r=[],c=0;c<t*n;c++)c%t===0&&r.push(a.a.createElement("div",{className:"board-row",key:c},e.generateRow(c,c+t)));return r},e}return Object(l.a)(n,[{key:"renderSquare",value:function(e){var t=this,n=this.highlightSquares(e);return a.a.createElement(m,{key:e,highlightWinSquares:n,value:this.props.squares[e],updateStateOnClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",null,this.generateBoard(3,3)))}}]),n}(a.a.Component);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(h.a)(e);if(t){var a=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(e){Object(s.a)(n,e);var t=p(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).initialize=function(){return{history:[{squares:Array(9).fill(null),location:{col:0,row:0},active:!1,moveNumber:0}],xIsNext:!0,stepNumber:0,toggle:!1}},e.state=e.initialize(),e.reset=function(){e.setState(e.initialize())},e.jumpTo=function(t){var n=e.state.history;n.forEach(function(e){e.active=!1}),n[t].active=!0,e.setState({history:n,stepNumber:t,xIsNext:t%2===0})},e.handleClick=function(t){var n=e.state.history.slice(0,e.state.stepNumber+1),r=n[n.length-1].squares.slice(),a=Math.floor(t%3)+1,c=Math.floor(t/3)+1;e.calculateWinner(r)||r[t]||(r[t]=e.state.xIsNext?"X":"O",e.setState(function(e){return{history:n.concat([{squares:r,location:{col:a,row:c},active:!1,moveNumber:n.length}]),xIsNext:!e.xIsNext,stepNumber:n.length}}))},e.toggleMoves=function(){var t=!e.state.toggle;e.setState({toggle:t})},e.calculateWinner=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(o.a)(t[n],3),a=r[0],c=r[1],i=r[2];if(e[a]&&e[a]===e[c]&&e[a]===e[i])return{status:"win",win:{player:e[a],squares:[a,c,i]}};if(0===e.filter(function(e){return null===e}).length)return{status:"draw",win:{}}}return null},e}return Object(l.a)(n,[{key:"render",value:function(){var e,t=this,n=this.state.history,r=n[this.state.stepNumber],c=this.calculateWinner(r.squares),i=c&&c.status?c.status:null,o=n.map(function(e,n){var r=n?"Go to move #"+n:"Go to game start",c="";return c=e.active?"active":"normal",a.a.createElement("li",{key:n},a.a.createElement("button",{className:c,key:"".concat(e.location.col,"_").concat(e.location.row),onClick:function(){return t.jumpTo(n)}},"".concat(r," (").concat(e.location.col,", ").concat(e.location.row,")")))});return o.sort(function(e,n){return t.state.toggle?n.key-e.key:e.key-n.key}),e="win"===i?"Winner: ".concat(c.win.player):"Next player: "+(this.state.xIsNext?"X":"O"),a.a.createElement("div",{className:"game"},"draw"===i?a.a.createElement("div",{className:"draw"},a.a.createElement("h2",null,"Draw!"),a.a.createElement("button",{onClick:function(){return t.reset()}},"Play again")):a.a.createElement("div",{className:"game-board"},a.a.createElement(g,{squares:r.squares,winningSquares:"win"===i?c.win.squares:[],onClick:function(e,n,r){return t.handleClick(e,n,r)}}),"win"===i?a.a.createElement("div",{className:"win"},a.a.createElement("h2",null,'"'.concat(c.win.player,'" is winner!')),a.a.createElement("button",{onClick:function(){return t.reset()}},"Play again")):a.a.createElement("div",{className:"reset"},a.a.createElement("button",{onClick:function(){return t.reset()}},"Reset game"))),a.a.createElement("div",{className:"game-info"},a.a.createElement("div",null,e),n.length>1?a.a.createElement("button",{onClick:function(){return t.toggleMoves()}},"Toggle moves"):"",a.a.createElement("ol",null,o)))}}]),n}(a.a.Component);i.a.render(a.a.createElement(y,null),document.getElementById("root"))},7:function(e,t,n){}},[[10,2,1]]]);
//# sourceMappingURL=main.c61cb58f.chunk.js.map