/*
Authors: Cassidy Tanner & Christina Wang
Date: April 23, 2015
Updated: April 29, 2015
Purpose: jQuery functions for the Roster page.  Dynamically creates the roster using jQuery
		cloning, updates and displays an infobox for each team member when clicked on, and
		makes images less opaque when hovered over.
Filename: roster.js
*/

/* This function finds an empty template in the HTML and clones it, filling in information
from a team_members array, then appends the clones to the roster_gallery */
function formatRoster(){
	for (var i=0; i < team_members.length; i=i+1) { // call the information to the gallery 
    var player = team_members[i];
    var clone = $("#photo-template").clone();
    clone.find("img").attr("src", player.url);
    clone.find(".name").html(player.name);
    clone.find(".year").html(player.year);
    clone.find(".leadership").html(player.leadership);
    clone.find(".photo-click img").attr("data-index", i);
    clone.appendTo("#roster_gallery");
    $("#photo-template").show();
	}
}


function displayInfoBox(i){
	$("#bio-infobox").show(); // display the info box 	
	
	//These will all be filled in from the array using the index given to us by clicking
	$("#name-bio").html("<em>Name: </em>" + team_members[i].name);
	$("#nickname-bio").html("<em>Nickname: </em>" + team_members[i].nickname);
	$("#year-bio").html("<em>Class Year: </em>" + team_members[i].year);
	$("#hometown-bio").html("<em>Hometown: </em>" + team_members[i].hometown);
	$("#major-bio").html("<em>Major: </em>" + team_members[i].major);
	if(team_members[i].cookie==="yes"){
		$("#interests-bio").html("<em>Summary: </em>" + team_members[i].interests);
		$("#position-bio").html("<em>Vegetable: </em>" + team_members[i].position);
	}else{
	$("#interests-bio").html("<em>Interests: </em>" + team_members[i].interests);
	$("#position-bio").html("<em>Postition: </em>" + team_members[i].position);
	}
	$("#fact-bio").html("<em>Fun Fact: </em>" + team_members[i].fact);
	// add the information from the array into the info box	
}

$("#close").click(function() {
	$("#bio-infobox").hide(); // causes the infobox to close when we hit the close button
}); 

formatRoster();


$(".photo-click img").click(function() {
	var dIndex = $(this).attr("data-index"); //create a new variable for the index 
	console.log(dIndex);
	displayInfoBox(dIndex); // invoke the displayInfoBox function after clicking the image
});

/* When moused over, photo will become less opaque, when mouse leaves the image, opacity 
returns to normal.  This makes the name/year/leadership text on top of the image more
readable and also just generally looks cool. */
$(".photo-click img").mouseover(function(){
	$(this).css({ opacity: .2 });
});

$(".photo-click img").mouseout(function(){
	$(this).css({ opacity: 1 });
});
