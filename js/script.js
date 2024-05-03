// accordian list

$('.headeing').click(function (e) {
	e.preventDefault();

	let $this = $(this);
	$('.headeing').children('i').removeClass('active')
	if ($this.next().hasClass('show')) {
		$this.next().removeClass('show');
		$this.next().slideUp(350);

		$(this).children('i').removeClass('active')

	} else {
		$this.parent().parent().find('.accordian-parag').removeClass('show');
		$this.parent().parent().find('.accordian-parag').slideUp(350);
		$this.next().toggleClass('show');
		$this.next().slideToggle(350);
		// $('.headeing').children('i').removeClass('.active')
		$(this).children('i').addClass('active')

	}
});

//   //  loader
$(document).ready(function () {
	setTimeout(function () {
		$('.pre-loader').fadeOut();
	}, 1200);
})

// header

$(window).scroll(function () {
	var sticky = $('.sticky'),
		scroll = $(window).scrollTop();

	if (scroll >= 120) sticky.addClass('fixed');
	else sticky.removeClass('fixed');
});

// top to bottom scroll

(function ($) {
	"use strict";

	$(document).ready(function () {
		"use strict";

		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function () {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});
		jQuery('.progress-wrap').on('click', function (event) {
			event.preventDefault();
			jQuery('html, body').animate({ scrollTop: 0 }, duration);
			return false;
		})


	});

})(jQuery);


