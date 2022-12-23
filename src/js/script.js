$("nav [data-menuaction]").click(function(){
    alert($(this).data("menuaction"));
    $("nav").data("status",$(this).data("menuaction"));
});