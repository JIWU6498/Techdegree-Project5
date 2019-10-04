//jQuery Plugin for sticky navigation bar
$("#header").sticky({
   topSpacing: 0
});

//jQuery Plugin for lightBox
$(".venobox").venobox({
   framewidth: '800px',
   titleattr: 'title',
   numeratio: true,
   infinigall: true,
   titlePosition: "bottom",
   numeratio: true
});

//jQuery Plugin for keywords filtering
// $(".searchInput").hideseek({
//    attribute: 'data-name',
// });

//javascript for searchbox filtering
$(".searchInput").on("keyup", function () {
   const $search = $(this).val().toLowerCase();
   // console.log($search);
   const $title = document.getElementsByTagName("a");
   for (let i = 0; i < $title.length; i++) {
      let $titleDec = $title[i].getAttribute("title");
      if ($titleDec.includes($search)) {   
         $title[i].parentNode.style.display = "block";  
      } else {
         $title[i].parentNode.style.display = "none";
      }
   }
});

