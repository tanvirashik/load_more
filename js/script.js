$(document).ready(function(){
    $(".load").slice(0, 3).show()
    $(".btn").on("click",function(){
        $(".load:hidden").slice(0, 3).slideDown()
        if($(".load:hidden").length=0){
            $(".lbtn").fadeOut('slow');
        }
    })
})
