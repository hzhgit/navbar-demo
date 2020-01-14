$(function () {
    $('.navbar-toggle').click(function () {
        $('#my-accordion').toggle()
    })

    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link');
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }
    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this), $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass('open');
        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }
    var accordion = new Accordion($('#accordion'), false);


    $('.link2').click(function(){
        if($(this).next().css('display') == 'none'){
            $(this).children().toggleClass('i2')
            $(this).parent(0).siblings().children().next().slideUp()
            $(this).parent(0).siblings().children().children().removeClass('i2')
            $(this).next().slideDown()
        }else{
            $(this).children().toggleClass('i2')
            $(this).next().slideUp()
        }
    })
});

