// Check of specific todos by clicking them
$("ul").on("click", "li", function(){
$(this).toggleClass("completed")
});

// click on X to delete todos
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
})

// grabbing new todo text from input
$("input").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});
$(".fa-plus").click(function(){
    $("input").fadeToggle(); 
})