var currentPage = 0;
var lastPage = 2;

function nextQwestion(){
	if(currentPage < lastPage){
		$('.carousel').carousel('next');
		$('.carousel').carousel('pause');
		currentPage++;
		showNextButton();
		showPrevButton();
	}
}
function prevQwestion(){
	if(currentPage > 0){
		$('.carousel').carousel('prev');
		$('.carousel').carousel('pause');
		currentPage--;
		showNextButton();
		showPrevButton();
	}
}
function showNextButton() {
	$('.carousel-control-next').prop('hidden', !(currentPage > 0 && currentPage < lastPage));
}
function showPrevButton() {
	$('.carousel-control-prev').prop('hidden', !(currentPage > 0 && currentPage < lastPage));
}