(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



// stage content:
(lib.ใบงานบที่41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("THIS  IS  PENCIL", "17px 'Times New Roman'");
	this.text.lineHeight = 21;
	this.text.lineWidth = 141;
	this.text.parent = this;
	this.text.setTransform(242.55,148.8);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ap3iiQEWjoFRiAQHApUOeD8QM5Dfq4GOQq3GNrFmeQlBBcmJAIgA6ljAIhkiLQgmknFrgJIBvBrIAzA7ILZQtIAqEAIAHBWIhIgUA6ljAIAsA4IBVhSIBahWIBfhbIBJhKA1VoQQikCtisCjAt7NPQgDg8A3gGQANhNBMAcQgChRBYAMQAKhRBFASAt7NPIEbBLA4kjaILdPnAofNYQhAABgBBBA1rmLILTQiA3KkwILcQMA55iIIL+PX");
	this.shape.setTransform(221.2134,209.2808);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FFFF").s().p("An2DpQlDBcmIAIQEWjoFRh/QHApTOdD8QM5Deq4GOQlUDClXAAQlmAAlpjUg");
	this.shape_1.setTransform(279.8962,159.641);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjAYQABhAA/gCIAHBVg");
	this.shape_2.setTransform(163.9375,299.1625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("AitBXQgDg8A3gGQANhMBMAcQgChRBXAMQAKhQBFARIAqD/QhAACgBBBg");
	this.shape_3.setTransform(149.4295,285.2531);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AnvlpIBVhSILbPnQg2AGADA7gAlAoRIBfhcILSQjQhYgNACBRg");
	this.shape_4.setTransform(105.05,231.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003300").s().p("AmslYIBahWIhaBWIhVBSIgsg4QCsijCjitIA0A7IhJBKIBJhKILYQtQhFgRgKBQIrSwiIhfBbILbQMQhMgcgOBNg");
	this.shape_5.setTransform(106.85,221.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AjXBSQgmklFqgJIBvBqQikCtirCig");
	this.shape_6.setTransform(62.6422,167.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(356.7,351.1,57,-36);
// library properties:
lib.properties = {
	id: '337FCFF2EA75924CAD1F4F470099CC3B',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['337FCFF2EA75924CAD1F4F470099CC3B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;