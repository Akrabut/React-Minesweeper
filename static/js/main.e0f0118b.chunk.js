(this["webpackJsonpreact-minesweeper"]=this["webpackJsonpreact-minesweeper"]||[]).push([[0],{186:function(e,t,a){e.exports=a(323)},321:function(e,t,a){},323:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),i=a.n(l),o=a(35),c=a(32),s=a(25),u=a(54),m=function(e){var t=e.style,a=e.value;return r.a.createElement("div",{className:"revealed-tile",style:Object(c.a)({},t,{fontSize:"150%"})},a)},g=a(333),f=function(e){var t=e.style,a=e.handleClick;return r.a.createElement(g.a,{className:"flagged-tile",raised:!0,style:t,onClick:a},r.a.createElement(u.a,{style:{lineHeight:"40px"},size:"large",fitted:!0,color:"green",name:"font awesome flag"}))},d=function(e){var t=e.style,a=e.handleClick;return r.a.createElement(g.a,{className:"superman-tile",raised:!0,style:t,onClick:a},r.a.createElement(u.a,{style:{lineHeight:"40px"},size:"large",fitted:!0,name:"exclamation",color:"red"}))},h=function(e){var t=e.style,a=e.handleClick;return r.a.createElement(g.a,{className:"hidden-tile",raised:!0,style:t,onClick:a})},E=function(e){var t=e.x,a=e.y,l=e.value,i=e.isFlagged,o=e.isRevealed,g=e.superman,E=e.makePlay,v=e.setFlag,p=e.endGame,b=Object(n.useState)(o),y=Object(s.a)(b,2),S=y[0],w=y[1],O=Object(n.useState)(i),M=Object(s.a)(O,2),F=M[0],j=M[1];Object(n.useEffect)((function(){w(o)}),[o]),Object(n.useEffect)((function(){j(i)}),[i]);var N={backgroundColor:"#B0B0B0",color:"black",margin:0,height:"100%"},A=function(e){if(!F||e.shiftKey){if(e.shiftKey)return v([t,a],l,F);w(!0),"M"===l&&setTimeout((function(){return p()}),0),E([t,a],l)}};return S?r.a.createElement(m,{value:"M"===l?r.a.createElement(u.a,{fitted:!0,size:"large",name:"fire",color:"red"}):"E"===l?" ":l,style:function(){switch(l){case 1:return{color:"blue"};case 2:return{color:"green"};case 3:return{color:"red"};default:return{}}}()}):F?r.a.createElement(f,{style:N,handleClick:A}):"M"===l&&g?r.a.createElement(d,{style:N,handleClick:A}):r.a.createElement(h,{style:Object(c.a)({},N,{color:"grey"}),handleClick:A})},v=function(e,t){return t[e[0]]&&t[e[0]][e[1]]},p=function(e,t,a){for(var n=new Set,r=[],l=[e];l.length>0;){var i=l.pop();if(!n.has(JSON.stringify(i))){n.add(JSON.stringify(i));var o=i[0],c=i[1];if(n.add(JSON.stringify(i)),!a.has(JSON.stringify(i)))if(v(i,t)&&"E"===t[o][c])r.push(i),[[o-1,c-1],[o-1,c],[o,c-1],[o+1,c],[o,c+1],[o+1,c+1]].forEach((function(e){return l.push(e)}));else v(i,t)&&Number.isInteger(t[o][c])&&r.push(i)}}return r},b=function(e,t,a){return{type:"INIT_GAME",data:{rows:e,columns:t,mines:a}}},y=function(e){return e?{type:"SUPERMAN_ON"}:{type:"SUPERMAN_OFF"}},S=a(173),w={makePlay:function(e,t,a,n){return"E"===t?{type:"MAKE_PLAY",data:{revealedTiles:p(e,a,n)}}:{type:"MAKE_PLAY",data:{revealedTiles:[e]}}},setFlag:function(e,t){return{type:"SET_FLAG",data:{mineFlagged:"M"===t,coord:e}}},removeFlag:function(e,t){return{type:"REMOVE_FLAG",data:{mineUnflagged:"M"===t,coord:e}}},initGame:b,supermanActions:y},O=Object(o.b)((function(e){return{gameState:e.gameState,superman:e.superman}}),w)((function(e){Object(n.useEffect)((function(){0===e.gameState.remainingMines&&a()}),[e.gameState.remainingMines]);var t=function(t,a){e.makePlay(t,a,e.gameState.board,e.gameState.setFlags)},a=function(){alert("WOW YOU'VE ACTUALLY WON!!!"),e.supermanActions(!1),e.initGame(e.gameState.rows,e.gameState.columns)},l=function(t,a,n){if(n)return e.removeFlag(t,a);0!==e.gameState.remainingFlags?e.setFlag(t,a):alert("Hmm... seems like we are out of flags")},i=function(){alert("You have been exploded!"),e.supermanActions(!1),e.initGame(e.gameState.rows,e.gameState.columns)},o=function(a){var n=a.columnIndex,o=a.rowIndex,c=a.style;return r.a.createElement("div",{className:n%2?o%2===0?"GridItemOdd":"GridItemEven":o%2?"GridItemOdd":"GridItemEven",style:c},r.a.createElement(E,{x:o,y:n,key:"".concat(o,",").concat(n),value:e.gameState.board[o][n],isFlagged:e.gameState.setFlags.has(JSON.stringify([o,n])),isRevealed:e.gameState.revealedTiles.has(JSON.stringify([o,n])),superman:e.superman,makePlay:t,setFlag:l,endGame:i}))};return r.a.createElement(S.a,{className:"Grid",columnCount:e.gameState.columns,rowCount:e.gameState.rows,columnWidth:40,rowHeight:40,height:Math.max(805,window.document.body.clientHeight/2),width:Math.max(Math.min(40*e.gameState.columns+5,window.document.body.clientWidth/1.9),300)},o)})),M=a(335),F=a(334),j=a(336),N={color:"inherit"},A={supermanActions:y},k=Object(o.b)((function(e){return{superman:e.superman}}),A)((function(e){return r.a.createElement(j.a.Item,null,r.a.createElement(M.a,{className:"superman-button",toggle:!0,active:e.superman,style:{backgroundColor:"white",color:"#21ba45"},onClick:function(){return e.supermanActions(!e.superman)}},r.a.createElement("p",{style:N},"Superman",r.a.createElement(u.a,{name:"superpowers",style:N}))))})),C=a(331),G={color:"white"},I={color:"inherit"},x={initGame:b,supermanActions:y},T=Object(o.b)((function(e){return{gameState:e.gameState,superman:e.superman}}),x)((function(e){var t=Object(n.useState)(e.gameState.rows||""),a=Object(s.a)(t,2),l=a[0],i=a[1],o=Object(n.useState)(e.gameState.columns||""),c=Object(s.a)(o,2),m=c[0],g=c[1],f=Object(n.useState)(e.gameState.numOfMines||""),d=Object(s.a)(f,2),h=d[0],E=d[1];Object(n.useEffect)((function(){i(e.gameState.rows)}),[e.gameState.rows]),Object(n.useEffect)((function(){g(e.gameState.columns)}),[e.gameState.columns]),Object(n.useEffect)((function(){E(e.gameState.numOfMines)}),[e.gameState.numOfMines]),Object(n.useEffect)((function(){var t=new Map;t.set("flags",e.gameState.remainingFlags),e.setFlagMap(t)}),[e.gameState.remainingFlags]);var v=function(e,t){e.target.value<=300&&t(e.target.value)};return r.a.createElement(j.a.Item,{style:G},r.a.createElement("p",{style:{fontWeight:"bolder",color:"#21ba45"}},"New game"),r.a.createElement(C.a,{className:"new-game-form"},r.a.createElement(C.a.Field,null,r.a.createElement("label",{style:I},"Rows"),r.a.createElement("input",{id:"row-input",placeholder:"5-300",value:l,onChange:function(e){return v(e,i)}})),r.a.createElement(C.a.Field,null,r.a.createElement("label",{style:I},"Columns"),r.a.createElement("input",{id:"column-input",placeholder:"5-300",value:m,onChange:function(e){return v(e,g)}})),r.a.createElement(C.a.Field,null,r.a.createElement("label",{style:I},"Mines"),r.a.createElement("input",{id:"mine-input",placeholder:"5-300",value:h,onChange:function(e){e.target.value<.8*Math.floor(l*m)&&E(e.target.value)}}))),r.a.createElement(M.a,{id:"restart-button",type:"submit",onClick:function(t){l<5&&i(5),m<5&&g(5),h>Math.floor(l*m*.8)&&E(Math.floor(l*m/8)),e.supermanActions(!1),e.initGame(parseInt(l||5),parseInt(m||5),parseInt(h||3))},icon:!0,labelPosition:"right",style:{backgroundColor:"GhostWhite",color:"black",marginTop:"1.5em"}},"Restart",r.a.createElement(u.a,{name:"game"})))})),_=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(new Map),o=Object(s.a)(i,2),c=o[0],m=o[1];return r.a.createElement("aside",null,r.a.createElement(M.a,{className:"options-button",toggle:!0,active:a,onClick:function(){return l(!a)},style:{backgroundColor:"white",color:"#21ba45"}},r.a.createElement("h3",null,"Options")),r.a.createElement("h3",{className:"remaining-flags",style:{color:"#21ba45"}},r.a.createElement(u.a,{size:"large",fitted:!0,name:"font awesome flag"})," ","x ".concat(c.get("flags"))),r.a.createElement(F.a,{className:"bar",as:j.a,animation:"overlay",onHide:function(){return l(!1)},visible:a,inverted:!0,vertical:!0,width:"thin"},r.a.createElement(k,null),r.a.createElement(T,{setFlagMap:m})))},J=(a(321),{textAlign:"center",width:"80%",marginLeft:"auto",marginRight:"auto"});var P=function(){return r.a.createElement("main",{style:J},r.a.createElement(_,null),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(59);function L(e){return Math.floor(Math.random()*Math.floor(e))}var W=function(e,t,a){var n=0;return[[t-1,a-1],[t-1,a],[t,a-1],[t+1,a],[t,a+1],[t+1,a+1]].forEach((function(t){e[t[0]]&&e[t[0]][t[1]]&&"M"===e[t[0]][t[1]]&&n++})),n>0?n:"E"},U=function(e,t){return Math.floor(e*t/8)},H=U(20,20),Y=function(e,t,a){for(var n=new Array(e||20),r=0;r<e;r++)n[r]=new Array(t||20);var l=function(e,t){for(var a=new Set,n=0;0!==t;){var r=L(e.length),l=L(e[0].length);if(e[r][l]||(e[r][l]="M",a.add(JSON.stringify([r,l])),t--),n>e.length*e[0].length*1e6)throw alert("An extremely uncommon stastical issue occured"),new Error;n++}return a}(n,a||H);return function(e){for(var t=0;t<e.length;t++)for(var a=0;a<e[0].length;a++)"M"!==e[t][a]&&(e[t][a]=W(e,t,a))}(n),[n,l]},z=Y(20,20,H),B={rows:20,columns:20,numOfMines:H,remainingFlags:H,remainingMines:H,board:z[0],mines:z[1],setFlags:new Set,revealedTiles:new Set},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAKE_PLAY":var a=new Set(e.revealedTiles);return t.data.revealedTiles.forEach((function(e){return a.add(JSON.stringify(e))})),Object(c.a)({},e,{revealedTiles:a});case"INIT_GAME":var n=t.data.mines||U(t.data.rows,t.data.columns),r=Y(t.data.rows,t.data.columns,n);return Object(c.a)({},B,{rows:t.data.rows,columns:t.data.columns,numOfMines:n,remainingFlags:n,remainingMines:n,board:r[0],mines:r[1]});case"SET_FLAG":var l=e.remainingMines,i=new Set(e.setFlags);return i.add(JSON.stringify(t.data.coord)),t.data.mineFlagged&&l--,console.log(e.remainingFlags),Object(c.a)({},e,{remainingFlags:e.remainingFlags-1,remainingMines:l,setFlags:i});case"REMOVE_FLAG":var o=new Set(e.setFlags);o.delete(JSON.stringify(t.data.coord));var s=e.remainingMines;return t.data.mineUnflagged&&s++,Object(c.a)({},e,{remainingFlags:e.remainingFlags+1,remainingMines:s,setFlags:o});default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUPERMAN_ON":return!0;case"SUPERMAN_OFF":return!1;default:return e}},$=Object(R.b)({gameState:K,superman:V}),q=Object(R.c)($);a(322);i.a.render(r.a.createElement(o.a,{store:q},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[186,1,2]]]);
//# sourceMappingURL=main.e0f0118b.chunk.js.map