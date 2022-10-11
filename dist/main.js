!function(){"use strict";!function(){Function.prototype.myThrottle=function(s,t){let i=0;return()=>{i===s.maxBullets?(i++,setTimeout((()=>{i=0}),t)):i<s.maxBullets&&(this.call(s),i++)}};class s{constructor(s,t,i){this.pos=s,this.tank=t,this.ctx=i,this.radius=60,this.timeoutID=setTimeout((()=>{this.explode(),console.log("boom")}),1e4)}draw(s){s.fillStyle="yellow",s.beginPath(),s.arc(this.pos[0],this.pos[1],8,0,2*Math.PI),s.fill(),s.strokeStyle="black",s.stroke()}explode(){for(let s=0;s<this.tank.game.tanks.length;s++)return console.log(this.tank.game.tanks[s]),console.log(this.inRadius(this.tank.game.tanks[s])),this.inRadius(this.tank.game.tanks[s])?(this.tank.game.remove(this),void this.tank.game.remove(this.tank.game.tanks[s])):void this.tank.game.remove(this)}inRadius(s){let e,h;return s instanceof t?(e=this.pos[0]-s.bodyPos[0]-s.width/2,h=this.pos[1]-s.bodyPos[1]-s.height/2):s instanceof i&&(e=this.pos[0]-s.pos[0]-s.width/2,h=this.pos[1]-s.pos[1]-s.height/2),!(e>s.width/2+this.radius||h>s.height/2+this.radius||!(e<=s.width/2||h<=s.height/2||(e-s.width/2)**2+(h-s.height/2)**2<=this.radius**2))}}class t{constructor(s){this.barrelPos=s.pos,this.bodyPos=s.pos,this.angle=0,this.vel=[0,0,0,0],this.body=new Image,this.barrel=new Image,this.state="alive",this.game=s.game}draw(s){}move(){}checkBounds(){this.bodyPos[0]<0&&(this.vel[0]=0),this.bodyPos[1]<0&&(this.vel[2]=0),this.bodyPos[0]+42.5>a.DIM_X&&(this.vel[1]=0),this.bodyPos[1]+44>a.DIM_Y&&(this.vel[3]=0)}hittingWall(s){return this.bodyPos[0]+2<s.pos[0]+s.width&&this.bodyPos[0]+this.width-2>s.pos[0]&&this.bodyPos[1]+this.height-2>s.pos[1]&&this.bodyPos[1]+2<s.pos[1]+s.height||this.bodyPos[1]+2<s.pos[1]+s.height&&this.bodyPos[1]+this.height-2>s.pos[1]&&this.bodyPos[0]+this.width-2>s.pos[0]&&this.bodyPos[0]+2<s.pos[0]+s.width}shoot(){let s=50*Math.cos(this.angle+Math.PI/2),t=50*Math.sin(this.angle+Math.PI/2);const e=new i({pos:[this.barrelPos[0]+20+s,this.barrelPos[1]+20+t],speed:3,angle:this.angle+Math.PI/2,tank:this});this.game.add(e)}placeMine(){if(this.game.mines.length<this.maxMines){const t=new s([this.bodyPos[0]+20,this.bodyPos[1]+20],this);this.game.add(t)}}}class i{constructor(s){this.pos=s.pos,this.speed=s.speed,this.angle=s.angle,this.vel=[this.speed*Math.cos(this.angle),this.speed*Math.sin(this.angle)],this.tank=s.tank,this.height=12,this.width=8,this.numRicochets=0}draw(s){let t=new Image;t.src="images/bullets/bulletDark2.png",s.save(),s.translate(this.pos[0],this.pos[1]),s.rotate(this.angle-3*Math.PI/2),s.drawImage(t,0,0),s.restore()}move(){this.checkRicochet(),this.pos[0]+=this.vel[0],this.pos[1]+=this.vel[1]}checkRicochet(){this.numRicochets>=2&&this.tank.game.remove(this),this.tank.game.walls.forEach((s=>{this.pos[0]<=s.pos[0]+s.width&&this.pos[0]+this.width>=s.pos[0]&&this.pos[1]+this.height>=s.pos[1]&&this.pos[1]<=s.pos[1]+s.height?(this.vel[0]=-this.vel[0],this.angle=-this.angle,this.numRicochets++):this.pos[1]<=s.pos[1]+s.height&&this.pos[1]+this.height>=s.pos[1]&&this.pos[0]+this.width>=s.pos[0]&&(this.pos[0],s.pos[0],s.width)})),this.pos[0]<0&&(this.vel[0]=-this.vel[0],this.angle=-this.angle,this.numRicochets++),this.pos[1]<0&&(this.vel[1]=-this.vel[1],this.angle=-this.angle,this.numRicochets++),this.pos[0]+this.width>a.DIM_X&&(this.vel[0]=-this.vel[0],this.angle=-this.angle,this.numRicochets++),this.pos[1]+this.height>a.DIM_Y&&(this.vel[1]=-this.vel[1],this.angle=-this.angle,this.numRicochets++)}hasHit(e){if(e instanceof t)return this.pos[0]<=e.bodyPos[0]+e.width&&this.pos[0]+this.width>=e.bodyPos[0]&&this.pos[1]+this.height>=e.bodyPos[1]&&this.pos[1]<=e.bodyPos[1]+e.height||this.pos[1]<=e.bodyPos[1]+e.height&&this.pos[1]+this.height>=e.bodyPos[1]&&this.pos[0]+this.width>=e.bodyPos[0]&&this.pos[0]<=e.bodyPos[0]+e.width;if(e instanceof i)return this.pos[0]<=e.pos[0]+e.width&&this.pos[0]+this.width>=e.pos[0]&&this.pos[1]+this.height>=e.pos[1]&&this.pos[1]<=e.pos[1]+e.height||this.pos[1]<=e.pos[1]+e.height&&this.pos[1]+this.height>=e.pos[1]&&this.pos[0]+this.width>=e.pos[0]&&this.pos[0]<=e.pos[0]+e.width;if(e instanceof s){let s=e.pos[0]-this.pos[0]-this.width/2,t=e.pos[1]-this.pos[1]-this.height/2;return!(s>this.width/2+8||t>this.height/2+8||!(s<=this.width/2||t<=this.height/2||(s-this.width/2)**2+(t-this.height/2)**2<=64))}}hits(i){if(i instanceof s)return clearTimeout(i.timeoutID),i.explode(),void this.tank.game.remove(this);i instanceof t&&(i.state="dead"),this.tank.game.remove(this),this.tank.game.remove(i)}}class e extends t{constructor(s){super(s),this.body.src="images/tanks/tankBody_blue_outline.png",this.barrel.src="images/tanks/tankBlue_barrel2_outline.png",this.height=this.body.height,this.width=this.body.width,this.barrelHeight=this.barrel.height,this.barrelWidth=this.barrel.width,this.maxBullets=5,this.maxMines=1}draw(s){s.drawImage(this.body,this.bodyPos[0],this.bodyPos[1]),s.save(),s.translate(this.barrelPos[0]+20,this.barrelPos[1]+20),s.rotate(this.angle),s.drawImage(this.barrel,-5,-5),s.restore()}move(){this.checkBounds(),this.barrelPos[0]+=this.vel[0],this.barrelPos[0]+=this.vel[1],this.barrelPos[1]+=this.vel[2],this.barrelPos[1]+=this.vel[3],this.bodyPos[0]+=this.vel[0],this.bodyPos[0]+=this.vel[1],this.bodyPos[1]+=this.vel[2],this.bodyPos[1]+=this.vel[3],this.angle=Math.atan2(this.game.cursorPos[1]-this.barrelPos[1],this.game.cursorPos[0]-this.barrelPos[0])-Math.PI/1.95,this.game.walls.forEach((s=>{this.hittingWall(s)&&this.vel[0]<0?(this.barrelPos[0]-=2*this.vel[0],this.bodyPos[0]-=2*this.vel[0],this.vel[0]=0):this.hittingWall(s)&&this.vel[1]>0?(this.barrelPos[0]-=2*this.vel[1],this.bodyPos[0]-=2*this.vel[1],this.vel[1]=0):this.hittingWall(s)&&this.vel[2]<0?(this.barrelPos[1]-=2*this.vel[2],this.bodyPos[1]-=2*this.vel[2],this.vel[2]=0):this.hittingWall(s)&&this.vel[3]>0&&(this.barrelPos[1]-=2*this.vel[3],this.bodyPos[1]-=2*this.vel[3],this.vel[3]=0)}))}}class h extends t{constructor(s){super(s),this.type=s.type,"red"===this.type&&(this.body.src="images/tanks/tankBody_red_outline.png",this.barrel.src="images/tanks/tankRed_barrel2_outline.png",this.maxBullets=1,this.maxMines=0),this.height=this.body.height,this.width=this.body.width,setInterval((()=>{"alive"!==this.state&&"game over"!==this.game.state||this.shoot()}),1e3)}draw(s){s.drawImage(this.body,this.bodyPos[0],this.bodyPos[1]),s.save(),s.translate(this.barrelPos[0]+18,this.barrelPos[1]+22),s.rotate(this.angle),s.drawImage(this.barrel,-5,-5),s.restore()}move(){this.checkBounds(),this.barrelPos[0]+=this.vel[0],this.barrelPos[0]+=this.vel[1],this.barrelPos[1]+=this.vel[2],this.barrelPos[1]+=this.vel[3],this.bodyPos[0]+=this.vel[0],this.bodyPos[0]+=this.vel[1],this.bodyPos[1]+=this.vel[2],this.bodyPos[1]+=this.vel[3];let s=[this.game.playerTank.bodyPos[0]+this.game.playerTank.width/2,this.game.playerTank.bodyPos[1]+this.game.playerTank.height/2];this.angle=Math.atan2(s[1]-this.barrelPos[1],s[0]-this.barrelPos[0])-Math.PI/1.95,this.game.walls.forEach((s=>{this.hittingWall(s)&&this.vel[0]<0?(this.barrelPos[0]-=2*this.vel[0],this.bodyPos[0]-=2*this.vel[0],this.vel[0]=0):this.hittingWall(s)&&this.vel[1]>0?(this.barrelPos[0]-=2*this.vel[1],this.bodyPos[0]-=2*this.vel[1],this.vel[1]=0):this.hittingWall(s)&&this.vel[2]<0?(this.barrelPos[1]-=2*this.vel[2],this.bodyPos[1]-=2*this.vel[2],this.vel[2]=0):this.hittingWall(s)&&this.vel[3]>0&&(this.barrelPos[1]-=2*this.vel[3],this.bodyPos[1]-=2*this.vel[3],this.vel[3]=0)}))}}class o{constructor(s,t,i){this.height=s,this.width=t,this.pos=i}draw(s){let t=new Image;t.src="images/wooden_wall.png",s.drawImage(t,this.pos[0],this.pos[1],this.width,this.height)}}class a{constructor(s){this.ctx=s,this.level=1,this.playerTank=new e({pos:[150,650],game:this}),this.enemyTanks=[new h({pos:[1250,125],game:this,type:"red"})],this.tanks=[this.playerTank].concat(this.enemyTanks),this.bullets=[],this.mines=[],this.walls=[new o(75,750,[250,200]),new o(75,750,[400,550])],this.cursorPos=[],this.missionScreen=document.getElementsByClassName("mission-screen")[0],this.missionHeader=document.getElementsByClassName("mission")[0],this.missionFailed=document.getElementsByClassName("mission-failed")[0],this.enemyTanksHeader=document.getElementsByClassName("enemy-tanks")[0],this.bindEventListeners()}startLevel(){this.missionHeader.innerHTML=`Mission ${this.level}`,this.enemyTanksHeader.innerHTML=`Enemy Tanks: ${this.enemyTanks.length}`,setTimeout((()=>{this.missionScreen.classList.remove("mission-screen"),this.missionScreen.classList.add("hidden")}),1e4),this.update(this.ctx),0===this.enemyTanks.length&&this.endLevel()}endLevel(){console.log("next level"),this.level++,this.startLevel()}gameOver(){this.state="game over",this.missionFailed.style.display="block",setTimeout((()=>{this.missionFailed.style.display="none"}),1e4)}add(t){t instanceof h?this.enemyTanks.push(t):t instanceof i?this.bullets.push(t):t instanceof s&&this.mines.push(t)}draw(s){s.clearRect(0,0,a.DIM_X,a.DIM_Y),this.allObjects().forEach((t=>{t.draw(s)}))}moveObjects(){[].concat(this.playerTank,this.enemyTanks,this.bullets).forEach((s=>{s.move()}))}update(s){this.step(),this.draw(s),this.frameID=requestAnimationFrame((()=>this.update(s)))}checkCollisions(){for(let s=0;s<this.bullets.length;s++){for(let t=0;t<this.tanks.length;t++)this.bullets[s].hasHit(this.tanks[t])&&this.bullets[s].hits(this.tanks[t]);for(let t=0;t<this.bullets.length;t++)this.bullets[s]!==this.bullets[t]&&this.bullets[s].hasHit(this.bullets[t])&&this.bullets[s].hits(this.bullets[t]);for(let t=0;t<this.mines.length;t++)this.bullets[s].hasHit(this.mines[t])&&this.bullets[s].hits(this.mines[t])}}step(){this.moveObjects(),this.checkCollisions()}remove(h){h instanceof i?this.bullets.splice(this.bullets.indexOf(h),1):h instanceof t?(h instanceof e?this.gameOver():this.enemyTanks.splice(this.enemyTanks.indexOf(h),1),this.tanks.splice(this.tanks.indexOf(h),1),0===this.enemyTanks.length&&this.endLevel()):h instanceof s&&(console.log(this.mines,"mines"),console.log(this.mines.indexOf(h),"mine index"),this.mines.splice(this.mines.indexOf(h),1))}allObjects(){return[].concat(this.tanks,this.bullets,this.walls,this.mines)}static get DIM_X(){return window.innerWidth}static get DIM_Y(){return window.innerHeight}mouseOnPage(s){this.cursorPos=[s.clientX,s.clientY]}bindEventListeners(){document.addEventListener("mousemove",(s=>this.mouseOnPage(s))),document.addEventListener("keydown",(s=>{"KeyA"===s.code&&(this.playerTank.vel[0]=-1),"KeyD"===s.code&&(this.playerTank.vel[1]=1),"KeyW"===s.code&&(this.playerTank.vel[2]=-1),"KeyS"===s.code&&(this.playerTank.vel[3]=1)})),document.addEventListener("keyup",(s=>{"KeyA"===s.code&&(this.playerTank.vel[0]=0),"KeyD"===s.code&&(this.playerTank.vel[1]=0),"KeyW"===s.code&&(this.playerTank.vel[2]=0),"KeyS"===s.code&&(this.playerTank.vel[3]=0)})),document.addEventListener("click",this.playerTank.shoot.myThrottle(this.playerTank,2e3)),document.addEventListener("keydown",(s=>{"Space"===s.code&&this.playerTank.placeMine()}))}}class l{constructor(s){this.ctx=s,this.game=new a(this.ctx),this.start()}start(){this.game.startLevel()}}document.addEventListener("DOMContentLoaded",(()=>{const s=document.getElementById("game-canvas");s.height=a.DIM_Y,s.width=a.DIM_X;const t=s.getContext("2d");new l(t)}))}()}();
//# sourceMappingURL=main.js.map