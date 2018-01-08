$(document).ready(function(){
	function readURL(input) {
    	if (input.files && input.files[0]) {
      	  	var reader = new FileReader();
     	 	reader.onload = function (e) {
     	 	    $('#image_section').attr('src', e.target.result);
     		}
 
    	reader.readAsDataURL(input.files[0]);
   	 }
	}
	$("#imgInput").change(function(){
  	  readURL(this);
	});

	$("#resume").on("click",function(){
		/* 다른 사이트로 이동 */
		// $(location).attr('href',"http://www.naver.com");
		// location.href = "http://www.naver.com";
		/* 다른 파일(html)로 이동 */
		location.href = "./resume.html";
	});
	$("#home").on("click",function(){
		location.href = "./index.html";
	});
	$("#write").on("click",function(){
		location.href = "./write.html";
	});
	// $(".menu").hover(function(){
	// 	// 해당 li 태그에 속한 ul 태그를 보여준다
	// 	$("ul:first",this).show();
	// },
	// function(){
	// 	// 마우스 뗐을 때 : 숨긴다.
	// 	$("ul:first",this).hide();
	// });
});	
		
