function searchArticle(query){
   $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&grnnamespace=0&prop=extracts&exlimit=max&explaintext&exintro&gsrsearch=" + query + "&callback=?", function(result) {
      // button Choose For Me ready to be clicked again
      $("#submit").attr("disabled", false);
      if (result.hasOwnProperty("query")) {
         $.each(result.query.pages, function(key, page){
            var extract = page.extract.length > 464 ? page.extract.substring(0,464) + "..." : page.extract;
            $("#article-list").append('<li><h2><a target="_blank" href="http://en.wikipedia.org/?curid=' + page.pageid + '">' + page.title + '</a></h2>' + '<p>' + extract + '</p>' + '</li>');
         });
      }
   });
}

$(document).ready(function() {
   $("#no").hide();
   $("#submit").on("click", function(e) {
      // cleaning after previous search
      $("#article-list").html(""); 
      // making article-list visible again
      $("#article-list").fadeIn(1000);
      if ($("#query").val() === "") {
         $("#no").fadeIn(500);
      } else {
         // disable the button before getting the response from API
         $(this).attr("disabled", true);
         // passing input text
         searchArticle($("#query").val());
         $("#no").hide(); 

      }
      e.preventDefault();
   });
});