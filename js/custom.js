var currentPage = 0;
var lastPage = 4;

function nextQwestion(){
	if(currentPage < lastPage){
		$('.carousel').carousel('next');
		$('.carousel').carousel('pause');
		currentPage++;
		showNextButton();
		showPrevButton();
	}
	else{
		//reset
		$('.carousel').carousel('next');
		$('.carousel').carousel('pause');
		currentPage = 0;
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