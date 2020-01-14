$(function () {
    $(".navbar-nav li:nth-child(2)").click(function () {
        $(".aboutus-nav").hide()
        $(".product-service-nav").toggle()
    })
    $(".navbar-nav li:nth-child(4)").click(function () {
        $(".product-service-nav").hide()
        $(".aboutus-nav").toggle()
    })

    $(".arrow").click(function () {
        var x = $(this).children().children();
        var src = x.attr("src")
        if(src == '../image/btn_unfold.png'){
            x.attr("src","../image/btn_hide.png")
            x.parent().parent().siblings().children().children().attr("src","../image/btn_unfold.png")
        }else{
            x.attr("src","../image/btn_unfold.png")
        }
    })

})


window.onresize = function () {
    if(window.innerWidth >= 768){
        $('#my-accordion').css({
            "display":"none"
        })
    }
    if(window.innerWidth <= 768){
        $('.product-service-nav').hide()
        $('.aboutus-nav').hide()
        $(".arrow").children().children().attr("src","../image/btn_unfold.png")
    }
}