//jQuery Plugin for sticky navigation bar
$("#header").sticky({
   topSpacing: 0
});

//jQuery Plugin for lightBox
$(".venobox").venobox({
   framewidth: '800px',        
   titleattr: 'title',    
   numeratio: true,            
   infinigall: true ,          
   titlePosition: "bottom",
   numeratio:true
});

//jQuery Plugin for keywords filtering
$(".searchInput").hideseek({
   attribute: 'data-name',
});

//javascript for searchbox filtering
// $(".searchInput").on("keyup", function() {
//    const value = $(this).val().toLowerCase();
//    $("a[title]").filter(function() {
//      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//    });
//  });

