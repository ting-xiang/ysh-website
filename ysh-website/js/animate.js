/*
 * waypoint监听滚动事件并赋予css3动画效果
 * ---------------------------
 * author 严蕊
 *----------------------------
 */

var contentWayPoint = function() {
	var i = 0;
	$('.animate-box').waypoint( function( direction ) {
		if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {	
			i++;
			$(this.element).addClass('item-animate');
			setTimeout(function(){
				$('body .animate-box.item-animate').each(function(k){
					var el = $(this);
					setTimeout( function () {
						var effect = el.data('animate-effect');
						if ( effect === 'fadeInRight') {
							el.addClass('fadeInRight animated');
						} else if ( effect === 'fast') {
							el.addClass('fadeInUp animated-fast')
						} else {
							el.addClass('fadeInUp animated');
						}

						el.removeClass('item-animate');
					},  k * 200, 'easeInOutExpo' );
				});
			}, 100);	
		}
	} , { offset: '85%' } );
};
contentWayPoint();