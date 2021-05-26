var swiper = new Swiper('.swiper-container1', {
	slidesPerView: '1',
	spaceBetween: 7,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
    nextEl: '.arrow_next',
    prevEl: '.arrow_prev',
  },
});
var swiper = new Swiper('.swiper-container2', {
	slidesPerView: '1',
	spaceBetween: 7,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
    nextEl: '.arrow_next2',
    prevEl: '.arrow_prev2',
  },
});
var play_vid=0;
$(".video_block_box").click(function(event){
  if(play_vid==0){
    play_vid=1
    $(".vid_show").show()
    $(".video_block_box img").hide()
    $(".video_block_box button").hide()
    $(".vid_show").get(0).play();
    $(".vid_show").css("z-index","5")

  }
  else {
    $(".vid_show").hide();
    $(".video_block_box img").show()
    $(".video_block_box button").show()
    $(".vid_show").get(0).pause();
    $(".vid_show").css("z-index","-2")
    play_vid=0
  }
})
$(".faq_cont_cuestion_item_title").click(function(){
  $(this).siblings(".faq_cont_cuestion_item_hide").slideToggle(500)
})
var menu = 0;
$(".open_menu").click(function(){
  if(menu == 0){
    $(".menu").slideDown(500)
    $(".span1").css("transform","rotate(45deg)")
    $(".span2").css("transform","rotate(-45deg)")
    $(".span2").css("top","-9px")
    menu = 1
  }else{
    $(".menu").slideUp(500)
    $(".span1").css("transform","rotate(0)")
    $(".span2").css("transform","rotate(0)")
    $(".span2").css("top","0")
    menu = 0
  }
})
