$(document).ready(function(){
	$(".navbar a, footer a[href='#top']").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			
			$('html, body').animate({
			    scrollTop: $(hash).offset().top
			}, 900, function(){
			    window.location.hash = hash;
			});
		}
	});
			  
	$(window).scroll(function() {
		$(".slideanim").each(function(){
			var pos = $(this).offset().top;

			var winTop = $(window).scrollTop();
			if (pos < winTop + 600) {
				$(this).addClass("slide");
			}
		});
	});

	$('.more, .less').on('click', function() {
		var a, p, show, hidden;

		a = $(this);
		p = a.closest('div').parent();
		show = p.find('div.show');
		hidden = p.find('div.hidden');

		if (a.attr('class') === 'more') {
			a.text('Ver Menos').addClass('less').removeClass('more');
		}
		else {
			a.text('Ver Mais').addClass('more').removeClass('less');
		}
		
		show.addClass('hidden').removeClass('show');
		hidden.addClass('show').removeClass('hidden');
	});
});