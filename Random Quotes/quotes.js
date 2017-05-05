//lambang $ dolar adalah singkatan dari Jquery, yaitu sebuah fungsi besar dari jquery
			$(document).ready(function() {

				$("#div5").hide();
				
				$("#btn1").click(function(event){
					
					$.ajax({
						url : "http://localhost:8080/webii/randomquotes/quotes_api.php",
						dataType : "json",
						type : "GET",
					})
					.done(function(data) {
						var idx = Math.floor(Math.random() * data.quotes.length);
						$("#q1").html(data.quotes[r].quote);
						$("#span1").html(data.quotes[r].author);
						$("html body").css({"background-color":data.quotes[r].color});
						$("#div4").css({"color":data.quotes[r].color});
						$("#div5").css({"color":data.quotes[r].color});
						$("#btn1").css({"background-color":data.quotes[r].color});
						$("#tweet-quote").css({"background-color":data.quotes[r].color});
					})

					$("#div5").show();

					//$("#share").attr({"action": "https://twitter.com/intent/tweet?text=\"" + encodeURIComponent($("#hidden").html(quote[r]).text()) + "\" http://codepen.io/xgusth/full/OyeJLP?q=" + r});
					$(".quotes").animate({opacity: 0}, 500,
						function() {
          					$(this).animate({opacity: 1}, 500);
					});
					$(".author").animate({opacity: 0}, 500,
						function() {
							$(this).animate({opacity: 1}, 500);
					});
					$("#btn1").animate({opacity: 0}, 500,
						function() {
							$(this).animate({opacity: 1}, 500);
					});
					$("#tweet-quote").animate({opacity: 0}, 500,
						function() {
							$(this).animate({opacity: 1}, 500);
					}); 
				});	
			});