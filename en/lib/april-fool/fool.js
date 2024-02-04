"use strict";function findNearestBlock(e){for(var t=!0;t;){var r=e,t=!1;if(null===r||r===document.body)return null;var n=getComputedStyle(r);if("svg"!==r.tagName&&"inline"!==n.display)return r;e=r.parentNode,t=!0,n=void 0}}function bootstrap(){function e(){var e=1e4,t=Matter.Bodies.rectangle(window.innerWidth/2+window.scrollX,-5e3+window.scrollY,window.innerWidth+2e4,e,{isStatic:!0,restitution:.8}),r=Matter.Bodies.rectangle(window.innerWidth/2+window.scrollX,window.innerHeight+5e3+window.scrollY,window.innerWidth+2e4,e,{isStatic:!0,restitution:.8}),n=Matter.Bodies.rectangle(-5e3+window.scrollX,window.innerHeight/2+window.scrollY,e,window.innerHeight+2e4,{isStatic:!0,restitution:.8}),e=Matter.Bodies.rectangle(window.innerWidth+5e3+window.scrollX,window.innerHeight/2+window.scrollY,e,window.innerHeight+2e4,{isStatic:!0,restitution:.8});E&&Matter.Composite.remove(engine.world,E),E=Matter.Composite.create(),Matter.Composite.add(E,[t,r,n,e]),Matter.Composite.add(engine.world,E)}engine=Matter.Engine.create({gravity:{x:0,y:-.1}});var A=new Map,E=null,t=(e(),window.addEventListener("resize",e),document.createElement("div")),L=(t.style.position="fixed",t.style.left=0,t.style.top=0,t.style.width="100vw",t.style.height="100vh",t.style["pointer-events"]="none",document.body.appendChild(t),performance.now()),H=window.scrollX,I=window.scrollY,P=window.screenX,W=window.screenY,q=L;requestAnimationFrame(function e(t){var r=Math.min(t-L,100),n=(L=t,window.scrollX),i=window.scrollY;if(q+100<t){E&&Matter.Composite.translate(E,{x:n-H,y:i-I}),H=n,I=i;var o=window.screenX-P,a=window.screenY-W,l=!0,t=!1,d=void 0;try{for(var s,w=engine.world.bodies[Symbol.iterator]();!(l=(s=w.next()).done);l=!0)(f=s.value)!==E&&Matter.Body.translate(f,{x:-o,y:-a})}catch(e){t=!0,d=e}finally{try{!l&&w.return&&w.return()}finally{if(t)throw d}}P=window.screenX,W=window.screenY}Matter.Engine.update(engine,r);var t=Matter.Composite.allBodies(engine.world),c=!0,d=!1,r=void 0;try{for(var y,u=t[Symbol.iterator]();!(c=(y=u.next()).done);c=!0){var f,v,g,m,p,h,M,x,b,S,B,C,X=(f=y.value).id,Y=A.get(X);Y&&(g=(v=_slicedToArray(Y,3))[0],m=v[1],p=v[2],g&&g.offsetParent?(M=(h=g.offsetParent.getBoundingClientRect()).top,x=h.left+g.offsetLeft+m/2,b=M+g.offsetTop+p/2,S=f.position.x-n,B=f.position.y-i,C=f.angle,g.style.transform="translate("+(S-x)+"px, "+(B-b)+"px) rotate("+C+"rad)"):(A.delete(X),Matter.Composite.remove(engine.world,f)))}}catch(e){d=!0,r=e}finally{try{!c&&u.return&&u.return()}finally{if(d)throw r}}requestAnimationFrame(e)}),document.body.addEventListener("click",function(e){var t=findNearestBlock(e.target);if(t.classList.contains("meow-floating"))return!0;if(t.querySelector(".meow-floating"))return!0;e.preventDefault(),e.stopImmediatePropagation();var e=t.getBoundingClientRect(),r=e.top,n=e.left,i=e.width,e=e.height;if(600<e)return!0;var n=window.scrollX+n,r=window.scrollY+r,n=Matter.Bodies.rectangle(n+i/2,r+e/2,i,e,{restitution:.8}),r=n.id,o=2*Math.random()-1,a=2*Math.random()-1,l=.02*Math.random()-.01,o=(Matter.Body.setVelocity(n,{x:o,y:a}),Matter.Body.setAngularVelocity(n,l),t.style.setProperty("--real-width",i+"px"),t.style.setProperty("--real-height",e+"px"),t.classList.add("meow-floating"),t.querySelectorAll("a[data-toggle=popover]")),d=!0,a=!1,l=void 0;try{for(var s,w=o[Symbol.iterator]();!(d=(s=w.next()).done);d=!0)s.value.addEventListener("mouseover",function(e){e.stopImmediatePropagation()},!0)}catch(e){a=!0,l=e}finally{try{!d&&w.return&&w.return()}finally{if(a)throw l}}var o=t.querySelectorAll(".popover"),c=!0,a=!1,l=void 0;try{for(var y,u=o[Symbol.iterator]();!(c=(y=u.next()).done);c=!0)y.value.remove()}catch(e){a=!0,l=e}finally{try{!c&&u.return&&u.return()}finally{if(a)throw l}}return A.set(r,[t,i,e]),Matter.Composite.add(engine.world,n),!1},!0)}var _slicedToArray=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e)){var r=t,n=[],i=!0,t=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(i=(a=l.next()).done)&&(n.push(a.value),!r||n.length!==r);i=!0);}catch(e){t=!0,o=e}finally{try{!i&&l.return&&l.return()}finally{if(t)throw o}}return n}throw new TypeError("Invalid attempt to destructure non-iterable instance")},Matter=window.Matter,engine=null;window.addEventListener("devicemotion",function(e){if(engine){if(e.accelerationIncludingGravity){var t=e.accelerationIncludingGravity.x,r=e.accelerationIncludingGravity.y;if(null===t||null===r)return;t=Matter.Vector.create(2e-4*t,2e-4*-r),r=Matter.Vector.magnitude(t),t=Matter.Vector.normalise(t);engine.gravity.x=t.x,engine.gravity.y=t.y,engine.gravity.scale=r}if(e.rotationRate){var n=e.rotationRate.gamma;if(null!==n){var i=window.innerWidth/2+window.scrollX,o=window.innerHeight/2+window.scrollY,a=!0,t=!1,r=void 0;try{for(var l,d=engine.world.bodies[Symbol.iterator]();!(a=(l=d.next()).done);a=!0){var s=l.value;Matter.Body.rotate(s,2e-4*n,{x:i,y:o})}}catch(e){t=!0,r=e}finally{try{!a&&d.return&&d.return()}finally{if(t)throw r}}}}}}),document.body.onload=bootstrap;