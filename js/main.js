$(document).on("click", ".tab:not(.open) .circle", function(){
	$(".tab").addClass("open");
});
$(document).on("click", ".tab.open .circle .fa-times", function(){
	$(".tab").removeClass("open");
});