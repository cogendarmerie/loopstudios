$("nav [data-menuaction]").click(function(){
    $("nav").attr("data-status",$(this).data("menuaction"));
});