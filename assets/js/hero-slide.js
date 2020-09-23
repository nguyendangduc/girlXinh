$(document).ready(function(){
    var sliderNav = $(".slider-nav"),
        heroSlider = $(".hero-slider");
        $(window).on('load', function () {//($(window).load khong hop le vs 1 so phien ban)
            var visibleSliderHeight = heroSlider.children(".selected").height();
            var headerHeight = $(".app__header").height();
            $(".app").height(visibleSliderHeight + headerHeight);
            heroSlider.children(".selected").find(".gallery-figure").css({"transform":"unset","opacity":"1","transition-delay":"1.8s"});
        });
    sliderNav.find("li").click(function(event){ 
        event.preventDefault();
        if(!$(this).hasClass("selected")){
            var visibleItem = sliderNav.children(".selected"),
                visibleItemPosition = visibleItem.index(),
                selectedItem = $(this),
                selectedItemPosition = selectedItem.index();
            if(selectedItemPosition > visibleItemPosition){
                nextSlide(heroSlider, selectedItemPosition);
            }
            else {
                prevSlide(heroSlider, selectedItemPosition);
            }
            heroSlider.children("li").eq(selectedItemPosition).find(".gallery-figure").css({"transform":"unset","opacity":"1"});
            updateSliderNavigation(sliderNav, selectedItemPosition);   
        }
        var visibleSliderHeight = heroSlider.children(".selected").height();
        var headerHeight = $(".app__header").height();
        $(".app").height(visibleSliderHeight + headerHeight);        
    });
  
    // function nextSlide(container, visibleSliderPosition) {
    //     container.children(".selected").removeClass("selected");
    //     container.children("li").eq(visibleSliderPosition).addClass("selected").prevAll().addClass("move-left");
        
    // }
    // function prevSlide(container, visibleItemPosition) {
    //     container.children(".selected").removeClass("selected");
    //     container.children("li").eq(visibleItemPosition).addClass("selected").removeClass("move-left").nextAll().removeClass("move-left");
    // }
    function nextSlide(container, selectedSliderPosition) {//khi next thi tat ca cac the sang ben phai ,thẻ đucợ selected sẽ ra giũa
        container.children(".selected").removeClass("selected right-now");  
        container.children("li").eq(selectedSliderPosition).addClass("selected").removeClass("slide-effect").prevAll().addClass("slide-effect");
        
    }
    function prevSlide(container, selectedItemPosition) {//khi prev thì thẻ ỏ giữa sẽ sang bên phải,thẻ được selected sẽ hiện ngay giữa
        container.children(".selected").removeClass("selected right-now");
        container.children("li").eq(selectedItemPosition).addClass("selected right-now").removeClass("slide-effect");
        //bản chất cái slider ban đầu thì xóa selected cái slider đucợ selected thì addclass vào còn right-now vs slide-effect là cái thêm vào chohieeuj ưng
    }
    function updateSliderNavigation(navigation, selectedItemPosition) {
        navigation.children(".selected").removeClass("selected");
        navigation.children("li").eq(selectedItemPosition).addClass("selected");
    }
    // ==============================================set chieu cao =====================================
    
});


// *** chú ý bài này không dùng ý tưởng giống slide đó là translate hoặc left vì khi selectted 2 lựa chọn quá xa sẽ gây hiệu ứng k tốt