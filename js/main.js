// If you can change any code for this with help vs code  beautify extention or use Unminifier/Uncompressor  website (use this link   https://unminify.com)

//============= Custom JS Code
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
$(document).ready(function () {
    $(".stiky_menu").waypoint(function (t) {
        "down" == t ? $("nav").addClass("sticky") : $("nav").removeClass("sticky");
    });
    mixitup(".row");

// Active link

    $("nav ul li a").click(function(){
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });

// SMOOTH Scroll FOR safari/IE/edge

    $("a").on('click',function(event){
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){
                window.location.hash = hash;
            })
        }
    })

});

//=================== Animated Circle JS Code
$("svg.radial-progress").each(function(e,t){$(this).find($("circle.complete")).removeAttr("style")}),$(window).scroll(function(){$("svg.radial-progress").each(function(e,t){$(window).scrollTop()>$(this).offset().top-.75*$(window).height()&&$(window).scrollTop()<$(this).offset().top+$(this).height()-.25*$(window).height()&&(percent=$(t).data("percentage"),radius=$(this).find($("circle.complete")).attr("r"),circumference=2*Math.PI*radius,strokeDashOffset=circumference-percent*circumference/100,$(this).find($("circle.complete")).animate({"stroke-dashoffset":strokeDashOffset},1250))})}).trigger("scroll");