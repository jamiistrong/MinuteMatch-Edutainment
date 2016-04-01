;
(function ($) {
   var radialText= 'Play';
	$.fn.loading = function () {
		var DEFAULTS = {
			backgroundColor: '#b3cef6',
			//progressColor: '#4b86db',
            progressColor: '#3ed890',
			percent: 75,
			duration: 2000
            
            
		};	
		
		$(this).each(function () {
			var $target  = $(this);

			var opts = {
			backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
			progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
			percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
			duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration
			};
			// console.log(opts);
            
            //Added timer function
            /*setInterval(function(){
            timeLeft= timeLeft-1;
            
            if(timeLeft<0)
            {
               timeLeft=0; 
               $('span').css('fontSize', '0.5rem');
               //$('span').html('TIMES UP');
               timeLeft = "TIMES UP";
            }
           
            
            if(timeLeft < 31)
            {
                   
               $('.rotate').css('background-color', '#fcbe34');
               $('.right').css('background-color', '#fcbe34');
               $('span').css('color', '#fcbe34');
               
               
            }
            
            if(timeLeft < 16)
            {
                   
              $('.rotate').css('background-color', 'red');
               $('.right').css('background-color', 'red');
               $('span').css('color', 'red');
            }
            $('span').html(timeLeft);
            },900);*/
            
            
            
			$target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + radialText + '</span></div>');
            
			$target.find('.background').css('background-color', opts.backgroundColor);
			$target.find('.left').css('background-color', opts.backgroundColor);
			$target.find('.rotate').css('background-color', opts.progressColor);
			$target.find('.right').css('background-color', opts.progressColor);
	
			var $rotate = $target.find('.rotate');
			setTimeout(function () {	
				$rotate.css({
					'transition': 'transform ' + opts.duration + 'ms linear',
					'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
				});
			},1);		

			if (opts.percent > 50) {
				var animationRight = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-end';
				var animationLeft = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-start';  
				$target.find('.right').css({
					animation: animationRight,
					opacity: 1
				});
				$target.find('.left').css({
					animation: animationLeft,
					opacity: 0
				});
			} 
		});
        
        
	}
})(jQuery);