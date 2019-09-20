//--------Begin About--------//
/* This code was written in whole by Iain Peregrine, enjoy :) */
//---------End About---------//

//---Begin Instructions for use---//
/*
In order for this code to work properly
in an html (xhtml, etc.) environment,
the following attributes and values must
be added to the body element (tag):
	ondragdrop="return false;"
	onmouseup="mup(event);"
	onmousemove="mmove(event);"
*/
//----End Instructions for use----//

//---Begin Global Declarations---//
var path  = "images/themes/";
var theme = "auburn";
var ECMAwin = new Array();
var creator = "IainPeregrine";
//----End Global Declarations----//

//---Begin ECMA Window Obj---//
function coordobj(x,y){
	this.x=x;
	this.y=y;
	}
function winobj(name,title,x,y,width,height,info){
	this.name=name;
	this.title=title;
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.redraw=winredraw;
	this.resize=winresize;
	this.move=winmove;
	this.cwhich=undefined;
	this.cclick=new coordobj(0,0);
	this.cghost=new coordobj(x,y);
	this.cmeasr=new coordobj(width,height);
	document.writeln('<form onmousedown="mdown('+title+',event,\'top1\')" name="'+title+'top1" id="'+title+'top1" class="winelement" style="cursor:pointer;background-image:url(\''+path+theme+'/top1.gif\')"></form>');
	document.writeln('<form onmousedown="mdown('+title+',event,\'top2\')" ondblclick="mdown('+title+',event,\'sqr2\')" name="'+title+'top2" id="'+title+'top2" class="winelement" style="text-align:center;cursor:pointer;background-image:url(\''+path+theme+'/top2.gif\')"><img src="'+path+theme+'/icon.gif" onclick="alert(\'This is where I put info about myself, Iain Peregrine, and the G.Gnome Desktop project.\')" style="position:absolute;top:4px;left:1px" /><label class="winelement">'+this.name+'</label><input name="input" type="input" onfucus="this.blur()" style="width:0px;height:0px;position:absolute;left:-64px;top:-64px;" /></form>');
	document.writeln('<form onmousedown="mdown('+title+',event,\'top3\')" name="'+title+'top3" id="'+title+'top3" class="winelement" style="cursor:pointer;background-image:url(\''+path+theme+'/top3.gif\')"></form>');
	document.writeln('<form onmousedown="mdown('+title+',event,\'mid1\')" name="'+title+'mid1" id="'+title+'mid1" class="winelement" style="cursor:w-resize;background-image:url(\''+path+theme+'/mid1.gif\')"></form>');
	document.writeln('<form onmousedown="mdown('+title+',event,\'mid3\')" name="'+title+'mid3" id="'+title+'mid3" class="winelement" style="cursor:w-resize;background-image:url(\''+path+theme+'/mid3.gif\')"></form>');
	document.writeln('<form onmousedown="mdown('+title+',event,\'bot1\')" name="'+title+'bot1" id="'+title+'bot1" class="winelement" style="cursor:sw-resize;background-image:url(\''+path+theme+'/bot1.gif\')"></form>');
	document.writeln('<form onmousedown="mdown('+title+',event,\'bot2\')" name="'+title+'bot2" id="'+title+'bot2" class="winelement" style="cursor:s-resize;background-image:url(\''+path+theme+'/bot2.gif\')"></form>');
	document.writeln('<form onmousedown="mdown('+title+',event,\'bot3\')" name="'+title+'bot3" id="'+title+'bot3" class="winelement" style="cursor:se-resize;background-image:url(\''+path+theme+'/bot3.gif\')"></form>');
	document.writeln('<form onmousedown="mdown('+title+',event,\'sqr1\')" name="'+title+'sqr1" id="'+title+'sqr1" class="winelement" style="cursor:pointer;background-image:url(\''+path+theme+'/sqr1.gif\')"></form>');
	document.writeln('<form onmousedown="mdown('+title+',event,\'sqr2\')" name="'+title+'sqr2" id="'+title+'sqr2" class="winelement" style="cursor:pointer;background-image:url(\''+path+theme+'/sqr2.gif\')"></form>');
	document.writeln('<form name="'+title+'form" id="'+title+'form" style="position:absolute;left:0px;top:0px;overflow:auto;background-color:#ffffff;" onsubmit="return false">'+info+'</form>');
	this.top1=document.forms[title+'top1'];
	this.top2=document.forms[title+'top2'];
	this.top3=document.forms[title+'top3'];
	this.mid1=document.forms[title+'mid1'];
	this.mid3=document.forms[title+'mid3'];
	this.bot1=document.forms[title+'bot1'];
	this.bot2=document.forms[title+'bot2'];
	this.bot3=document.forms[title+'bot3'];
	this.sqr1=document.forms[title+'sqr1'];
	this.sqr2=document.forms[title+'sqr2'];
	this.sqr3=document.forms[title+'sqr3'];
	this.form=document.forms[title+'form'];
	this.redraw();
	}
