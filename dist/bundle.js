!function(t){var s={};function e(r){if(s[r])return s[r].exports;var o=s[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=s,e.d=function(t,s,r){e.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,s){if(1&s&&(t=e(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var o in t)e.d(r,o,function(s){return t[s]}.bind(null,o));return r},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},e.p="",e(e.s=0)}([function(t,s,e){"use strict";e.r(s);e(1),e(2),e(3),e(4),e(5),e(6),e(7),e(8),e(9),e(10),e(11),e(12),e(13)},function(t,s){},function(t,s){var e={slow:{color:[68,108,179],name:"slow",onEnd:function(t){t.speed=this.oldSpeed},onStart:function(t){this.oldSpeed=t.speed,this.speed=t.speed/2,t.speed=this.speed}},poison:{color:[102,204,26],name:"poison",onTick:function(t){t.dealDamage(1,"poison")}}};e.regen={color:[210,82,127],name:"regen",onTick:function(t){t.health<t.maxHealth&&random()<.2&&t.health++}}},function(t,s){var e={weak:{color:[189,195,199],name:"weak",cash:1,health:35},strong:{color:[108,122,137],radius:.6,name:"strong",cash:1,health:75}};e.fast={color:[61,251,255],name:"fast",cash:2,health:75,speed:2,draw:function(){push(),translate(this.pos.x,this.pos.y),rotate(this.vel.heading()),stroke(0),fill(this.getColor());var t=-.55*ts/3,s=t+.55*ts,e=.8*ts/2;quad(t,-e,0,0,t,e,s,0),pop()}},e.strongFast={color:[30,139,195],name:"strongFast",cash:2,health:135,speed:2,draw:function(){push(),translate(this.pos.x,this.pos.y),rotate(this.vel.heading()),stroke(0),fill(this.getColor());var t=-.8*ts/3,s=t+.8*ts,e=ts/2;quad(t,-e,0,0,t,e,s,0),pop()}},e.medic={color:[192,57,43],radius:.7,name:"medic",cash:4,health:375,immune:["regen"],onTick:function(){for(var t=getInRange(this.pos.x,this.pos.y,2,enemies),s=0;s<t.length;s++)t[s].applyEffect("regen",1)}},e.stronger={color:[52,73,94],radius:.8,name:"stronger",cash:4,health:375},e.faster={color:[249,105,14],name:"faster",cash:4,health:375,resistant:["explosion"],speed:3,draw:function(){push(),translate(this.pos.x,this.pos.y),rotate(this.vel.heading()),stroke(0),fill(this.getColor());var t=-.7*ts/3,s=t+.7*ts,e=.9*ts/2;quad(t,-e,0,0,t,e,s,0),pop()}},e.tank={color:[30,130,76],radius:1,name:"tank",cash:4,health:750,immune:["poison","slow"],resistant:["energy","physical"],weak:["explosion","piercing"],draw:function(){push(),translate(this.pos.x,this.pos.y),rotate(this.vel.heading()),stroke(0),fill(this.getColor());var t=this.radius*ts/2,s=.7*ts/2,e=.15*ts/2,r=.7*ts,o=.2*ts;rect(-t,-s,2*t,2*s,o),fill(149,165,166),rect(0,-e,r,2*e),ellipse(0,0,.2*ts*2,.2*ts*2),pop()}},e.taunt={color:[102,51,153],radius:.8,name:"taunt",sound:"taunt",cash:8,health:1500,immune:["poison","slow"],resistant:["energy","physical"],taunt:!0,draw:function(){push(),translate(this.pos.x,this.pos.y),rotate(this.vel.heading()),stroke(0),fill(this.getColor());var t=this.radius*ts/2;rect(-t,-t,this.radius*ts,this.radius*ts),stroke(232,126,4),noFill(),rect(-.3*ts,-.3*ts,.6*ts,.6*ts),rect(-.2*ts,-.2*ts,.4*ts,.4*ts),pop()}},e.spawner={color:[244,232,66],radius:.7,name:"spawner",cash:10,health:1150,onKilled:function(){if(this.alive){cash+=this.cash,this.kill(),!muteSounds&&sounds.hasOwnProperty(this.sound)&&sounds[this.sound].play();var t=gridPos(this.pos.x,this.pos.y);if(t.equals(exit))return;for(var s=0;s<tempSpawns.length;s++)if(t.equals(tempSpawns[s][0]))return;tempSpawns.push([createVector(t.x,t.y),tempSpawnCount])}}}},function(t,s){},function(t,s){function e(t){return JSON.parse(LZString.decompressFromBase64(t))}var r={};r.loops=e("N4IgJglgzgDgNgQwJ4gFwG10gOYCcFRQgA0O+hJZBRpe1ldFt5NVTbrjnLDPz9/dl14COIoXzGDuo4dPFEAusSxyQUCGACmAdwRwA1pQ3a9h45t36j821PtrHkp6JNXzpN2ZvrL3i6bWAe4+XkGefuG+gR7RIcH+8sqqkmGxuAD2CGAJUS4Sss5FhSUF7Gk+uADCGbgAdlq4lJnZzVk5pC0dIF1trZ3tzTX1jbmxwsn2FX3d03b5MmWLywqrETGVg+vx24lxe3P7UYe9u3k8k2onW0fjxUtrDvcrdtf9tz4Lj1eR6TeHExUU1+m3eAOe3wh8yhwI2MzGnxhXzOfzBINWl1S6IGaLh0NKLyeBMhrmxPX+ZORRPKZNOHwxQJ+ePJuJ21MJVM5MLes0pSO5tIpzMBKVJzLph0lZKlzJlbLlB2lgtZitlSrVGrZEr59ExYq1wwaTRx3TpZpu5veltNFttVrtNvtTsdLqGtSNCIZoppmtV8vV/t9xwDftDwaDqN5EdCIfDgfjYbuusZ/OJ+Ie6Y5qZ9WqFbK5afZJIoeozRczxazhapPM9Ffr5aLparZYLrezLdYtZRiOrHcrXsbbc7A4bNeVUfz/bH/ebo6H04Xff1e21wsXw4Hc57dfpO/3e8PCrjiZj0fhB+PsSvZ4TJ/Oye9XbJcENoxNF5Zro/P6/n+t/4OoBzrAd+h4irCuYqve16xrB56XnBt6np+N67mhiEIWI26HmuU7Lu2BEjgeeF7JuM5ESAOHduBG50ZRJF5mR9GEaxSgpiuUSkQ+bHzuRkGrkxPHEUuvHUROu78VJi40eCDGiSO4nikJSa8RRakCVxKm9hp0nEkpUGTihmF3vBpnITBFlmYJ0HWZZ6FIQ566Pppkage5v4AZ5QHeSBvlgV5PRvsatEuUyhlOeZkXGUejkmTZRn2fFSW4dpg7hQlkksSJ/GyTqulYsptk6exT67txqk5dl855c5BWcW5B4QRlWnFXx1Xqc+RWJZV7UNaCPUlVRHE5plTUdQpNUSeN8ktY1oUliNXURcldlrVZG3RSlGF/jN9Wja1g3pYVbKvu6767ZdgXXT5V23WdIwhXJ+3LWNC2la5m2rV9sVYTt/1xe9fUHetWVhRNekvcDVWzRDFzKOA0DwMgAAiEBNBg6AAAzEDjeO4wT+NE4TJPE2ThPJOTVOkzT1Nk5TBMAMy0yzxPMwATMQnPc1zvOc3jDM48zdOs8QwuiwAjBTKj4+LIvk3LLNSwLMtM6LIuK+Tyu44LYvq6Lms09rWO64b8tqyLxum/r1NmyTVuqzjAAsxAu27rse+7Xse87nt+y7DvYzb+t21Tuvm7bwcq0HEcG1HOuO/HCtJ+HSck6HtOp7HbMp4n2c0xn9OJ97Jf+37vul+70f48baeF6Tuu1/n9dE43aey7nMfEE38ct9LXc97HffVwTg/B8PCcD937d69nqc8wvfNLzzOOL2v/c19P+dC/rgeb9vFuSxvo8zzvlvHzjY/m/Xe8nwfZ9HyPl+n7Pj+T5v6+f8vu8Xy/99Z3/KOigEZ4E0GgTAzNIF6ygTA6BcDYEIPgWLZIiDUFILQRg5BKgoGc0wWgr+i9IEoL1rg9BZCcHkJIdA4hHNKGYNIfg6h2CqF4LIQwthTD0AUNYYg9hvDOHcLoRw+hAiWFCP4SIohzDaEEO/rI9eUiuHiKEXwuhNDlGMJ4VgpRWjNEaPUbopBqiMEGI0UYsxjNTGGMETwqxFixG2OkXI5x8iXGiNodYhx4j1HGOUb41BPj7E2O8U4/xKiLGBM8R4/RoSgleLwZEuJYSEGBNcWk5xijgmGOSbzTJ8SzE5IYYkzxhT3G5KSeEvJ0SSmVO0VkgptTLGxPSQoyhRSnFRLiU0nRXSunANIAAWy0AAF2yAgUZ4D0B1AAK5wDgMQGZcyFmzPmYs1ZKzllLLWZs9ZWyNnbIOfso5eyTm7LOTsi5hzTnJCuec25lzjl3MeQ805LynmvPuZ8lZNznlfI+b8gF/ygXvJBW8sFayfnAvBYC0FfzYUwuhVCiFKg4WIvhUihFqKsWYu+SinFGKCXoqJWikltzIXEuxYS0l+KKUwvJdSqllLaWMppTs+lTKGXMq5ZytF7LWUcoFfyoVwK+UsrFdywV4q2V4qlZKiVwr5VzNFYqlVPK5W8plaq9V2qFUaqmbqnVsqDU0uVWq41RqLUgtNYarV5qVXWrtWay1TqzkOudTal1Lq3W2vdY6pl3rPUeqDSazVga/XhstQG4NvqY1WtDdGn1ibOVRojUmhN0r9WxrDVmuVKac2puza6+NBb02lseXmtNJbU0VsLbWstSri35qbZW65jaW3trreWttnbm09qLZmjt9bB24oHX2sdQ62UIxgOMgAFkQTG99AEmzzkuoBicJ451cU/V+B8b6/w3enH+26D0d3Psel+e7z2Lsve/Q+u6j23ormXSu5dn1+1vou09a6u6fp3TbAB9654ruvZ3X9X6I4AbrqB1dG7dYvvgz7N9Vdf5XxDtB5+IGgNT0w9+/eM9YOJ1QxrdDW98MkaI3HLDH83Ff1XjRlDF6H3Luw2Rs9j7SOAbfsxvDnHqYfo41Btj3G76sa423Fp38hOQbA+raTq6w4Iy0AADwgMM8BEsADsXMJYI1gAgHQdQYAZAgHUYZ87MDcxQdzHTCMABG2BwGt1ILZ2o2gMbswAKweec65xoABBOAMAZ0IDQIzKWIAADGGQ4DzsZt58kOh53sydgAXyAA=="),r.spiral=e("N4IgJglgzgDgNgQwJ4gFwG10gO4LnEAGhzwON3yJMvNKorOsYfrtpqdY5feboF1CWHiACmAWxgAXFMQnTZYyTKryVc5YrVbNq3RoV7DB9UuNnTLQcLYgpAe2yiATlQdPXxdy7eOfXv087QN8PUP9gsICoyIjvIO0uAmtOEx1zRLSjU0yLdJz9POzFeOKkkBSRXNLouJDaoJrYxvrm8ITCptyrIVSihrKsof6R3OrW8ZjugV6qzon5mKbl1q7FiMmNwp6bDk2O8zWMwrGT9YPTI8sZ3cZ9wbbhlaXV16nzh52++6eF4/+CgD8sD2p8bt8Pr8XtC6jCWnDQQNhl85oc/oCMSDhqcgQ8cddKJVbD9HqTnrCKfDKYiya0UcSzrjsYzMXiWVjRttwSIebZedw+YKBcK+CLyrxyvxBOBoPBkAARCCuDDoAAMhHVmo12q1up1OuseqN+uNmsNJotppN5qttutQjtjoNDstrttNrdnt1Hqd7pdvq9Pq9gf9wcdQYDRojYct0cjzrVMfD0oA5s4IGA0JgAIyEXP5vOFgvFotF6y59UAJkI1drNfrdcb9ez5cIAGZ252O92u72e9WW0Jc02Rw2xx2B63qz2Z33O9Pm1P52PRxPl4P0MPl7P+9vF0P62u19Wq4ez5ODwur3Pd2uN1ujyun9f7+eb++70vj8+fxfN2edw/XtX1HUCn3VV8Syg0toJbaVxFEKQEDABAkKzdAADsAFd8EIbDcPwuA8JwojCOIgiSPI0jKLI2iaPoij8GsOjGOo1iqI4li2O4ziGO45i+N49iuKEniRPEkiBOEwSJOkuSxJkyShFkhT5NE9SVKoqTVJ0jTFLUlTtL0gz9N0zTCKM8zTOMszTMs6yrJMpz+OUhy3OcmzRPsjzHNs5zvL8wLPN8gLgvcoLDNcnzwrC/yooimLfJsqViBgVCAAsoHQ+M/UTAAWQgCqKwqSuKsqSo7VU4yTTsqpdcqGtKirtUq80Kxqyrara7VGuKzr+o1bqIM9Ab1Val12va4rTxPWquom7VJpGlrBoW4bhrA2bxsTJb4229bC02n86p2mrTW6o6jpOnK3RSsQAA8ICkLMAHZCBe6VYAQbAMJgewIAwqQspVfNyw7bM2zugAjFMs29YgofsZwwB8VBKwAVnRhGkZR5wAEE4BgdKEDQNtcxAABjew4GB7MsZAZxHFp9GAF8gA=="),r.branch=e("N4IgJglgzgDgNgQwJ4gFwG10gO4LnEAGhzwON3yJMvNKorOsYfrtpqdY5febc95c+3fiwC6hLDxAAXAPbYApgCchawRoFb5S1ZunSdK9VoOjzHI3s4SpFxooC2MGSmJOXbkB9dUfX/z9nX3dggLCgz0iQ7wjQqPiYwMTwhNi0s0pbU35knJEC4SKTTOL9exLcuPyCbNLor0MFY3LCqitKtuIO1rLZZutpPPq6ipTOvvreiZnpufSYkckahtmV+aHqvO2t6qmtYYrRroXGsfWLzYzzq8Wbquu248Ye05NX/abdE0PLAZ+9vwPg8YsCsst9r9JvcTrczrCQfDoRwoWpngC0jtMbtsbikji7giUYCiQ4ScV0ZpURsYci6WtPrS0RCgf9xpowfTumzLqzvjS/vyLpyQJSDuSGUyBVzeaSZmK4ZLiXjUviVUqyer2W9tUs7CdqRdDZCJdKNatpgrEe8eYqObbrfahYzBS1xY8KSyDaajT6TR7zWbdUcvX0sWqI6qkWtw1GLTqE7H43rtA65UH+s6pZm3S6ZV9c3QrenZfns3nA6XRRJwNB4MgACIQVQYdAABkIHa7nZ73b7vYH/b7tiHg7Ho4nvZH45nk7nnen86Xs6nkmX65XbcXm53S+3G4Pq/bu5Pc/3p4vXfPh4P18vp7vN93j/ve7Xr9fL6fZ/f38vX4/CcAL/IdgMAwcwJAo8oNvGsAHNlAgMA0EwABGQh0MwjDsKw3CcPwvDcNsdCAGYCPIsi8Mo8isMo4jsIAJkIJiWOYtjWI49iuNYzD6PQpjCJooS8IEjC+LY0iKKkqjGJw8TRMExThIksTJCwhTlM4nj8IU+TlPU8iNP4uS1MIMjROo2jZMk4ybLYujTNs/SVIMkSTPQAytO4lzrJ09zXOcpSgvo8zsMssLpPw8KHI83ygsCmi9Lcrzku83jHJ8pyAvi3SMos3zqPymSsqSvy3Pikq8u8ozqtq3LYvCwTGrM5yYoqhKKrEGtHEUGQEDABA+pQ9AADsAFd8EIcbJumuApomubZvmmaFuWxbVqWzaNu2lbdvWva1sO2bbC2g7Tv2i6jp2y7zqus7rrui6Toe27Xpe977s+m6Pu+/Bnq+x7AbegHgd+sHHv+8HQaBn6YZB2HzshuGoYR1H4fRsGkeh7G0ZRjHkbWrHcYJnH8dJzHJHJkniap2nrqJsmaaZxmMYZvH2eplmOcRynme5vnOf5v7ea5wWxbp1mRaF6XxYF0G2dl0WJZl46pcVlW5c14XRq1jWld1hXlfV43ycN3WTfNnmdf1m29bts3bYtx3EZrGBBoACygYaYIfX9wPXbdQq84O6rYq8/bIn3u3Q8Pjw7SP/YHGOFwjxP+2TrdU+XIOuPT6CewT+dC57DOS/z+OT2LjtS+r8uWuzsca+w2P+xDzi847lO4+btPx23Juo676Pe6Av2m5z1j+wAFkIGe5/roey/7Kue6Luvx8byv17HFeB537evLztvc8Xwef27s++5rRQAA8IBkFDUI7Bia1gBBsBGmA5AgEaZC91tUIz0AcRauAAOEBGEp5dWIAAIzgihYcsC5DKDAMYVADEACsGCkEoJUAAQTgDAd2CA0AkXQiAAAxnIOA/8GLkOUAoWhqEAC+QA=="),r.branchAlt=e("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"),r.city=e("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="),r.freeway=e("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="),r.walls=e("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="),r.fork=e("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")},function(t,s){},function(t,s){},function(t,s){},function(t,s){var e,r,o,n,a,i,h,l,d,p,u=[],g=[],c=24,A=[],f=.1;function m(t){for(var s=t.pop(),e=0;e<s;e++)for(var r=0;r<t.length;r++)g.push(t[r])}function w(t,s){if(!S(t,s))return!1;for(var e=0;e<A.length;e++){var r=A[e];if(r.x===t&&r.y===s)return!1}return void 0===d||d.x!==t||d.y!==s}function v(){for(;;){var t=createVector(randint(e),randint(r));if(w(t.x,t.y))return t}}function y(t,s){for(var e=0;e<u.length;e++){var r=u[e];if(r.gridPos.x===t&&r.gridPos.y===s)return r}return null}function b(t){var s=[],e=vts(d);s.push(e);var r={};for(r[e]=!0;0!==s.length;)for(var o=s.shift(),n=stv(o),a=neighbors(t,n.x,n.y,!0),i=0;i<a.length;i++){var h=a[i];h in r||(s.push(h),r[h]=!0)}return r}function x(){for(var t=[],s=0;s<e;s++){t[s]=[];for(var o=0;o<r;o++)t[s][o]=S(s,o)}return t}function z(t,s){return void 0===s?p>=t:p>=t&&p<s}function M(){var t=document.getElementById("map").value;if(40,55,"custom"===t&&o){copyArray(o.display),copyArray(o.displayDir),a=copyArray(o.grid),copyArray(o.metadata),i=copyArray(o.paths),d=createVector(o.exit[0],o.exit[1]),A=[];for(var s=0;s<o.spawnpoints.length;s++){var n=o.spawnpoints[s];A.push(createVector(n[0],n[1]))}o.bg,o.border,o.borderAlpha,e=o.cols,r=o.rows,T()}else if(t in maps){var p=maps[t];copyArray(p.display),copyArray(p.displayDir),a=copyArray(p.grid),copyArray(p.metadata),i=copyArray(p.paths),d=createVector(p.exit[0],p.exit[1]),A=[];for(s=0;s<p.spawnpoints.length;s++){n=p.spawnpoints[s];A.push(createVector(n[0],n[1]))}p.bg,p.border,p.borderAlpha,e=p.cols,r=p.rows,T()}else{var u;k(),f=.1,"3"===t[t.length-1]?(65,u=3):u=2,"empty2"!==t&&"empty3"!==t||(f=0),"sparse2"!==t&&"sparse3"!==t||(f=.1),"dense2"!==t&&"dense3"!==t||(f=.2),"solid2"!==t&&"solid3"!==t||(f=.3),function(t){a=[];for(var s=0;s<e;s++){a[s]=[];for(var o=0;o<r;o++)a[s][o]=random()<f?1:0}l=x(),d=v();for(var n=neighbors(l,d.x,d.y,!1),i=0;i<n.length;i++){var p=stv(n[i]);a[p.x][p.y]=0}A=[],h=b(l);for(i=0;i<t;i++){for(var u,g=0;g<100;g++){for(u=v();!h[vts(u)];)u=v();if(u.dist(d)>=15)break}A.push(u)}}(u),replaceArray(a,[0,1,2,3,4],["empty","wall","empty","tower","empty"]),buildArray(e,r,0),[0,0,0],255,31,buildArray(e,r,null)}[],O()}function q(){!function(t){t.shift();for(var s=0;s<t.length;s++)m(t[s])}(function(){var t=[];z(0,3)&&t.push([40,["weak",50]]);z(2,4)&&t.push([20,["weak",25]]);z(2,7)&&(t.push([30,["weak",25],["strong",25]]),t.push([20,["strong",25]]));z(3,7)&&t.push([40,["fast",25]]);z(4,14)&&t.push([20,["fast",50]]);z(5,6)&&t.push([20,["strong",50],["fast",25]]);z(8,12)&&t.push([20,["medic","strong","strong",25]]);z(10,13)&&(t.push([20,["medic","strong","strong",50]]),t.push([30,["medic","strong","strong",50],["fast",50]]),t.push([5,["fast",50]]));z(12,16)&&(t.push([20,["medic","strong","strong",50],["strongFast",50]]),t.push([10,["strong",50],["strongFast",50]]),t.push([10,["medic","strongFast",50]]),t.push([10,["strong",25],["stronger",25],["strongFast",50]]),t.push([10,["strong",25],["medic",25],["strongFast",50]]),t.push([20,["medic","stronger","stronger",50]]),t.push([10,["medic","stronger","strong",50]]),t.push([10,["medic","strong",50],["medic","strongFast",50]]),t.push([5,["strongFast",100]]),t.push([20,["stronger",50]]));z(13,20)&&(t.push([40,["tank","stronger","stronger","stronger",10]]),t.push([10,["medic","stronger","stronger",50]]),t.push([40,["tank",25]]),t.push([20,["tank","stronger","stronger",50]]),t.push([20,["tank","medic",50],["strongFast",25]]));z(14,20)&&(t.push([20,["tank","stronger","stronger",50]]),t.push([20,["tank","medic","medic",50]]),t.push([20,["tank","medic",50],["strongFast",25]]),t.push([10,["tank",50],["strongFast",25]]),t.push([10,["faster",50]]),t.push([20,["tank",50],["faster",25]]));z(17,25)&&(t.push([20,["taunt","stronger","stronger","stronger",25]]),t.push([20,["spawner","stronger","stronger","stronger",25]]),t.push([20,["taunt","tank","tank","tank",25]]),t.push([40,["taunt","tank","tank","tank",25]]));z(19)&&(t.push([20,["spawner",1],["tank",20],["stronger",25]]),t.push([20,["spawner",1],["faster",25]]));z(23)&&(t.push([20,["taunt","medic","tank",25]]),t.push([20,["spawner",2],["taunt","medic","tank",25]]),t.push([10,["spawner",1],["faster",100]]),t.push([5,["faster",100]]),t.push([20,["tank",100],["faster",50],["taunt","tank","tank","tank",50]]),t.push([10,["taunt","stronger","tank","stronger",50],["faster",50]]));z(25)&&(t.push([5,["taunt","medic","tank",50],["faster",50]]),t.push([5,["taunt","faster","faster","faster",50]]),t.push([10,["taunt","tank","tank","tank",50],["faster",50]]));z(30)&&(t.push([5,["taunt","faster","faster","faster",50]]),t.push([5,["taunt","tank","tank","tank",50]]),t.push([5,["taunt","medic","tank","tank",50]]),t.push([1,["faster",200]]));z(35)&&t.push([0,["taunt","faster",200]]);return random(t)}()),p++}function O(){l=x();var t=[],s=vts(d);t.push(s);var o={},h={};for(o[s]=null,h[s]=0;0!==t.length;)for(var p=t.shift(),u=stv(p),g=neighbors(l,u.x,u.y,!0),c=0;c<g.length;c++){(v=g[c])in o&&v in h||(t.push(v),o[v]=p,h[v]=h[p]+1)}n=buildArray(e,r,null);var A=buildArray(e,r,0),f=Object.keys(o);for(c=0;c<f.length;c++){var m=f[c];p=stv(m);n[p.x][p.y]=h[m];var w=o[m];if(null!==w){var v,y=(v=stv(w)).sub(p);y.x<0&&(A[p.x][p.y]=1),y.y<0&&(A[p.x][p.y]=2),y.x>0&&(A[p.x][p.y]=3),y.y>0&&(A[p.x][p.y]=4)}}for(var b=0;b<e;b++)for(var z=0;z<r;z++)2===a[b][z]&&(A[b][z]=i[b][z]);i=A}function P(){M(),[],[],[],u=[],g=[],[],[],40,p=0,!0,0,!1,!1,!1,q()}function T(){var t=document.getElementById("sketch-holder"),s=floor(t.offsetWidth/e),o=floor(t.offsetHeight/r);c=Math.min(s,o),resizeCanvas(e*c,r*c,!0)}function k(){var t=document.getElementById("sketch-holder");e=floor(t.offsetWidth/c),r=floor(t.offsetHeight/c),resizeCanvas(e*c,r*c,!0)}function S(t,s){return 1!==a[t][s]&&3!==a[t][s]&&!y(t,s)}document.getElementById("map").addEventListener("change",P)},function(t,s){},function(t,s){},function(t,s){var e={gun:{color:[249,191,59],length:.65,radius:.9,secondary:[149,165,166],name:"gun",title:"Gun Tower",cooldownMax:18,cooldownMin:8,cost:25,range:3,upgrades:[{color:[249,105,14],name:"machineGun",title:"Machine Gun",cooldownMax:5,cooldownMin:0,cost:75,damageMax:10,damageMin:0}]}};e.laser={color:[25,181,254],length:.55,radius:.8,secondary:[149,165,166],width:.25,name:"laser",title:"Laser Tower",cooldownMax:1,cost:75,damageMax:3,range:2,type:"energy",upgrades:[{color:[78,205,196],length:.65,radius:.9,secondary:[191,191,191],weight:3,width:.35,name:"beamEmitter",title:"Beam Emitter",cooldownMax:0,cost:200,damageMax:.1,damageMin:.001,range:3,attack:function(t){this.lastTarget===t?this.duration++:(this.lastTarget=t,this.duration=0);var s=random(this.damageMin,this.damageMax)*sq(this.duration);t.dealDamage(s,this.type),this.onHit(t)}}]},e.slow={baseOnTop:!1,color:[75,119,190],drawLine:!1,length:1.1,radius:.9,secondary:[189,195,199],width:.3,name:"slow",title:"Slow Tower",cooldownMax:0,cooldownMin:0,cost:100,damageMax:0,damageMin:0,range:1,type:"slow",drawBarrel:function(){stroke(this.border),fill(this.secondary);var t=-this.length*ts/2,s=this.width*ts/2;rect(t,-s,this.length*ts,this.width*ts)},onAim:function(t){this.attack(t)},onHit:function(t){t.applyEffect("slow",40)},target:function(t){if(!stopFiring&&0!==(t=this.visible(t)).length&&this.canFire()){this.resetCooldown(),noStroke(),fill(this.color[0],this.color[1],this.color[2],127);var s=2*this.range+1;ellipse(this.pos.x,this.pos.y,s*ts,s*ts);for(var e=0;e<t.length;e++)this.onAim(t[e])}},update(){this.angle+=PI/60,this.cd>0&&this.cd--},upgrades:[{color:[102,204,26],radius:.9,name:"poison",title:"Poison Tower",cooldownMax:60,cooldownMin:60,cost:150,range:2,type:"poison",onHit:function(t){t.applyEffect("poison",60)}}]},e.sniper={color:[207,0,15],follow:!1,hasBase:!1,radius:.9,weight:3,name:"sniper",sound:"sniper",title:"Sniper Tower",cooldownMax:100,cooldownMin:60,cost:150,damageMax:100,damageMin:100,range:9,drawBarrel:function(){stroke(0),fill(this.color);var t=this.radius*ts*sqrt(3)/2,s=-t/3,e=2*t/3,r=this.radius*ts/2;triangle(s,-r,s,r,e,0)},target(t){if(!stopFiring&&0!==(t=this.visible(t)).length){var s=getTaunting(t);s.length>0&&(t=s);var e=getStrongest(t);void 0!==e&&this.onAim(e)}},upgrades:[{baseOnTop:!1,color:[103,65,114],hasBase:!0,length:.7,radius:1,secondary:[103,128,159],weight:4,width:.4,name:"railgun",sound:"railgun",title:"Railgun",cooldownMax:120,cooldownMin:100,cost:300,damageMax:200,damageMin:200,range:11,type:"piercing",drawBarrel:function(){stroke(this.border),fill(this.secondary);var t=-this.length*ts,s=-this.width*ts/2;rect(t,s,this.length*ts*2,this.width*ts),fill(207,0,15),ellipse(0,0,this.radius*ts*2/3,this.radius*ts*2/3)},onHit:function(t){var s=getInRange(t.pos.x,t.pos.y,1,enemies);if(noStroke(),fill(this.color[0],this.color[1],this.color[2],127),ellipse(t.pos.x,t.pos.y,2.5*ts,2.5*ts),showEffects){for(var e=new ShrapnelExplosion(t.pos.x,t.pos.y),r=0;r<particleAmt;r++)e.addParticle();systems.push(e)}for(r=0;r<s.length;r++){var o=s[r],n=round(random(this.damageMin,this.damageMax));o.dealDamage(n,this.type)}}}]},e.rocket={baseOnTop:!1,color:[30,130,76],drawLine:!1,length:.6,radius:.75,secondary:[189,195,199],width:.2,name:"rocket",sound:"missile",title:"Rocket Tower",cooldownMax:80,cooldownMin:60,cost:250,range:7,damageMax:60,damageMin:40,type:"explosion",drawBarrel:function(){stroke(this.border),fill(this.secondary),rect(0,-this.width*ts,this.length*ts,this.width*ts),rect(0,0,this.length*ts,this.width*ts),fill(207,0,15);var t=this.width*ts/2,s=this.length*ts,e=this.length*ts+this.width*ts*2,r=this.width*ts;triangle(s,-r,e,-t,s,0),triangle(s,r,e,t,s,0),fill(this.color);var o=this.width*ts*4,n=this.width*ts*1.5,a=-this.width*ts*.75,i=this.width*ts*1.25;quad(a,-o,a,o,i,n,i,-n)},drawBase:function(){stroke(this.border),fill(this.secondary),ellipse(this.pos.x,this.pos.y,this.radius*ts,this.radius*ts)},onAim(t){(this.canFire()||this.follow)&&this.aim(t.pos.x,t.pos.y),stopFiring||this.canFire()&&(this.resetCooldown(),projectiles.push(new Missile(this.pos.x,this.pos.y,t)),!muteSounds&&sounds.hasOwnProperty(this.sound)&&sounds[this.sound].play())},upgrades:[{color:[65,131,215],secondary:[108,122,137],name:"missileSilo",sound:"missile",title:"Missile Silo",cooldownMax:80,cooldownMin:40,cost:250,damageMax:120,damageMin:100,range:9,drawBarrel:function(){stroke(this.border),fill(this.secondary),rect(0,-this.width*ts,this.length*ts,this.width*ts),rect(0,0,this.length*ts,this.width*ts),fill(this.color);var t=this.width*ts/2,s=this.length*ts,e=this.length*ts+this.width*ts*2,r=this.width*ts;triangle(s,-r,e,-t,s,0),triangle(s,r,e,t,s,0),fill(31,58,147);var o=this.width*ts*4,n=this.width*ts*1.5,a=-this.width*ts*.75,i=this.width*ts*1.25;quad(a,-o,a,o,i,n,i,-n)},onAim(t){if((this.canFire()||this.follow)&&this.aim(t.pos.x,t.pos.y),!stopFiring&&this.canFire()){this.resetCooldown();var s=new Missile(this.pos.x,this.pos.y,t);s.color=[65,131,215],s.secondary=this.secondary,s.blastRadius=2,s.damageMax=this.damageMax,s.damageMin=this.damageMin,s.accAmt=.7,s.topSpeed=144/ts,projectiles.push(s),!muteSounds&&sounds.hasOwnProperty(this.sound)&&sounds[this.sound].play()}}}]},e.bomb={baseOnTop:!1,color:[102,51,153],drawLine:!1,length:.6,width:.35,secondary:[103,128,159],name:"bomb",title:"Bomb Tower",cooldownMax:60,cooldownMin:40,cost:250,damageMax:60,damageMin:20,range:2,type:"explosion",drawBarrel:function(){stroke(this.border),fill(this.secondary),rect(0,-this.width*ts/2,this.length*ts,this.width*ts),fill(191,85,236),ellipse(0,0,this.radius*ts*2/3,this.radius*ts*2/3)},onHit:function(t){var s=getInRange(t.pos.x,t.pos.y,1,enemies);if(noStroke(),fill(191,85,236,127),ellipse(t.pos.x,t.pos.y,2.5*ts,2.5*ts),showEffects){for(var e=new BombExplosion(t.pos.x,t.pos.y),r=0;r<particleAmt;r++)e.addParticle();systems.push(e)}for(r=0;r<s.length;r++){var o=s[r],n=round(random(this.damageMin,this.damageMax));o.dealDamage(n,this.type)}},upgrades:[{radius:1.1,name:"clusterBomb",title:"Cluster Bomb",cooldownMax:80,cooldownMin:40,cost:250,damageMax:140,damageMin:100,drawBarrel:function(){stroke(this.border),fill(this.secondary),rect(0,-this.width*ts/2,this.length*ts,this.width*ts),fill(249,105,14),ellipse(0,0,this.radius*ts*2/3,this.radius*ts*2/3)},onHit:function(t){var s=getInRange(t.pos.x,t.pos.y,1,enemies);if(noStroke(),fill(191,85,236,127),ellipse(t.pos.x,t.pos.y,2.5*ts,2.5*ts),showEffects){for(var e=new BombExplosion(t.pos.x,t.pos.y),r=0;r<particleAmt;r++)e.addParticle();systems.push(e)}var o=random(0,TWO_PI);for(r=0;r<3;r++){var n=TWO_PI/3*r+o,a=2*ts,i=t.pos.x+cos(n)*a,h=t.pos.y+sin(n)*a;s=getInRange(i,h,1,enemies);if(showEffects){e=new BombExplosion(i,h);for(var l=0;l<particleAmt/2;l++)e.addParticle();systems.push(e)}for(l=0;l<s.length;l++){var d=s[l],p=round(random(this.damageMin,this.damageMax));d.dealDamage(p,this.type)}}}}]},e.tesla={color:[255,255,0],hasBase:!1,radius:1,secondary:[30,139,195],weight:10,name:"tesla",sound:"spark",title:"Tesla Coil",cooldownMax:80,cooldownMin:60,cost:350,damageMax:512,damageMin:256,range:4,type:"energy",drawBarrel:function(){stroke(this.border),fill(this.secondary),polygon(0,0,.5*ts,6),fill(this.color);var t=.55*ts;ellipse(0,0,t,t)},onAim(t){if((this.canFire()||this.follow)&&this.aim(t.pos.x,t.pos.y),!stopFiring&&this.canFire()){this.resetCooldown();var s=t,e=[],r=round(random(this.damageMin,this.damageMax)),o=this.weight;for(stroke(this.color),strokeWeight(o),line(this.pos.x,this.pos.y,t.pos.x,t.pos.y),!muteSounds&&sounds.hasOwnProperty(this.sound)&&sounds[this.sound].play();r>1;){o-=1,s.dealDamage(r,this.type),e.push(s);var n=getNearest(enemies,s.pos,e);if(void 0===n)break;strokeWeight(o);var a=random(s.pos.x,n.pos.x),i=random(s.pos.y,n.pos.y);line(s.pos.x,s.pos.y,a,i),line(a,i,n.pos.x,n.pos.y),s=n,r/=2}strokeWeight(1)}},upgrades:[{color:[25,181,254],radius:1.1,secondary:[51,110,123],name:"plasma",title:"Plasma Tower",cooldownMax:60,cooldownMin:40,cost:250,damageMax:2048,damageMin:1024,drawBarrel:function(){stroke(this.border),fill(this.secondary),polygon(0,0,this.radius*ts/2,6),fill(this.color);var t=.6*ts;ellipse(0,0,t,t)},onAim(t){if((this.canFire()||this.follow)&&this.aim(t.pos.x,t.pos.y),!stopFiring&&this.canFire()){this.resetCooldown();var s=t,e=[],r=round(random(this.damageMin,this.damageMax)),o=this.weight;for(stroke(this.color),strokeWeight(o),line(this.pos.x,this.pos.y,t.pos.x,t.pos.y),!muteSounds&&sounds.hasOwnProperty(this.sound)&&sounds[this.sound].play();r>1;){o-=1,s.dealDamage(r,this.type),e.push(s);var n=getNearest(enemies,s.pos,e);if(void 0===n)break;strokeWeight(o);var a=random(s.pos.x,n.pos.x),i=random(s.pos.y,n.pos.y);line(s.pos.x,s.pos.y,a,i),line(a,i,n.pos.x,n.pos.y),s=n,r/=2}strokeWeight(1)}}}]}},function(t,s){new p5}]);