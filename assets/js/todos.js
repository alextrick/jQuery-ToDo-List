//Check off
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Delete
$("ul").on("click", "span", function(){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

//New
$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        //get text
        let text = $(this).val();
        $(this).val("");
        //add li
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + text + "</li>");
        
    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})