function winredraw(x,y){
	with(this){
		top1.style.left=(x-3)+'px';
		top1.style.top =(y-24)+'px';
		top2.style.left=(x)+'px';
		top2.style.top =(y-24)+'px';
		top3.style.left=(x+width)+'px';
		top3.style.top =(y-24)+'px';
		mid1.style.left=(x-3)+'px';
		mid1.style.top =(y)+'px';
		mid3.style.left=(x+width)+'px';
		mid3.style.top =(y)+'px';
		bot1.style.left=(x-3)+'px';
		bot1.style.top =(y+height)+'px';
		bot2.style.left=x+'px';
		bot2.style.top =(y+height)+'px';
		bot3.style.left=(x+width)+'px';
		bot3.style.top =(y+height)+'px';
		sqr1.style.left=(x+width-17)+'px';
		sqr1.style.top =(y-16-4)+'px';
		sqr2.style.left=(x+width-17-17)+'px';
		sqr2.style.top =(y-16-4)+'px';
		top1.style.width='3px';
		top1.style.height='24px';
		top2.style.width=width+'px';
		top2.style.height='24px';
		top3.style.width='3px';
		top3.style.height='24px';
		mid1.style.width='3px';
		mid1.style.height=height+'px';
		mid3.style.width='3px';
		mid3.style.height=height+'px';
		bot1.style.width='3px';
		bot1.style.height='3px';
		bot2.style.width=width+'px';
		bot2.style.height='3px';
		bot3.style.width='3px';
		bot3.style.height='3px';
		sqr1.style.width='16px';
		sqr1.style.height='16px';
		sqr2.style.width='16px';
		sqr2.style.height='16px';
		form.style.left=x+'px';
		form.style.top=y+'px';
		form.style.width=width+'px';
		form.style.height=height+'px';
		}
	}
function winmove(x,y){
	this.x=parseInt(x);
	this.y=parseInt(y);
	this.redraw();
	}
function winresize(width,height){
	this.width=parseInt(width);
	this.height=parseInt(height);
	this.redraw();
	}
//----End ECMA Window Obj----//

//---Begin Event Functions---//
function mdown(which,e,part){
	with(ECMAwin[which]){
		if(part=='sqr1'){
			resize(58,0);
			move(-64,27);
			return;
			}
		if(part=='sqr2'){
			if(height==0){
				resize(cmeasr.x,cmeasr.y);
				if(height==0){
					resize(cmeasr.x,256)
					}
				}
			else{
				cmeasr=new coordobj(width,height);
				resize(cmeasr.x,0);
				//move(24);
				return;
				}
			}
		cwhich=part;
		cclick=new coordobj(e.screenX,e.screenY);
		cghost=new coordobj(x,y);	
		if(height!=0||part=="bot1"||part=="bot2"||part=="bot3"){
			cmeasr=new coordobj(width,height);
			}
		}
	}
function mup(e){
	for(i=0;i<ECMAwin.length;i++){
		if(ECMAwin[i].cwhich!=null){
			ECMAwin[i].top2.elements["input"].focus();
			ECMAwin[i].top2.elements["input"].blur();
			ECMAwin[i].cwhich=null;
			}
		}
	}
function mmove(e){
	var which;
	for(i=0;i<ECMAwin.length;i++){
		if(ECMAwin[i].cwhich){
			which=ECMAwin[i];
			break;
			}
		}
	if(!which){return}
	with(which){
		var minx = 58;
		var miny = 37;
		var rezx = cmeasr.x;
		var rezy = cmeasr.y;
		var ncoord=new coordobj(e.screenX,e.screenY);
		if(cwhich=="top1"||cwhich=="top2"||cwhich=="top3"){
			if(cghost.y+(ncoord.y-cclick.y)-24<0){
				move(cghost.x+(ncoord.x-cclick.x),24);
				return;
				}
			move(cghost.x+(ncoord.x-cclick.x),cghost.y+(ncoord.y-cclick.y));
			return;
			}
		if(cwhich=="mid1"||cwhich=="bot1"){
			if(cmeasr.x-(ncoord.x-cclick.x)<=minx){
				move((cghost.x+cmeasr.x)-minx,cghost.y);
				rezx=minx;
				}
			else{
				move(cghost.x+(ncoord.x-cclick.x),cghost.y);
				rezx=cmeasr.x-(ncoord.x-cclick.x);
				}
			}
		if(cwhich=="mid3"||cwhich=="bot3"){
			if(cmeasr.x+(ncoord.x-cclick.x)<=minx){
				rezx=minx;
				}
			else{
				rezx=cmeasr.x+(ncoord.x-cclick.x);
				}
			}
		if(cwhich=="bot1"||cwhich=="bot2"||cwhich=="bot3"){
			if(cmeasr.y+(ncoord.y-cclick.y)<=miny){
				rezy=miny;
				}
			else{
				rezy=cmeasr.y+(ncoord.y-cclick.y);
				}
			}
		resize(rezx,rezy);
		}
	}
//----End Event Functions----//