/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         sym.defaultPerspective  = 1600;
         var glassesOpen = true;
         var btext = "Fold";
         sym.getSymbol('Button_co').$('Text').text(btext);
         
         sym.updatePerspective = function (perspective) {
         	var p = perspective || 64;
         	$('.perspective').css('perspective', p)
         	sym.getSymbol('slider').updateInput(p, "");
         }
         
         $('.perspective').css('perspective', "1600px");
         
         // Define 3d space and viewports
         $('#jumbotron').css('height','auto');
         TweenMax.set(sym.$('spaceB'), {perspectiveOrigin: "51.5% -340px"});
         TweenMax.set(sym.$('spaceR'), {perspectiveOrigin: "48.5% -340px"});
         
         // Defin Glasses
         TweenMax.set([sym.getSymbol('glasses_r').$('left_b'), sym.getSymbol('glasses_b').$('left')], {transformOrigin: '0% 50%', rotationY:105});
         TweenMax.set([sym.getSymbol('glasses_r').$('right_b'), sym.getSymbol('glasses_b').$('right')], {transformOrigin: '100% 50%', rotationY:-105});
         
         // Set text
         // TweenMax.set([sym.$('text_b'), sym.$('text_r')], {z:-250});
         
         // Animations
         TweenMax.to([sym.$('glasses_r'), sym.$('glasses_b')], 5, {transformStyle: "preserve-3d",rotationY:-360, repeat:-1, transformOrigin:"50% 50% -250px", ease:Linear.easeNone});
         
         sym.$('Button_co').click(function () {
         	if (glassesOpen) {
         		glassesOpen = false;
         		btext = "Unfold";
         		TweenMax.to([sym.getSymbol('glasses_r').$('left_b'), sym.getSymbol('glasses_b').$('left')], .4, {rotationY:182});
         		TweenMax.to([sym.getSymbol('glasses_r').$('right_b'), sym.getSymbol('glasses_b').$('right')], .4, {rotationY:-184, delay:.2, onComplete:function() {
         			TweenMax.to([sym.$('glasses_r'), sym.$('glasses_b')], .5, {});
         			sym.getSymbol('Button_co').$('Text').text(btext);
         		}});
         
         	} else {
         		glassesOpen = true; 
         		btext = "Fold";
         		TweenMax.to([sym.getSymbol('glasses_r').$('left_b'), sym.getSymbol('glasses_b').$('left')], .4, {rotationY:105});
         		TweenMax.to([sym.getSymbol('glasses_r').$('right_b'), sym.getSymbol('glasses_b').$('right')], .4, {rotationY:-105, delay:.2, onComplete:function(){
         			TweenMax.to([sym.$('glasses_r'), sym.$('glasses_b')], .5, {});
         			sym.getSymbol('Button_co').$('Text').text(btext);
         		}});
         	}
         
         });

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'glasses'
   (function(symbolName) {   
   
   })("glasses_r");
   //Edge symbol end:'glasses_r'

   //=========================================================
   
   //Edge symbol: 'glasses_r_1'
   (function(symbolName) {   
   
   })("glasses_b");
   //Edge symbol end:'glasses_b'

   //=========================================================
   
   //Edge symbol: 'cube_r'
   (function(symbolName) {   
   
   })("cube_b");
   //Edge symbol end:'cube_b'

   //=========================================================
   
   //Edge symbol: 'cube_b_1'
   (function(symbolName) {   
   
      })("cube_r");
   //Edge symbol end:'cube_r'

   //=========================================================
   
   //Edge symbol: 'Down-level'
   (function(symbolName) {   
   
   })("Down-level");
   //Edge symbol end:'Down-level'

   //=========================================================
   
   //Edge symbol: 'slider'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         var parent = sym.getParentSymbol();
         var handle = sym.$('Button');
         var display = sym.getSymbol('Button').$('Text');
         
         var percent = parseInt ( handle.css('left') );
         
         display.text( parent.defaultPerspective + "" );
         
         sym.updateInput = function (input, suffix) {
         	display.text( input + ( suffix || "" ) );
         }
         
         Draggable.create(handle, {
         	type:"left",
         	bounds: sym.getSymbolElement(),
         	onClick:function() {
         		console.log("clicked");
         	},
         	onDrag:function() {
         		percent = parseInt ( ( parseInt(handle.css('left')) / (sym.getSymbolElement().width() - handle.width() - parseInt (handle.css('border-width')) * 2 ) ) * 100 );
         		parent.updatePerspective( (parent.defaultPerspective * percent / 100) * 2 )
         	},
         	onDragEnd:function() {
         		console.log("drag ended");
         	}
         });
         
         

      });
      //Edge binding end

   })("slider");
   //Edge symbol end:'slider'

   //=========================================================
   
   //Edge symbol: 'button'
   (function(symbolName) {   
   
   })("button");
   //Edge symbol end:'button'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-725599650");