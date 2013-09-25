$("document").ready(function(){
	$(".dashboard .tweet-compose").on("click",function(){
		$(".tweet-content .tweet-controls").show();
		$(this).css("height","5em");
	});

	$(".stream .tweet-compose").on("click", function(){
		$(this).css("height","5em");
	});



	$(".tweet-content .tweet-compose").on("keyup", function(){
		var tweetLength = $("textarea").val().length;
		$(".char-count").text(140-tweetLength);
		 if (tweetLength>=130){
		 	$(".char-count").css("color","red");
		 }
		 if (tweetLength<130){
		 	$(".char-count").css("color","black");
		 }
		 if (tweetLength>0){
		 	$(".tweet-controls button").css({"background-color":"#17b1f9", "color":"white","text-shadow": "none"});
		 	$(".tweet-controls button").removeAttr("disabled");
		 }
		 if (tweetLength ==0 || tweetLength>140){
		 	$(".tweet-controls button").css({"background-color":"#ddd", "color":"#777", "text-shadow":"0 1px 1px rgba(255,255,255,.75)"});
		 	$(".tweet-controls button").attr("disabled",true);
		 }

	});

	$(".tweet-controls button").on("click",function(){
		var tweetClone = $(".tweet").first().clone();
		var newTweetText = $(".tweet-content textarea").val();
		tweetClone.find("p.tweet-text").text(newTweetText);
		var profilePic = $(".profile-summary img.avatar").attr("src");
		tweetClone.find("img.avatar").attr("src", profilePic);
		tweetClone.find(".fullname").text("Brenan Klain");
		tweetClone.find(".username").text("@brenank");
		tweetClone.hide().prependTo(".stream").slideDown("fast");
	});

	$(document).on("mouseenter",".tweet",function(){
		$(this).find(".tweet-actions").css('visibility','visible');
		$(this).css("background-color", "#f9f9f9");
	}); 
	$(document).on("mouseleave",".tweet",function(){
		$(this).find(".tweet-actions").css('visibility','hidden');
		$(this).css("background-color", "#fff");
	});

	$(document).on("click",".expand", function(){
		$(this).closest(".tweet").find(".reply").slideToggle();
		$(this).closest(".tweet").find(".stats").slideToggle();
		 if ($(this).text() == "Expand")
       	$(this).text("Collapse")
    	else
       $(this).text("Expand");
	});

	$(document).on("click", ".tweet-actions li:nth-child(2)", function(){
		var retweetTweet = $(this).closest(".tweet").clone();
		retweetTweet.find(".tweet-actions").hide();
		$(".modal-body").html(retweetTweet);
		$("#retweetModal").modal("show");
	});


	$(document).on("click", ".modal-footer button:nth-child(2)", function(){
		var retweetCount = $(this).closest(".modal-body").find(".num-retweets").html();
		retweetCount++;

	});
	
});

