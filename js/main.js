window.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        $(".all").click(function () {
            $(".all ul li").addClass("active");
            $("#section1").show();
        });
    });
    
    $("#right").click(function(){
        $("#slide").animate({
             "margin-left": "-=20%"
        },'slow');
    });

});
